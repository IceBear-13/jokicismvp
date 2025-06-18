package com.nba.jokicismvp.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;


@Entity
@Table(name = "players")
public class Player {
    @Id
    @GeneratedValue(generator = "uuid")
    private String id;
    private String fname, lname;
    private String name;

    @ManyToOne(fetch= jakarta.persistence.FetchType.LAZY)
    @JoinColumn(name = "team_id", nullable = false)
    @JsonIgnoreProperties({"players", "hibernateLazyInitializer", "handler"}) // Add this annotation
    private Team team;

    private String position;
    private float points;
    private float assists;
    private float rebounds;
    private float steals;
    private float blocks;
    private float turnovers;
    private float gamesPlayed;
    private float efficiency;
    private float fieldGoalsMade;
    private float fieldGoalsAttempted;
    private float fieldGoalsPercentage;
    /* 
     * Constructors for the Players class
     */
    public Player() {
    }

    public Player(String fname, String lname, Team team, String position, float points, float assists, float rebounds, float steals, float blocks, float turnovers, float gamesPlayed, float efficiency, float fieldGoalsMade, float fieldGoalsAttempted) {
        this.name = fname + " " + lname;
        this.fname = fname;
        this.lname = lname;
        this.team = team;
        this.position = position;
        this.points = points;
        this.assists = assists;
        this.rebounds = rebounds;
        this.steals = steals;
        this.blocks = blocks;
        this.turnovers = turnovers;
        this.gamesPlayed = gamesPlayed;
        this.efficiency = efficiency;
        this.fieldGoalsMade = fieldGoalsMade;
        this.fieldGoalsAttempted = fieldGoalsAttempted;
        if (fieldGoalsAttempted > 0) {
            this.fieldGoalsPercentage = fieldGoalsMade / fieldGoalsAttempted * 100;
        } else {
            this.fieldGoalsAttempted = 0.0f;
        }
    }

    /*
     * Getters and Setters for the Players class
     */

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

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public float getPoints() {
        return points;
    }

    public void setPoints(float points) {
        this.points = points;
    }

    public float getAssists() {
        return assists;
    }

    public void setAssists(float assists) {
        this.assists = assists;
    } 

    public float getRebounds() {
        return rebounds;
    }

    public void setRebounds(float rebounds) {
        this.rebounds = rebounds;
    }

    public float getSteals() {
        return steals;
    }

    public void setSteals(float steals) {
        this.steals = steals;
    }

    public float getBlocks() {
        return blocks;
    }

    public void setBlocks(float blocks) {
        this.blocks = blocks;
    }

    public float getTurnovers() {
        return turnovers;
    }

    public void setTurnovers(float turnovers) {
        this.turnovers = turnovers;
    }

    public float getGamesPlayed() {
        return gamesPlayed;
    }

    public void setGamesPlayed(float gamesPlayed) {
        this.gamesPlayed = gamesPlayed;
    }

    public float getEfficiency() {
        return efficiency;
    }

    public void setEfficiency(float efficiency) {
        this.efficiency = efficiency;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public float getFieldGoalsMade() {
        return fieldGoalsMade;
    }

    public void setFieldGoalsMade(float fieldGoalsMade) {
        this.fieldGoalsMade = fieldGoalsMade;
    }

    public float getFieldGoalsAttempted() {
        return fieldGoalsAttempted;
    }

    public void setFieldGoalsAttempted(float fieldGoalsAttempted) {
        this.fieldGoalsAttempted = fieldGoalsAttempted;
    }

    public float getFieldGoalsPercentage() {
        return fieldGoalsPercentage;
    }

    public void setFieldGoalsPercentage(float fieldGoalsPercentage) {
        this.fieldGoalsPercentage = fieldGoalsPercentage;
    }

    @Override
    public String toString() {
        return "Players{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", team=" + team +
                ", position='" + position + '\'' +
                ", points=" + points +
                ", assists=" + assists +
                ", rebounds=" + rebounds +
                ", steals=" + steals +
                ", blocks=" + blocks +
                ", turnovers=" + turnovers +
                ", gamesPlayed=" + gamesPlayed +
                ", efficiency=" + efficiency +
                ", fieldGoalsMade=" + fieldGoalsMade +
                ", fieldGoalsAttempted=" + fieldGoalsAttempted +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Player)) return false;

        Player players = (Player) o;

        return id != null ? id.equals(players.id) : players.id == null;
    }

}
