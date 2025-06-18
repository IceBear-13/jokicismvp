import requests
import pandas as pd
from bs4 import BeautifulSoup

BASE_URL = "https://www.basketball-reference.com/leagues/NBA_"

class perSeasonData:
    def __init__(self, season=2025, delay=10):
        self.season = season
        self.delay = delay
        self.base_url = BASE_URL + str(season)

    def get_player_stats(self):
        """
        Fetch player stats for the given season.
        """
        url = f"{self.base_url}_per_game.html"
        response = requests.get(url)

        if response.status_code != 200:
            raise Exception(f"Failed to fetch data from {url}")
        
        soup = BeautifulSoup(response.content, 'html.parser')
        table = soup.find('table', {'id': 'per_game_stats'})
        if not table:
            raise Exception("No data found for the specified season.")
        df = pd.read_html(str(table))[0]
        df.columns = df.reset_index(level=0, drop=True)
        df['Season'] = self.season

        df.to_csv(f"per_game_stats_{self.season}.csv", index=False)

        return df
    
    def get_advanced_stats(self):
        """
        Fetch advanced player stats for the given season.
        """
        url = f"{self.base_url}_advanced.html"
        response = requests.get(url)

        if response.status_code != 200:
            raise Exception(f"Failed to fetch data from {url}")
        
        soup = BeautifulSoup(response.content, 'html.parser')
        table = soup.find('table', {'id': 'advanced_stats'})
        if not table:
            raise Exception("No data found for the specified season.")
        df = pd.read_html(str(table))[0]
        df.columns = df.reset_index(level=0, drop=True)
        df['Season'] = self.season

        df.to_csv(f"advanced_stats_{self.season}.csv", index=False)

        return df
    
    def get_team_stats(self):
        """
        Fetch team stats for the given season.
        """
        url = f"{self.base_url}_team.html"
        response = requests.get(url)

        if response.status_code != 200:
            raise Exception(f"Failed to fetch data from {url}")
        
        soup = BeautifulSoup(response.content, 'html.parser')
        table = soup.find('table', {'id': 'team_stats'})
        if not table:
            raise Exception("No data found for the specified season.")
        df = pd.read_html(str(table))[0]
        df.columns = df.reset_index(level=0, drop=True)
        df['Season'] = self.season

        df.to_csv(f"team_stats_{self.season}.csv", index=False)

        return df
    

def main():
    season = [2025, 2024, 2023]
    for year in season:
        print(f"Fetching data for season {year}...")
        data = perSeasonData(season=year)
        player_stats = data.get_player_stats()
        advanced_stats = data.get_advanced_stats()
        team_stats = data.get_team_stats()
        print(f"Data for season {year} fetched successfully.")
        print(f"Player stats: {player_stats.shape[0]} records")
        print(f"Advanced stats: {advanced_stats.shape[0]} records")
        print(f"Team stats: {team_stats.shape[0]} records")
if __name__ == "__main__":
    main()



