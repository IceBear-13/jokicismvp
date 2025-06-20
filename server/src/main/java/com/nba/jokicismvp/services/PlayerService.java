package com.nba.jokicismvp.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.nba.jokicismvp.models.Player;
import com.nba.jokicismvp.repository.PlayerRepository;

@Component
public class PlayerService {
    private final PlayerRepository playerRepository;

    @Autowired
    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }
    
    public List<Player> getAllPlayers() {
        return playerRepository.findAllDistinct();
    }

    public Player getPlayerByName(String fName, String lName) {
        return playerRepository.findAll()
                .stream()
                .filter(player -> player.getName().equalsIgnoreCase(fName + " " + lName))
                .findFirst()
                .orElse(null);
    }

    public Player getPlayerById(String id) {
        return playerRepository.findById(id).orElse(null);
    }

    public List<Player> getPlayerByFName(String fName) {
        return playerRepository.findAll()
                .stream()
                .filter(player -> player.getFname().equalsIgnoreCase(fName))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayerByLName(String lName) {
        return playerRepository.findAll()
                .stream()
                .filter(player -> player.getLname().equalsIgnoreCase(lName))
                .collect(Collectors.toList());
    }


    public List<Player> getPlayersByTeamName(String teamName) {
        return playerRepository.findAll().stream()
                .filter(player -> player.getTeam().getName().equalsIgnoreCase(teamName))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByPosition(String position) {
        return playerRepository.findAll().stream()
                .filter(player -> player.getPosition().equalsIgnoreCase(position))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByTeamId(String teamId) {
        return playerRepository.findAll().stream()
                .filter(player -> player.getTeam().getId().equals(teamId))
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByPoints(int points) {
        return playerRepository.findAll().stream()
                .filter(player -> player.getPoints() >= points)
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByAssists(int assists) {
        return playerRepository.findAll().stream()
                .filter(player -> player.getAssists() >= assists)
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByRebounds(int rebounds) {
        return playerRepository.findAll().stream()
                .filter(player -> player.getRebounds() >= rebounds)
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersBySteals(int steals) {
        return playerRepository.findAll().stream()
                .filter(player -> player.getSteals() >= steals)
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByBlocks(int blocks) {
        return playerRepository.findAll().stream()
                .filter(player -> player.getBlocks() >= blocks)
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByTurnoversLessThanEqual(int turnovers) {
        return playerRepository.findAll().stream()
                .filter(player -> player.getTurnovers() <= turnovers)
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByGamesPlayed(int gamesPlayed) {
        return playerRepository.findAll().stream()
                .filter(player -> player.getGamesPlayed() >= gamesPlayed)
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByEfficiency(int efficiency) {
        return playerRepository.findAll().stream()
                .filter(player -> player.getEfficiency() >= efficiency)
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByFieldGoalsMade(int fieldGoalsMade) {
        return playerRepository.findAll().stream()
                .filter(player -> player.getFieldGoalsMade() >= fieldGoalsMade)
                .collect(Collectors.toList());
    }

    public List<Player> getPlayersByFGPercentage(double percentage) {
        return playerRepository.findAll().stream()
                .filter(player -> player.getFieldGoalsPercentage() >= percentage)
                .collect(Collectors.toList());
    }

    public Player savePlayer(Player player) {
        return playerRepository.save(player);
    }

    public void deletePlayer(String id) {
        playerRepository.deleteById(id);
    }

    public Player updatePlayer(String id, Player updatedPlayer) {
        Player existingPlayer = playerRepository.findById(id).orElse(null);
        if (existingPlayer != null) {
            existingPlayer.setFname(updatedPlayer.getFname());
            existingPlayer.setLname(updatedPlayer.getLname());
            existingPlayer.setPosition(updatedPlayer.getPosition());
            existingPlayer.setTeam(updatedPlayer.getTeam());
            existingPlayer.setPoints(updatedPlayer.getPoints());
            existingPlayer.setAssists(updatedPlayer.getAssists());
            existingPlayer.setRebounds(updatedPlayer.getRebounds());
            existingPlayer.setSteals(updatedPlayer.getSteals());
            existingPlayer.setBlocks(updatedPlayer.getBlocks());
            existingPlayer.setTurnovers(updatedPlayer.getTurnovers());
            existingPlayer.setGamesPlayed(updatedPlayer.getGamesPlayed());
            existingPlayer.setEfficiency(updatedPlayer.getEfficiency());
            existingPlayer.setFieldGoalsMade(updatedPlayer.getFieldGoalsMade());
            existingPlayer.setFieldGoalsPercentage(updatedPlayer.getFieldGoalsPercentage());
            return playerRepository.save(existingPlayer);
        }
        return null;
    }
    
}
