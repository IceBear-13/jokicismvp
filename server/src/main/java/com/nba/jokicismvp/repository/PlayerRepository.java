package com.nba.jokicismvp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.nba.jokicismvp.models.Player;

@Repository
public interface PlayerRepository extends JpaRepository<Player, String> {
    void deleteByName(String playerName);

    // Optional<Player> findByName(String name);s
    
    // @Query("SELECT p FROM Player p WHERE p.fName = ?1")
    // List<Player> findByfName(String fName);

    // @Query("SELECT p FROM Player p WHERE p.lName = ?1")
    // List<Player> findBylName(String lName);
    
    @Query("SELECT DISTINCT p FROM Player p")
    List<Player> findAllDistinct();
}
