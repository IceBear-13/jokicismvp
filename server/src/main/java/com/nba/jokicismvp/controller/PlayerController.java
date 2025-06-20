package com.nba.jokicismvp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nba.jokicismvp.models.Player;
import com.nba.jokicismvp.services.PlayerService;


@RestController
@RequestMapping("/api/players")
public class PlayerController {
    private final PlayerService playerService;

    @Autowired
    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    /**
     * Get all players that exists in the database
     * Example: /api/players/all
     * 
     * @param param not used at all
     * @return List of Player objects
     */
    @GetMapping("/all")
    public List<Player> getAllPlayers(@RequestParam(required=false) String param) {
        return playerService.getAllPlayers();
    }

    /**
     * Get a player by their full name
     * Example: /api/players/name?fName=LeBron&lName=James
     * 
     * @param fName First name of the player
     * @param lName Last name of the player
     * @return Player object if found, null otherwise
     */
    @GetMapping("/name")
    public Player getPlayerByFullName(
        @RequestParam(required=true) String fName, 
        @RequestParam(required=true) String lName) {

        if (fName == null || lName == null || fName.isEmpty() || lName.isEmpty()) {
            return null; // exceptions to be added
        }

        Player player = playerService.getPlayerByName(fName, lName);
        if (player == null) {
            return null; // exceptions to be added
        }

        return player;
    }

    /**
     *  Get a player by their first name
     *  Example: /api/players/fName?fname=LeBron
     * 
     * @param fname
     * @return
     */
    @GetMapping("/fName")
    public List<Player> getByFname(@RequestParam String fname) {
        return playerService.getPlayerByFName(fname);
    }

    /**
     *  Get a player by their last name
     *  Example: /api/players/lName?lname=James
     * 
     * @param lname
     * @return
     */
    @GetMapping("/lName")
    public List<Player> getByLname(@RequestParam String lname) {
        return  playerService.getPlayerByLName(lname);
    }

    /**
     * Get all players that belong to a specific team
     * Example: /api/players/team?teamName=Lakers
     * 
     * @param teamName Name of the team
     * @return List of Player objects belonging to the specified team
     */
    @GetMapping("/team_name")
    public List<Player> getPlayersByTeamName(@RequestParam String teamName) {

        if (teamName == null || teamName.isEmpty()) {
            return null; // exceptions to be added
        }

        return playerService.getPlayersByTeamName(teamName);
    }

    /**
     * Get all players that belong to a specific team
     * Example: /api/players/team?teamId=LAL
     * 
     * @param teamId Abbreviation of the team
     * @return List of Player objects belonging to the specified team
     */
    @GetMapping("/team_id")
    public List<Player> getPlayersByTeamId(@RequestParam String teamId) {

        if (teamId == null || teamId.isEmpty()) {
            return null; // exceptions to be added
        }

        return playerService.getPlayersByTeamId(teamId);
    }

    /**
     * Get all players that play a specific position
     * Example: /api/players/position?position=PG
     * 
     * @param position Position of the player
     * @return List of Player objects playing the specified position
     */
    @GetMapping("/position")
    public List<Player> getPlayersByPosition(@RequestParam String position) {

        if (position == null || position.isEmpty()) {
            return null; // exceptions to be added
        }

        return playerService.getPlayersByPosition(position);
    }
    
    /**
     * Get all players that have a certain number of points
     * Example: /api/players/points?points=20
     * 
     * @param points Minimum number of points
     * @return List of Player objects with points greater than or equal to the specified value
     */
    @GetMapping("/points")
    public List<Player> getPlayersByPoints(@RequestParam int points) {

        if (points < 0) {
            return null; // exceptions to be added
        }

        return playerService.getPlayersByPoints(points);
    }

    /**
     * Get all players that have a certain number of assists
     * Example: /api/players/assists?assists=5
     * 
     * @param assists Minimum number of assists
     * @return List of Player objects with assists greater than or equal to the specified value
     */
    @GetMapping("/assists")
    public List<Player> getPlayersByAssists(@RequestParam int assists) {

        if (assists < 0) {
            return null; // exceptions to be added
        }

        return playerService.getPlayersByAssists(assists);
    }

