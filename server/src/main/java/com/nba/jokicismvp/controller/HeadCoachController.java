package com.nba.jokicismvp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.nba.jokicismvp.models.HeadCoach;
import com.nba.jokicismvp.services.HeadCoachService;


@RestController
@RequestMapping("/api/head-coaches")
public class HeadCoachController {
    private final HeadCoachService headCoachService;

    @Autowired
    public HeadCoachController(HeadCoachService headCoachService) {
        this.headCoachService = headCoachService;
    }

    /**
     * Get all head coaches that exist in the database
     * Example: /api/head-coaches/all
     * 
     * @return List of HeadCoach objects
     */
    @GetMapping("/all")
    public List<HeadCoach> getAllCoaches(@RequestParam(required = false) String param) {
        return headCoachService.getAllHeadCoaches();
    }

    /**
     * Get a head coach by their name
     * Example: /api/head-coaches/name?name=Steve_Nash
     * 
     * @param name Name of the head coach
     * @return HeadCoach object if found, null otherwise
     */
    @GetMapping("/name")
    public HeadCoach getHeadCoachByName(@RequestParam(required = true) String name) {
        if (name == null || name.isEmpty()) {
            return null; // exceptions to be added
        }

        HeadCoach headCoach = headCoachService.getHeadCoachByName(name);
        if (headCoach == null) {
            return null; // exceptions to be added
        }

        return headCoach;
    }

    /**
     * Get a head coach by their ID
     * Example: /api/head-coaches/id?id=12345
     * 
     * @param id ID of the head coach
     * @return HeadCoach object if found, null otherwise
     */
    @GetMapping("/id")
    public HeadCoach getHeadCoachById(@RequestParam(required = true) String id) {
        if (id == null || id.isEmpty()) {
            return null; // exceptions to be added
        }

        HeadCoach headCoach = headCoachService.getHeadCoachById(id);
        if (headCoach == null) {
            return null; // exceptions to be added
        }

        return headCoach;
    }

    /**
     * Get a head coach by their team ID
     * Example: /api/head-coaches/team/name?teamName=LAL
     * 
     * @param teamName ID of the team
     * @return HeadCoach object if found, null otherwise
     */
    @GetMapping("/team/name")
    public HeadCoach getHeadCoachByteamName(@RequestParam(required = true) String teamName) {
        if (teamName == null || teamName.isEmpty()) {
            return null; // exceptions to be added
        }

        HeadCoach headCoach = headCoachService.getHeadCoachByTeam(teamName);
        if (headCoach == null) {
            return null; // exceptions to be added
        }

        return headCoach;
    }

    /**
     * Get a head coach by their team ID
     * Example: /api/head-coaches/team/id?teamId=LAL
     * 
     * @param teamId ID of the team
     * @return HeadCoach object if found, null otherwise
     */
    @GetMapping("/team/id")
    public HeadCoach getHeadCoachByTeamId(@RequestParam(required = true) String teamId) {
        if (teamId == null || teamId.isEmpty()) {
            return null; // exceptions to be added
        }

        HeadCoach headCoach = headCoachService.getHeadCoachByTeamId(teamId);
        if (headCoach == null) {
            return null; // exceptions to be added
        }

        return headCoach;
    }
    

}
