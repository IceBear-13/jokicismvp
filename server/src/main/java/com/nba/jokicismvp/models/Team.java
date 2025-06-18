package com.nba.jokicismvp.models;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "teams")
public class Team {
    @Id
    private String id;
    private String name;
    private String city;
    private String conference;

    @OneToOne(fetch=FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "head_coach_id", referencedColumnName = "id")
    @JsonIgnoreProperties({"teamCoached", "hibernateLazyInitializer", "handler"}) // Prevents infinite recursion
    private HeadCoach headCoach;
    private Integer gamesWon;
    private Integer gamesLost;
    
    @OneToMany(mappedBy = "team", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Player> players;

    // Constructors for the Team class
    public Team() {
    }

    // Constructor with all fields
    public Team(String id, String city, String name, String conference, String division, HeadCoach headCoach, Integer gamesWon, Integer gamesLost) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.conference = conference;
        this.headCoach = headCoach;
        this.gamesWon = gamesWon;
        this.gamesLost = gamesLost;
        this.players = new ArrayList<>(); 
    }

    // Getters and Setters for the Team class
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getConference() {
        return conference;
    }

    public void setConference(String conference) {
        this.conference = conference;
    }



    public HeadCoach getHeadCoach() {
        return headCoach;
    }

    public void setHeadCoach(HeadCoach headCoach) {
        this.headCoach = headCoach;
    }

    public List<Player> getPlayers() {
        return players;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }

    public void removePlayer(Player player) {
        if (this.players != null) {
            this.players.remove(player);
            player.setTeam(null); // Ensure the player's team reference is cleared
        }
    }

    public void addPlayer(Player player) {
        if (this.players == null) {
            this.players = new ArrayList<>();
        }
        this.players.add(player);
        player.setTeam(this); // Ensure the player's team reference is set
    }

    public Integer getGamesWon() {
        return gamesWon;
    }

    public void setGamesWon(Integer gamesWon) {
        this.gamesWon = gamesWon;
    }

    public Integer getGamesLost() {
        return gamesLost;
    }

    public void setGamesLost(Integer gamesLost) {
        this.gamesLost = gamesLost;
    }

    @Override
    public String toString() {
        return "Team{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", city='" + city + '\'' +
                ", conference='" + conference + '\'' +
                ", headCoach=" + headCoach +
                ", players=" + players +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Team)) return false;

        Team team = (Team) o;

        if (!id.equals(team.id)) return false;
        if (!name.equals(team.name)) return false;
        if (!city.equals(team.city)) return false;
        if (!conference.equals(team.conference)) return false;
        return headCoach != null ? headCoach.equals(team.headCoach) : team.headCoach == null;
    }
}
