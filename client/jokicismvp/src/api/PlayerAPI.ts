import axios from 'axios';
import type { Player } from '../models/Players';

const API_BASE_URL = 'http://localhost:8080/api'

export interface IPlayerAPI {
    getPlayers(): Promise<Player[]>;
    getPlayerByName(fName: string, lName: string): Promise<Player>;
    getPlayerByPoints(points: number): Promise<Player[]>;
    getPlayerByAssists(assists: number): Promise<Player[]>;
    getPlayerByRebounds(rebounds: number): Promise<Player[]>;
    getPlayerByEfficiency(efficiency: number): Promise<Player[]>;
    getPlayerBySteals(steals: number): Promise<Player[]>;
    getPlayerByBlocks(blocks: number): Promise<Player[]>;
    getPlayerByTeam(team: string): Promise<Player[]>;
    getPlayerByFGMade(fgMade: number): Promise<Player[]>;
    getPlayerByPosition(position: string): Promise<Player[]>;
}

export class PlayerAPI implements IPlayerAPI {
    async getPlayers(): Promise<Player[]> {
        try {
            const response = await axios.get<Player[]>(`${API_BASE_URL}/players/all`);
            return response.data as Player[];
        } catch (error) {
            console.error('Error fetching players:', error);
            throw error;
        }
    }

    async getPlayerByName(fName: string, lName: string): Promise<Player> {
        try {
            const response = await axios.get<Player>(`${API_BASE_URL}/players/name/fName=${fName}&lName=${lName}`);
            return response.data as Player;
        } catch (error) {
            console.error(`Error fetching player with ID ${fName + " " + lName}:`, error);
            throw error;
        }
    }

    async getPlayerByPoints(points: number): Promise<Player[]> {
        try {
            const response = await axios.get<Player[]>(`${API_BASE_URL}/players/points?points=${points}`);
            return response.data as Player[];
        } catch (error) {
            console.error(`Error fetching players with points ${points}:`, error);
            throw error;
        }
    }

    async getPlayerByAssists(assists: number): Promise<Player[]> {
        try {
            const response = await axios.get<Player[]>(`${API_BASE_URL}/players/assists?assists=${assists}`);
            return response.data as  Player[];
        } catch (error) {
            console.error(`Error fetching players with assists ${assists}:`, error);
            throw error;
        }
    }

    async getPlayerByRebounds(rebounds: number): Promise<Player[]> {
        try {
            const response = await axios.get<Player[]>(`${API_BASE_URL}/players/rebounds?rebounds=${rebounds}`);
            return response.data as Player[];
        } catch (error) {
            console.error(`Error fetching players with rebounds ${rebounds}:`, error);
            throw error;
        }
    }

    async getPlayerByEfficiency(efficiency: number): Promise<Player[]> {
        try {
            const response = await axios.get<Player[]>(`${API_BASE_URL}/players/efficiency?efficiency=${efficiency}`);
            return response.data as Player[];
        } catch (error) {
            console.error(`Error fetching players with efficiency ${efficiency}:`, error);
            throw error;
        }
    }

    async getPlayerBySteals(steals: number): Promise<Player[]> {
        try {
            const response = await axios.get<Player[]>(`${API_BASE_URL}/players/steals?steals=${steals}`);
            return response.data as Player[];
        } catch (error) {
            console.error(`Error fetching players with steals ${steals}:`, error);
            throw error;
        }
    }

    async getPlayerByBlocks(blocks: number): Promise<Player[]> {
        try {
            const response = await axios.get<Player[]>(`${API_BASE_URL}/players/blocks?blocks=${blocks}`);
            return response.data as Player[];
        } catch (error) {
            console.error(`Error fetching players with blocks ${blocks}:`, error);
            throw error;
        }
    }

    async getPlayerByTeam(team: string): Promise<Player[]> {
        try {
            const response = await axios.get<Player[]>(`${API_BASE_URL}/players/team_name?teamName=${team}`);
            return response.data as Player[];
        } catch (error) {
            console.error(`Error fetching players from team ${team}:`, error);
            throw error;
        }
    }

    async getPlayerByFGMade(fgMade: number): Promise<Player[]> {
        try {
            const response = await axios.get<Player[]>(`${API_BASE_URL}/players/fieldGoalsMade?fieldGoalsMade=${fgMade}`);
            return response.data as Player[];
        } catch (error) {
            console.error(`Error fetching players with field goals made ${fgMade}:`, error);
            throw error;
        }
    }

    async getPlayerByPosition(position: string): Promise<Player[]> {
        try {
            const response = await axios.get<Player[]>(`${API_BASE_URL}/players/position?position=${position}`);
            return response.data as Player[];
        } catch (error) {
            console.error(`Error fetching players with position ${position}:`, error);
            throw error;
        }
    }

    // Keep static methods for convenience if needed
    static async getPlayers(): Promise<Player[]> {
        const api = new PlayerAPI();
        return api.getPlayers();
    }

    static async getPlayerByName(fName: string, lName: string): Promise<Player> {
        const api = new PlayerAPI();
        return api.getPlayerByName(fName, lName);
    }

    static async getPlayerByPoints(points: number): Promise<Player[]> {
        const api = new PlayerAPI();
        return api.getPlayerByPoints(points);
    }

    static async getPlayerByAssists(assists: number): Promise<Player[]> {
        const api = new PlayerAPI();
        return api.getPlayerByAssists(assists);
    }

    static async getPlayerByRebounds(rebounds: number): Promise<Player[]> {
        const api = new PlayerAPI();
        return api.getPlayerByRebounds(rebounds);
    }

    static async getPlayerByEfficiency(efficiency: number): Promise<Player[]> {
        const api = new PlayerAPI();
        return api.getPlayerByEfficiency(efficiency);
    }

    static async getPlayerBySteals(steals: number): Promise<Player[]> {
        const api = new PlayerAPI();
        return api.getPlayerBySteals(steals);
    }

    static async getPlayerByBlocks(blocks: number): Promise<Player[]> {
        const api = new PlayerAPI();
        return api.getPlayerByBlocks(blocks);
    }

    static async getPlayerByTeam(team: string): Promise<Player[]> {
        const api = new PlayerAPI();
        return api.getPlayerByTeam(team);
    }

    static async getPlayerByFGMade(fgMade: number): Promise<Player[]> {
        const api = new PlayerAPI();
        return api.getPlayerByFGMade(fgMade);
    }

    static async getPlayerByPosition(position: string): Promise<Player[]> {
        const api = new PlayerAPI();
        return api.getPlayerByPosition(position);
    }
}