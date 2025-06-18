package com.nba.jokicismvp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.nba.jokicismvp.models.HeadCoach;
import com.nba.jokicismvp.repository.HeadCoachRepository;

@Component
public class HeadCoachService {
    private final HeadCoachRepository headCoachRepository;

    @Autowired
    public HeadCoachService(HeadCoachRepository headCoachRepository) {
        this.headCoachRepository = headCoachRepository;
    }

    public List<HeadCoach> getAllHeadCoaches() {
        return headCoachRepository.findAll();
    }

    public HeadCoach getHeadCoachByName(String name) {
        return headCoachRepository.findAll()
                .stream()
                .filter(headCoach -> headCoach.getName().equalsIgnoreCase(name))
                .findFirst()
                .orElse(null);
    }

    public HeadCoach getHeadCoachById(String id) {
        return headCoachRepository.findById(id).orElse(null);
    }

    public HeadCoach getHeadCoachByTeam(String teamName) {
        return headCoachRepository.findAll()
                .stream()
                .filter(headCoach -> headCoach.getTeamCoached().getName().equalsIgnoreCase(teamName))
                .findFirst()
                .orElse(null);
    }

    public HeadCoach getHeadCoachByTeamId(String teamId) {
        return headCoachRepository.findAll()
                .stream()
                .filter(headCoach -> headCoach.getTeamCoached().getName().equalsIgnoreCase(teamId))
                .findFirst()
                .orElse(null);
    }
    
}
