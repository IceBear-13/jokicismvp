package com.nba.jokicismvp.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "head_coaches")
public class HeadCoach {
    @Id
    private String id;
    private String name;
    
    @OneToOne(mappedBy = "headCoach")
    private Team teamCoached;
    
    // Constructors
    public HeadCoach() {
    }
    
    public HeadCoach(String id, String name) {
        this.id = id;
        this.name = name;
    }
    
    // Getters and Setters
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

    public Team getTeamCoached() {
        return teamCoached;
    }

    public void setTeamCoached(Team teamCoached) {
        this.teamCoached = teamCoached;
    }
    
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof HeadCoach)) return false;

        HeadCoach headCoach = (HeadCoach) o;

        return id != null ? id.equals(headCoach.id) : headCoach.id == null;
    }
    
    @Override
    public String toString() {
        return "HeadCoach{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                '}';
    }
}