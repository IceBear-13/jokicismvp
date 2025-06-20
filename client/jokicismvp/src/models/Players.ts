import type { Team } from "./Teams";

export interface Player {
    id: string;
    firstName: string;
    lastName: string;
    name: string;
    team: Team;
    position: string;
    points: number;
    assists: number;
    rebounds: number;
    steals: number;
    blocks: number;
    turnovers: number;
    fieldGoalsMade: number;
    fieldGoalsAttempted: number;
    fieldGoalPercentage: number;
    gamesPlayed: number;
}