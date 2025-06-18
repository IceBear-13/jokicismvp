package com.nba.jokicismvp.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.nba.jokicismvp.models.Player;

@Repository
public interface PlayerRepository extends JpaRepository<Player, String> {
    void deleteByName(String playerName);

    Optional<Player> findByName(String name);

    
    // ...existing code...
    
    @Query("SELECT DISTINCT p FROM Player p")
    List<Player> findAllDistinct();
}
