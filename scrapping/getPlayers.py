import os
import re
import time
import requests
import pandas as pd
from bs4 import BeautifulSoup
from urllib.parse import urljoin

class BasketballReferenceScraper:
    def __init__(self, season_year):
        """
        Initialize scraper for a specific season.
        season_year: int (e.g., 2024 for 2023-24 season)
        """
        self.season_year = season_year
        self.base_url = "https://www.basketball-reference.com"
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        })
        self.output_dir = f"basketball_data_{season_year}"
        os.makedirs(self.output_dir, exist_ok=True)

    def get_page(self, url, retries=3):
        """Fetch page with retry logic and rate limiting."""
        for attempt in range(retries):
            try:
                time.sleep(5)  # Rate limiting
                response = self.session.get(url)
                response.raise_for_status()
                return BeautifulSoup(response.content, 'html.parser')
            except Exception as e:
                if hasattr(response, "status_code") and response.status_code == 429:
                    print(f"Rate limit exceeded for {url}. Retrying in 2.5 hours lmao...")
                    time.sleep(10000)
                print(f"Attempt {attempt + 1} failed for {url}: {e}")
                if attempt == retries - 1:
                    raise
                time.sleep(5)

    def scrape_team_stats(self):
        """Scrape team per game and advanced stats."""
        print(f"Scraping team stats for {self.season_year} season...")
        per_game_url = f"{self.base_url}/leagues/NBA_{self.season_year}.html"
        soup = self.get_page(per_game_url)

        per_game_table = soup.find('table', {'id': 'per_game-team'})
        advanced_table = soup.find('table', {'id': 'advanced-team'})
        team_results_east = soup.find('table', {'id': 'confs_standings_E'})
        team_results_west = soup.find('table', {'id': 'confs_standings_W'})

        if per_game_table is not None:
            team_per_game = pd.read_html(str(per_game_table))[0]
            team_per_game.to_csv(f"{self.output_dir}/team_per_game_{self.season_year}.csv", index=False)
            print(f"Team per game stats saved: {len(team_per_game)} teams")

        if advanced_table is not None:
            team_advanced = pd.read_html(str(advanced_table))[0]
            team_advanced.to_csv(f"{self.output_dir}/team_advanced_{self.season_year}.csv", index=False)
            print(f"Team advanced stats saved: {len(team_advanced)} teams")

        # Combine East and West conference standings
        combined_standings = []
        
        if team_results_east is not None:
            team_results_east_df = pd.read_html(str(team_results_east))[0]
            for _, row in team_results_east_df.iterrows():
                if 'Eastern Conference' not in str(row.get('Team', '')):
                    team_name = str(row.get('Team', ''))
                    # Extract city and team name (assuming format like "Boston Celtics")
                    name_parts = team_name.split()
                    if len(name_parts) >= 2:
                        city = name_parts[0]
                        name = ' '.join(name_parts[1:])
                    else:
                        city = team_name
                        name = team_name
                    
                    combined_standings.append({
                        'id': str(row.get('Team', ''))[:3].upper(),  # First 3 chars as abbreviation
                        'city': city,
                        'conference': 'Eastern',
                        'games_lost': int(row.get('L', 0)) if pd.notna(row.get('L', 0)) else 0,
                        'games_won': int(row.get('W', 0)) if pd.notna(row.get('W', 0)) else 0,
                        'name': name
                    })
        
        if team_results_west is not None:
            team_results_west_df = pd.read_html(str(team_results_west))[0]
            for _, row in team_results_west_df.iterrows():
                if 'Western Conference' not in str(row.get('Team', '')):
                    team_name = str(row.get('Team', ''))
                    # Extract city and team name (assuming format like "Golden State Warriors")
                    name_parts = team_name.split()
                    if len(name_parts) >= 2:
                        city = name_parts[0]
                        name = ' '.join(name_parts[1:])
                    else:
                        city = team_name
                        name = team_name
                
                    combined_standings.append({
                        'id': str(row.get('Team', ''))[:3].upper(),  # First 3 chars as abbreviation
                        'city': city,
                        'conference': 'Western',
                        'games_lost': int(row.get('L', 0)) if pd.notna(row.get('L', 0)) else 0,
                        'games_won': int(row.get('W', 0)) if pd.notna(row.get('W', 0)) else 0,
                        'name': name
                    })

        if combined_standings:
            combined_df = pd.DataFrame(combined_standings)
            combined_df.to_csv(f"{self.output_dir}/team_standings_{self.season_year}.csv", index=False)
            print(f"Combined team standings saved: {len(combined_df)} teams")

    def scrape_player_stats(self):
        """Scrape player per game and advanced stats."""
        print(f"Scraping player stats for {self.season_year} season...")

        # Player per game stats
        per_game_url = f"{self.base_url}/leagues/NBA_{self.season_year}_per_game.html"
        soup = self.get_page(per_game_url)
        per_game_table = soup.find('table', {'id': 'per_game_stats'})

        # Player advanced stats (includes PER)
        advanced_url = f"{self.base_url}/leagues/NBA_{self.season_year}_advanced.html"
        advanced_soup = self.get_page(advanced_url)
        advanced_table = advanced_soup.find('table', {'id': 'advanced'})
        
        # Create a dictionary to map player names to their PER values
        per_data = {}
    
        player_advanced = pd.read_html(str(advanced_table))[0]
        player_advanced = player_advanced[player_advanced['Player'] != 'Player']

        if per_game_table is not None:
            player_per_game = pd.read_html(str(per_game_table))[0]
            player_per_game = player_per_game[player_per_game['Player'] != 'Player']
            
            # Create formatted dataset
            formatted_data = []
            for index, row in player_per_game.iterrows():
                formatted_data.append({
                    'id': index + 1,
                    'name': row.get('Player', ''),
                    'team_id': row.get('Team', ''),
                    'position': row.get('Pos', ''),
                    'games_played': row.get('G', 0),
                    'field_goals_made': row.get('FG', 0),
                    'field_goals_attempted': row.get('FGA', 0),
                    'field_goals_percentage': row.get('FG%', 0),
                    'rebounds': row.get('TRB', 0),
                    'assists': row.get('AST', 0),
                    'steals': row.get('STL', 0),
                    'blocks': row.get('BLK', 0),
                    'points': row.get('PTS', 0),
                    'turnovers': row.get('TOV', 0),
                    'efficiency': player_advanced.loc[player_advanced['Player'] == row['Player'], 'PER'].values[0] if not player_advanced[player_advanced['Player'] == row['Player']].empty else None
                })
            
            formatted_df = pd.DataFrame(formatted_data)
            formatted_df.to_csv(f"{self.output_dir}/player_stats_{self.season_year}.csv", index=False)
            print(f"Player stats saved: {len(formatted_df)} players")

    def get_team_links(self):
        """Get links to individual team pages."""
        standings_url = f"{self.base_url}/leagues/NBA_{self.season_year}.html"
        soup = self.get_page(standings_url)
        team_links = []
        for link in soup.find_all('a', href=True):
            href = link['href']
            if '/teams/' in href and f'/{self.season_year}.html' in href:
                team_links.append(urljoin(self.base_url, href))
        return list(set(team_links))

    def scrape_coach_data(self):
        """Scrape coach information for each team."""
        print(f"Scraping coach data for {self.season_year} season...")
        page = self.get_page(f"{self.base_url}/leagues/NBA_{self.season_year}_coaches.html")

        all_tables = page.find_all('table')
        print(f"Found {len(all_tables)} tables on the page")
        for i, table in enumerate(all_tables):
            table_id = table.get('id', 'No ID')
            print(f"Table {i}: ID = {table_id}")

        stats_table = page.find('table', {'id': 'NBA_coaches'})
        if not stats_table:
            print("Trying alternative table IDs...")
            stats_table = (
                page.find('table', {'id': 'coaches'}) or
                page.find('table', {'id': 'coach_stats'}) or
                page.find('table', {'class': 'stats_table'})
            )

        coaches_data = []
        if stats_table:
            rows = stats_table.find_all('tr')[1:]  # Skip header
            for row in rows:
                cols = row.find_all('td')
                if cols:
                    # Find specific columns by data-stat attribute
                    team_col = row.find('td', {'data-stat': 'team'})
                    games_col = row.find('td', {'data-stat': 'cur_g'})
                    wins_col = row.find('td', {'data-stat': 'cur_w'})
                    losses_col = row.find('td', {'data-stat': 'cur_l'})
                    coach_name_elem = row.find('th', {'data-stat': 'coach'})
                    
                    if coach_name_elem and coach_name_elem.find('a'):
                        coach_name = coach_name_elem.find('a').text.strip()
                        coach_name = re.sub(r'\s+', ' ', coach_name)
                        coach_name = re.sub(r'\(.*?\)', '', coach_name).strip()  # Remove any notes in parentheses
                    else:
                        coach_name = "Unknown"
                    
                    if team_col:
                        team_name = team_col.text.strip()
                        coach_url = urljoin(self.base_url, team_col.find('a')['href']) if team_col.find('a') else None
                        
                        coaches_data.append({
                            'Team': team_name,
                            'Coach': coach_name,
                            'Coach URL': coach_url,
                            'Games': games_col.text.strip() if games_col else None,
                            'Wins': wins_col.text.strip() if wins_col else None,
                            'Losses': losses_col.text.strip() if losses_col else None
                        })
            
            if coaches_data:
                coaches_df = pd.DataFrame(coaches_data)
                coaches_df.to_csv(f"{self.output_dir}/coaches_{self.season_year}.csv", index=False)
                print(f"Coach data saved: {len(coaches_data)} coaches")
        else:
            print("No coach table found on the page.")

    def scrape_all_data(self):
        """Scrape all data types."""
        print(f"Starting complete data scrape for {self.season_year} season...")
        try:
            self.scrape_team_stats()
        except Exception as e:
            print(f"Error scraping team stats: {e}")
        try:
            self.scrape_player_stats()
        except Exception as e:
            print(f"Error scraping player stats: {e}")
        try:
            self.scrape_coach_data()
        except Exception as e:
            print(f"Error scraping coach data: {e}")
        print(f"Data scraping complete! Files saved in '{self.output_dir}' directory")

if __name__ == "__main__":
    scraper = BasketballReferenceScraper(2025)
    scraper.scrape_all_data()
    # You can also scrape individual data types:
    # scraper.scrape_team_stats()
    # scraper.scrape_player_stats()
    # scraper.scrape_coach_data()
    
    # Scrape multiple seasons
    # for year in range(2020, 2026):
    #     scraper = BasketballReferenceScraper(year)
    #     scraper.scrape_all_data()