import { useState } from "react";
import TeamSearchbar from "../components/TeamLookup/SearchBar";
import MainLayout from "../layout/MainLayout";
import SearchLayout from "../layout/SearchLayout";
import type { Team } from "../models/Teams";
import { TeamAPI } from "../api/TeamAPI";

export default function TeamLookup() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [teams, setTeams] = useState([] as Team[]);

  const handleSearch = async (query: string, filter: string) => {
    setSearchQuery(query);
    setSearchFilter(filter);
    try {
      let result: Team | Team[] = [];

      switch (filter) {
        case "name":
          result = await TeamAPI.getTeamByName(query);
          setTeams(Array.isArray(result) ? result : [result]);
          break;
        case "conference":
          result = await TeamAPI.getTeamsByConference(query);
          setTeams(Array.isArray(result) ? result : [result]);
          break;
        case "city":
          result = await TeamAPI.getTeamsByCity(query);
          setTeams(Array.isArray(result) ? result : [result]);
          break;
        case "wins":
          result = await TeamAPI.getTeamsByWins(Number(query));
          setTeams(Array.isArray(result) ? result : [result]);
          break;
        case "losses":
          result = await TeamAPI.getTeamsByLosses(Number(query));
          setTeams(Array.isArray(result) ? result : [result]);
          break;
        default:
          alert("Please select a valid filter option.");
          console.error("Invalid filter");
      }
    } catch (error) {
      console.error("Error fetching teams:", error);
      setTeams([]);
    }
  };
  
  return (
    <MainLayout>
      <SearchLayout>
        <TeamSearchbar onSearch={handleSearch}/>
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
              <thead className="bg-white sticky top-0 z-10 border-b-2 border-gray-300">
                <tr className="bg-white">
                  <th className="px-4 py-3 text-left text-[#121417] w-[20%] font-medium text-xs leading-normal first:rounded-tl-lg">
                    Team
                  </th>
                  <th className="px-4 py-3 text-left text-[#121417] w-[20%] font-medium text-xs leading-normal">
                    Team Abbreviation
                  </th>
                  <th className="px-4 py-3 text-left text-[#121417] w-[20%] font-medium text-xs leading-normal last:rounded-tr-lg">
                    City
                  </th>
                  <th className="px-4 py-3 text-left text-[#121417] w-[20%] font-medium text-xs leading-normal">
                    Conference
                  </th>
                  <th className="px-4 py-3 text-left text-[#121417] w-[20%] font-medium text-xs leading-normal">
                    Games Won
                  </th>
                  <th className="px-4 py-3 text-left text-[#121417] w-[20%] font-medium text-xs leading-normal">
                    Games Lost
                  </th>
                </tr>
              </thead>
            </table>
            <div className="max-h-[300px] overflow-y-auto">
              <table className="w-full table-fixed border-collapse">
                <tbody className="bg-white text-xs">
                  {teams.map((team) => (
                    <tr key={team.id} className="border-b border-gray-200">
                      <td className="px-4 py-3">{team.name}</td>
                      <td className="px-4 py-3">{team.id}</td>
                      <td className="px-4 py-3">{team.city}</td>
                      <td className="px-4 py-3">{team.conference}</td>
                      <td className="px-4 py-3">{team.gamesWon}</td>
                      <td className="px-4 py-3">{team.gamesLost}</td>
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
