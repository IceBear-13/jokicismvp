import { useState } from "react";
import CoachSearchBar from "../components/CoachLookup/CoachSearch";
import MainLayout from "../layout/MainLayout";
import SearchLayout from "../layout/SearchLayout";
import type { HeadCoach } from "../models/Coaches";
import { CoachAPI } from "../api/CoachAPI";

export default function Coach() {
  const [searchQuery, setSearchQuery] = useState("");
  const [coahes, setCoaches] = useState([] as HeadCoach[]);

  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    try {
      let result: HeadCoach | HeadCoach[] = [];
      if (query) {
        result = await CoachAPI.getCoachByName(query);
        setCoaches(Array.isArray(result) ? result : [result]);
      } else {
        result = await CoachAPI.getCoaches();;
        setCoaches(Array.isArray(result) ? result : [result]);
      }
    } catch (error) {
      console.error("Error fetching coaches:", error);
      setCoaches([]);
    }
  };

  return (
    <MainLayout>
      <SearchLayout>
        <CoachSearchBar onSearch={handleSearch} />
        <section className="flex flex-col w-full">
          <h2 className="font-semibold text-md">Search Result(s)</h2>
          {searchQuery && (
            <p className="text-xs text-gray-500 mt-1">
              Showing results for "{searchQuery}"
            </p>
          )}
        </section>
        <section className="w-full mt-4">
          <div className="border border-[#dde0e4] rounded-lg overflow-hidden">
            <table className="w-full table-fixed border-collapse">
              <thead className="bg-white sticky top-0 z-10 border-b-2 border-gray-300">
                <tr className="bg-white">
                  <th className="px-4 py-3 text-left text-[#121417] w-[20%] font-medium text-xs leading-normal first:rounded-tl-lg">
                    Coach
                  </th>
                  <th className="px-4 py-3 text-left text-[#121417] w-[20%] font-medium text-xs leading-normal">
                    Team
                  </th>
                </tr>
              </thead>
            </table>
            <div className="max-h-[300px] overflow-y-auto">
              <table className="w-full table-fixed border-collapse">
                <tbody className="bg-white text-xs">
                  {coahes.map((coach) => (
                    <tr key={coach.id} className="border-b border-gray-200">
                      <td className="px-4 py-3 text-left text-[#121417]">
                        {coach.name}
                      </td>
                      <td className="px-4 py-3 text-left text-[#121417]">
                        {coach.teamCoached.name || "N/A"}
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
