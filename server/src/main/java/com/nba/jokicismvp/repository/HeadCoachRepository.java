package com.nba.jokicismvp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nba.jokicismvp.models.HeadCoach;

@Repository
public interface HeadCoachRepository extends JpaRepository<HeadCoach, String> {
    void deleteByName(String name);

    Optional<HeadCoach> findByName(String name);
}
