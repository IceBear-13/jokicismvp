package com.nba.jokicismvp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nba.jokicismvp.models.Team;

@Repository
public interface TeamRepository extends JpaRepository<Team, String>{

    // // Find a team by its name
    // public Team findByName(String name);

    // // Find a team by its id
    // public Team findTeamById(String id);

    // // Find a team by its city
    // public Team findByCity(String city);

    // // Find a team by its conference
    // public Team findByConference(String conference);

    // // Find a team by its head coach's name
    // public Team findByHeadCoachName(String headCoachName);

    // // Find a team by player
    // public Team findByPlayersName(String name);
}
