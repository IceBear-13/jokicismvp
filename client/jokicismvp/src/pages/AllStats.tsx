import { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import SearchLayout from "../layout/SearchLayout";
// import type { Team } from "../models/Teams";
import type { Player } from "../models/Players";
// import { TeamAPI } from "../api/TeamAPI";
import { PlayerAPI } from "../api/PlayerAPI";

export default function AllStats() {
    // const [teams, setTeams] = useState([] as Team[]); // Replace 'any' with your actual team type
    const [players, setPlayers] = useState([] as Player[]); // Replace 'any' with your actual player type

    useEffect(() => {
        const fetchTeamsAndPlayers = async () => {
            try {
                // const teamReponse = await TeamAPI.getTeams();
                const playerResponse = await PlayerAPI.getPlayers();

                // setTeams(teamReponse);
                setPlayers(playerResponse);

            } catch (error) {
                console.error('Error fetching teams and players:', error);
            }
        };

        fetchTeamsAndPlayers();
    })

    return (
        <MainLayout>
            <SearchLayout>
                <section className="w-full mt-4 overflow-auto">
                    <div className="border border-[#dde0e4] rounded-lg overflow-hidden">
                        <table className="w-full table-fixed border-collapse">
                            <thead className="bg-white sticky top-0 z-10 border-b-2 border-gray-300">
                                <tr className="bg-white">
                                    <th className="px-4 py-3 text-left text-[#121417] w-[20%] font-medium text-xs leading-normal first:rounded-tl-lg">
                                        Player
                                    </th>
                                    <th className="px-4 py-3 text-left text-[#121417] w-[20%] font-medium text-xs leading-normal">
                                        Team
                                    </th>
                                    <th className="px-4 py-3 text-left text-[#121417] w-[20%] font-medium text-xs leading-normal">
                                        Points
                                    </th>
                                    <th className="px-4 py-3 text-left text-[#121417] w-[20%] font-medium text-xs leading-normal">
                                        Rebounds
                                    </th>
                                    <th className="px-4 py-3 text-left text-[#121417] w-[20%] font-medium text-xs leading-normal last:rounded-tr-lg">
                                        Assists
                                    </th>
                                </tr>
                            </thead>
                        </table>
                        <div className="max-h-[400px] overflow-y-auto">
                            <table className="w-full table-fixed border-collapse">
                                <tbody className="bg-white text-xs">
                                    {players.map((player) => (
                                        <tr key={player.id} className="border-b border-gray-200">
                                            <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">
                                                {player.name}
                                            </td>
                                            <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">
                                                {player.team.name === "non" ? "More than one teams" : player.team.name}
                                            </td>
                                            <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">
                                                {player.points}
                                            </td>
                                            <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">
                                                {player.rebounds}
                                            </td>
                                            <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">
                                                {player.assists}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </SearchLayout>
        </MainLayout>
    );
}