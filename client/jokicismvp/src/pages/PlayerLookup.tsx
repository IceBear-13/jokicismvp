import { useState } from "react";
import PlayerSearchbar from "../components/PlayerLookup/PlayerSearchbar";
import MainLayout from "../layout/MainLayout";
import type { Player } from "../models/Players";
import { PlayerAPI } from "../api/PlayerAPI";

export default function PlayerLookup() {
    // State to store search query and filter
    const [searchQuery, setSearchQuery] = useState("");
    const [searchFilter, setSearchFilter] = useState("");
    const [players, setPlayers] = useState([] as Player[]);
    
    // Handler for form submission
    const handleSearch = async (query: string, filter: string) => {
        setSearchQuery(query);
        setSearchFilter(filter);
        
        try {
            let result: Player | Player[] = [];
            
            switch(filter) {
                case "name":
                    // Assuming query is formatted as "FirstName LastName"
                    const name = query;
                    result = await PlayerAPI.getPlayerByName(name);
                    setPlayers(Array.isArray(result) ? result : [result]);
                    break;
                case "team":
                    result = await PlayerAPI.getPlayerByTeam(query);
                    setPlayers(Array.isArray(result) ? result : [result]);
                    break;
                case "position":
                    result = await PlayerAPI.getPlayerByPosition(query);
                    setPlayers(Array.isArray(result) ? result : [result]);
                    break;
                case "points":
                    result = await PlayerAPI.getPlayerByPoints(Number(query));
                    setPlayers(Array.isArray(result) ? result : [result]);
                    break;
                case "assists":
                    result = await PlayerAPI.getPlayerByAssists(Number(query));
                    setPlayers(Array.isArray(result) ? result : [result]);
                    break;
                case "rebounds":
                    result = await PlayerAPI.getPlayerByRebounds(Number(query));
                    setPlayers(Array.isArray(result) ? result : [result]);
                    break;
                case "steals":
                    result = await PlayerAPI.getPlayerBySteals(Number(query));
                    setPlayers(Array.isArray(result) ? result : [result]);
                    break;
                case "blocks":
                    result = await PlayerAPI.getPlayerByBlocks(Number(query));
                    setPlayers(Array.isArray(result) ? result : [result]);
                    break;
                case "efficiency":
                    result = await PlayerAPI.getPlayerByEfficiency(Number(query));
                    setPlayers(Array.isArray(result) ? result : [result]);
                    break;
                default:
                    // If no filter or unrecognized filter, get all players
                    alert("Please select a valid filter option.");
                    break;
            }
        } catch (error) {
            console.error("Error fetching player data:", error);
            setPlayers([]);
        }
    };

    return (
        <MainLayout>
            <div className="w-full h-full px-40 py-5 overflow-auto">
                <PlayerSearchbar onSearch={handleSearch} />
                <section className="flex flex-col w-full">
                    <h2 className="font-semibold text-md">Search Result(s)</h2>
                    {searchQuery && (
                        <p className="text-xs text-gray-500 mt-1">
                            Showing results for "{searchQuery}" filtered by {searchFilter || "all fields"}
                        </p>
                    )}
                </section>
                <section className="w-full mt-4">
                    <div className="border border-[#dde0e4] rounded-lg overflow-hidden">
                        <table className="w-full table-fixed border-collapse">
                            <thead className="bg-white sticky top-0 z-10 border-b-2 border-[#dde0e4]">
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
                        <div className="max-h-[300px] overflow-y-auto">
                            <table className="w-full table-fixed border-collapse">
                                <tbody className="bg-white text-xs">
                                    {players.map((player) => (
                                        <tr key={player.id} className="border-b border-[#dde0e4]">
                                            <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">
                                                {player.name}
                                            </td>
                                            <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">
                                                {player.team.name == "non" ? "More than one teams" : player.team.name}
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
            </div>
        </MainLayout>
    );
}