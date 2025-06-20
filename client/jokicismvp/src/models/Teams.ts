import type { Player } from "./Players";

export interface Team{
    id: string;
    name: string;
    city: string;
    conference: string;
    players: Player[];
    gamesWon: number;
    gamesLost: number;
}