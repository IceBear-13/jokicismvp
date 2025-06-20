import SearchBar from "../components/GeneralLookup/SearchBar";
import TeamSearchbar from "../components/TeamLookup/SearchBar";
import MainLayout from "../layout/MainLayout";
import SearchLayout from "../layout/SearchLayout";

export default function TeamLookup() {
  return (
    <MainLayout>
      <SearchLayout>
        <TeamSearchbar />
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
                  <tr className="border-b border-[#dde0e4] hover:bg-gray-100 hover:cursor-pointer">
                    <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">
                      Los Angeles Lakers
                    </td>
                    <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">
                      LAL
                    </td>
                    <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">
                      Los Angeles
                    </td>
                    <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">
                      Western
                    </td>
                    <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">
                        50
                    </td>
                    <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">
                        32
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </SearchLayout>
    </MainLayout>
  );
}
