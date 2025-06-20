import type { Team } from "./Teams";

export interface HeadCoach {
    id: string;
    name: string;
    teamCoached: Team;
}