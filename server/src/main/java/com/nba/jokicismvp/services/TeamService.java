package com.nba.jokicismvp.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.nba.jokicismvp.models.Team;
import com.nba.jokicismvp.repository.TeamRepository;

@Component
public class TeamService {
    private final TeamRepository teamRepository;

    @Autowired
    public TeamService(TeamRepository teamRepository) {
        this.teamRepository = teamRepository;
    }

    public List<Team> getAllTeams() {
        return teamRepository.findAll();
    }

    public Team getTeamByName(String name) {
        return teamRepository.findAll()
                .stream()
                .filter(team -> team.getName().equalsIgnoreCase(name))
                .findFirst()
                .orElse(null);
    }

    public Team getTeamById(String id) {
        return teamRepository.findById(id).orElse(null);
    }

    public List<Team> getTeamsByCity(String city) {
        return teamRepository.findAll()
                .stream()
                .filter(team -> team.getCity().equalsIgnoreCase(city))
                .collect(Collectors.toList());
    }

    public List<Team> getTeamsByConference(String conference) {
        return teamRepository.findAll()
                .stream()
                .filter(team -> team.getConference().equalsIgnoreCase(conference))
                .collect(Collectors.toList());
    }

    public Team getTeanByHeadCoachName(String headCoachName) {
        return teamRepository.findAll()
                .stream()
                .filter(team -> team.getHeadCoach().getName().equalsIgnoreCase(headCoachName))
                .findFirst()
                .orElse(null);
    }

    // public List<Team> getTeamsByPlayerFName(String fName) {
    //     return teamRepository.findAll()
    //             .stream()
    //             .filter(team -> team.getPlayers().stream().anyMatch(player -> player.getFname().equalsIgnoreCase(fName)))
    //             .collect(Collectors.toList());
    // }

    // public List<Team> getTeamsByPlayerLName(String lName) {
    //     return teamRepository.findAll()
    //             .stream()
    //             .filter(team -> team.getPlayers().stream().anyMatch(player -> player.getLname().equalsIgnoreCase(lName)))
    //             .collect(Collectors.toList());
    // }

    public Team getTeamByPlayerName(String name) {
        return teamRepository.findAll()
                .stream()
                .filter(team -> team.getPlayers().stream().anyMatch(player -> player.getName().equalsIgnoreCase(name)))
                .findFirst()
                .orElse(null);
    }

    public Team saveTeam(Team team) {
        return teamRepository.save(team);
    }

    public void deleteTeamById(String id) {
        teamRepository.deleteById(id);
    }

    public void deleteTeam(Team team) {
        teamRepository.delete(team);
    }

    public void updateTeam(Team team) {
        Team existingTeam = teamRepository.findById(team.getId()).orElse(null);
        if (existingTeam != null) {
            existingTeam.setName(team.getName());
            existingTeam.setCity(team.getCity());
            existingTeam.setConference(team.getConference());
            existingTeam.setHeadCoach(team.getHeadCoach());
            existingTeam.setPlayers(team.getPlayers());
            teamRepository.save(existingTeam);
        }
    }
    


}
