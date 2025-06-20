package com.nba.jokicismvp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nba.jokicismvp.models.Team;
import com.nba.jokicismvp.services.TeamService;



@RestController
@RequestMapping("/api/teams")
public class TeamController {
    private final TeamService teamService;

    @Autowired
    public TeamController(TeamService teamService) {
        this.teamService = teamService;
    }

    /**
     *  Get all teams that exists in the database
     * Example: /api/teams/all
     * 
     * @param param not used at all
     * @return List of Team objects
     */
    @CrossOrigin(origins="http://localhost:5173")
    @GetMapping("/all")
    public List<Team> getAllTeams() {
        return teamService.getAllTeams();
    }

    /**
     * Get a team by its name
     * Example: /api/teams/name?name=Los_Angeles_Lakers
     * 
     * @param name Name of the team
     * @return Team object if found, null otherwise
     */
    @GetMapping("/name")
    public Team getTeamByName(@RequestParam(required=true) String name) {
        if (name == null || name.isEmpty()) {
            return null; // exceptions to be added
        }

        Team team = teamService.getTeamByName(name);
        if (team == null) {
            return null; // exceptions to be added
        }

        return team;
    }

    /**
     * Get a team by its Abbreviation
     * Example: /api/teams/id?id=LAL
     * 
     * @param id ID of the team
     * @return Team object if found, null otherwise
     */
    @GetMapping("/id")
    public Team getTeamById(@RequestParam String id) {
        if (id == null || id.isEmpty()) {
            return null; // exceptions to be added
        }

        Team team = teamService.getTeamById(id);
        if (team == null) {
            return null; // exceptions to be added
        }

        return team;
    }

    /**
     * Get all teams that belong to a specific city
     * Example: /api/teams/city?city=Los+Angeles
     * 
     * @param city City of the team
     * @return List of Team objects belonging to the specified city
     */
    @GetMapping("/city")
    public List<Team> getTeamsByCity(@RequestParam(required=true) String city) {
        if (city == null || city.isEmpty()) {
            return null; // exceptions to be added
        }

        return teamService.getTeamsByCity(city);
    }

    /**
     * Get all teams that belong to a specific conference
     * Example: /api/teams/conference?conference=Western
     * 
     * @param conference Conference of the team
     * @return List of Team objects belonging to the specified conference
     */
    @GetMapping("/conference")
    public List<Team> getTeamsByConference(@RequestParam(required=true) String conference) {
        if (conference == null || conference.isEmpty()) {
            return null; // exceptions to be added
        }

        return teamService.getTeamsByConference(conference);
    }

    /**
     * Get a team by its head coach's name
     * Example: /api/teams/headCoach?headCoachName=Frank_Vogel
     * 
     * @param headCoachName Name of the head coach
     * @return Team object if found, null otherwise
     */
    @GetMapping("/headCoach")
    public Team getTeamByHeadCoachName(@RequestParam(required=true) String headCoachName) {
        if (headCoachName == null || headCoachName.isEmpty()) {
            return null; // exceptions to be added
        }

        Team team = teamService.getTeanByHeadCoachName(headCoachName);
        if (team == null) {
            return null; // exceptions to be added
        }

        return team;
    }

    /**
     * Get a team by a player's full name
     * Example: /api/teams/player/name?name=LeBron+James
     * 
     * @param name Full name of the player
     * @return Team object if found, null otherwise
     */
    @GetMapping("/player/name")
    public Team getTeamByPlayerName(@RequestParam(required=true) String name) {
        if (name == null || name.isEmpty()) {
            return null; // exceptions to be added
        }

        Team team = teamService.getTeamByPlayerName(name);
        if (team == null) {
            return null; // exceptions to be added
        }

        return team;
    }

    /**
     * Get a team by their losses
     * Example: /api/teams/losses?losses=10
     * 
     * @param losses Number of losses
     * @return List of Team objects with losses greater than or equal to the specified number
     */
    @GetMapping("/losses")
    public List<Team> getTeamsByLosses(@RequestParam(required=true) int losses) {
        if (losses < 0) {
            return null; // exceptions to be added
        }

        return teamService.getTeamsByLosses(losses);
    }

    /**
     * Get a team by their wins
     * Example: /api/teams/wins?wins=10
     * 
     * @param wins Number of wins
     * @return List of Team objects with wins greater than or equal to the specified number
     */
    @GetMapping("/wins")
    public List<Team> getTeamsByWins(@RequestParam(required=true) int wins) {
        if (wins < 0) {
            return null; // exceptions to be added
        }

        return teamService.getTeamsByWins(wins);
    }

    
    
}
