import type { HeadCoach } from "../models/Coaches";


const BASE_URL = 'http://localhost:8080/api/head-coaches';
interface ICoachAPI {
    getCoaches(): Promise<HeadCoach[]>;
    getCoachesByName(name: string): Promise<HeadCoach>;
}

export class CoachAPI implements ICoachAPI {
    async getCoaches(): Promise<HeadCoach[]> {
        try {
            const response = await fetch(`${BASE_URL}/all`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return (await response.json()) as HeadCoach[];
        } catch (error) {
            console.error('Error fetching coaches:', error);
            throw error;
        }
    }

    async getCoachesByName(name: string): Promise<HeadCoach> {
        try {
            const response = await fetch(`${BASE_URL}/name?name=${name}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return (await response.json()) as HeadCoach;
        } catch (error) {
            console.error(`Error fetching coaches with name ${name}:`, error);
            throw error;
        }
    }

    static async getCoaches(): Promise<HeadCoach[]> {
        const api = new CoachAPI();
        return api.getCoaches();
    }

    static async getCoachByName(name: string): Promise<HeadCoach> {
        const api = new CoachAPI();
        return api.getCoachesByName(name);
    }
}