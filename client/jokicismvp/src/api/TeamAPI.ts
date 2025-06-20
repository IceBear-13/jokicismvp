import { type Team } from "../models/Teams";

export interface ITeamAPI {
    getTeams(): Promise<Team[]>;
    getTeamByName(name: string): Promise<Team>;
    getTeamsByConference(conference: string): Promise<Team[]>;
    getTeamsByCity(city: string): Promise<Team[]>;
    getTeamsByWins(wins: number): Promise<Team[]>;
    getTeamsByLosses(losses: number): Promise<Team[]>;
    getTeamsById(abbreviation: string): Promise<Team[]>;
    getTeamsByPlayer(player: string): Promise<Team[]>;
    getTeamsByCoach(coach: string): Promise<Team[]>;
}

export class TeamAPI implements ITeamAPI {
    async getTeams(): Promise<Team[]> {
        try {
            const response = await fetch('http://localhost:8080/api/teams/all');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return (await response.json()) as Team[];
        } catch (error) {
            console.error('Error fetching teams:', error);
            throw error;
        }
    }

    async getTeamByName(name: string): Promise<Team> {
        try {
            const response = await fetch(`http://localhost:8080/api/teams/name?name=${name}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return (await response.json()) as Team;
        } catch (error) {
            console.error(`Error fetching team with name ${name}:`, error);
            throw error;
        }
    }

    async getTeamsByConference(conference: string): Promise<Team[]> {
        try {
            const response = await fetch(`http://localhost:8080/api/teams/conference?conference=${conference}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return (await response.json()) as Team[];
        } catch (error) {
            console.error(`Error fetching teams in conference ${conference}:`, error);
            throw error;
        }
    }

    async getTeamsByCity(city: string): Promise<Team[]> {
        try {
            const response = await fetch(`http://localhost:8080/api/teams/city?city=${city}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return (await response.json()) as Team[];
        } catch (error) {
            console.error(`Error fetching teams in city ${city}:`, error);
            throw error;
        }
    }

    async getTeamsByWins(wins: number): Promise<Team[]> {
        try {
            const response = await fetch(`http://localhost:8080/api/teams/wins?wins=${wins}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return (await response.json()) as Team[];
        } catch (error) {
            console.error(`Error fetching teams with wins ${wins}:`, error);
            throw error;
        }
    }

    async getTeamsByLosses(losses: number): Promise<Team[]> {
        try {
            const response = await fetch(`http://localhost:8080/api/teams/losses?losses=${losses}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return (await response.json()) as Team[];
        } catch (error) {
            console.error(`Error fetching teams with losses ${losses}:`, error);
            throw error;
        }
    }

    async getTeamsById(abbreviation: string): Promise<Team[]> {
        try {
            const response = await fetch(`http://localhost:8080/api/teams/id?id=${abbreviation}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return (await response.json()) as Team[];
        } catch (error) {
            console.error(`Error fetching team with abbreviation ${abbreviation}:`, error);
            throw error;
        }
    }

    async getTeamsByPlayer(player: string): Promise<Team[]> {
        try {
            const response = await fetch(`http://localhost:8080/api/teams/player/name?name=${player}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return (await response.json()) as Team[];
        } catch (error) {
            console.error(`Error fetching teams with player ${player}:`, error);
            throw error;
        }
    }

    async getTeamsByCoach(coach: string): Promise<Team[]> {
        try {
            const response = await fetch(`http://localhost:8080/api/teams/headCoach?headCoachName=${coach}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return (await response.json()) as Team[];
        } catch (error) {
            console.error(`Error fetching teams with coach ${coach}:`, error);
            throw error;
        }
    }

    static async getTeams(): Promise<Team[]> {
        const api = new TeamAPI();
        return await api.getTeams();
    }

    static async getTeamByName(name: string): Promise<Team> {
        const api = new TeamAPI();
        return await api.getTeamByName(name);
    }

    static async getTeamsByConference(conference: string): Promise<Team[]> {
        const api = new TeamAPI();
        return await api.getTeamsByConference(conference);
    }

    static async getTeamsByCity(city: string): Promise<Team[]> {
        const api = new TeamAPI();
        return await api.getTeamsByCity(city);
    }

    static async getTeamsByWins(wins: number): Promise<Team[]> {
        const api = new TeamAPI();
        return await api.getTeamsByWins(wins);
    }

    static async getTeamsByLosses(losses: number): Promise<Team[]> {
        const api = new TeamAPI();
        return await api.getTeamsByLosses(losses);
    }

    static async getTeamsById(abbreviation: string): Promise<Team[]> {
        const api = new TeamAPI();
        return await api.getTeamsById(abbreviation);
    }

    static async getTeamsByPlayer(player: string): Promise<Team[]> {
        const api = new TeamAPI();
        return await api.getTeamsByPlayer(player);
    }

    static async getTeamsByCoach(coach: string): Promise<Team[]> {
        const api = new TeamAPI();
        return await api.getTeamsByCoach(coach);
    }

    static async getTeamsByName(name: string): Promise<Team> {
        const api = new TeamAPI();
        return await api.getTeamByName(name);
    }

    static async getTeamsByAbbreviation(abbreviation: string): Promise<Team[]> {
        const api = new TeamAPI();
        return await api.getTeamsById(abbreviation);
    }

    

}