    /**
     * Get all players that have a certain number of rebounds
     * Example: /api/players/rebounds?rebounds=10
     * 
     * @param rebounds Minimum number of rebounds
     * @return List of Player objects with rebounds greater than or equal to the specified value
     */
    @GetMapping("/rebounds")
    public List<Player> getPlayersByRebounds(@RequestParam int rebounds) {

        if (rebounds < 0) {
            return null; // exceptions to be added
        }

        return playerService.getPlayersByRebounds(rebounds);
    }

    /**
     * Get all players that have a certain number of steals
     * Example: /api/players/steals?steals=2
     * 
     * @param steals Minimum number of steals
     * @return List of Player objects with steals greater than or equal to the specified value
     */
    @GetMapping("/steals")
    public List<Player> getPlayersBySteals(@RequestParam int steals) {

        if (steals < 0) {
            return null; // exceptions to be added
        }

        return playerService.getPlayersBySteals(steals);
    }

    /**
     * Get all players that have a certain number of blocks
     * Example: /api/players/blocks?blocks=3
     * 
     * @param blocks Minimum number of blocks
     * @return List of Player objects with blocks greater than or equal to the specified value
     */
    @GetMapping("/blocks")
    public List<Player> getPlayersByBlocks(@RequestParam int blocks) {

        if (blocks < 0) {
            return null; // exceptions to be added
        }

        return playerService.getPlayersByBlocks(blocks);
    }

    /**
     * Get all players that have a certain number of turnovers
     * Example: /api/players/turnovers?turnovers=3
     * 
     * @param turnovers Maximum number of turnovers
     * @return List of Player objects with turnovers less than or equal to the specified value
     */
    @GetMapping("/turnovers")
    public List<Player> getPlayersByTurnovers(@RequestParam int turnovers) {

        if (turnovers < 0) {
            return null; // exceptions to be added
        }

        return playerService.getPlayersByTurnoversLessThanEqual(turnovers);
    }

    /**
     * Get all players that have played a certain number of games
     * Example: /api/players/gamesPlayed?gamesPlayed=10
     * 
     * @param gamesPlayed Minimum number of games played
     * @return List of Player objects with games played greater than or equal to the specified value
     */
    @GetMapping("/gamesPlayed")
    public List<Player> getPlayersByGamesPlayed(@RequestParam int gamesPlayed) {

        if (gamesPlayed < 0) {
            return null; // exceptions to be added
        }

        return playerService.getPlayersByGamesPlayed(gamesPlayed);
    }

    /**
     * Get all players that have a certain efficiency rating
     * Example: /api/players/efficiency?efficiency=15
     * 
     * @param efficiency Minimum efficiency rating
     * @return List of Player objects with efficiency greater than or equal to the specified value
     */
    @GetMapping("/efficiency")
    public List<Player> getPlayersByEfficiency(@RequestParam int efficiency) {

        if (efficiency < 0) {
            return null; // exceptions to be added
        }

        return playerService.getPlayersByEfficiency(efficiency);
    }

    /**
     * Get all players that have made a certain number of field goals
     * Example: /api/players/fieldGoalsMade?fieldGoalsMade=5
     * 
     * @param fieldGoalsMade Minimum number of field goals made
     * @return List of Player objects with field goals made greater than or equal to the specified value
     */
    @GetMapping("/fieldGoalsMade")
    public List<Player> getPlayersByFieldGoalsMade(@RequestParam int fieldGoalsMade) {

        if (fieldGoalsMade < 0) {
            return null; // exceptions to be added
        }

        return playerService.getPlayersByFieldGoalsMade(fieldGoalsMade);
    }

    /**
     * Get all players that have a certain field goal percentage
     * Example: /api/players/fieldGoalsPercentage?percentage=0.45
     * 
     * @param percentage Minimum field goal percentage
     * @return List of Player objects with field goals percentage greater than or equal to the specified value
     */
    @GetMapping("/fieldGoalsPercentage")
    public List<Player> getPlayersByFGPercentage(@RequestParam double percentage) {

        if (percentage < 0 || percentage > 1) {
            return null; // exceptions to be added
        }

        return playerService.getPlayersByFGPercentage(percentage);
    }
    
}
