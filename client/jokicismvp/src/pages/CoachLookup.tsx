import CoachSearchBar from "../components/CoachLookup/CoachSearch";
import MainLayout from "../layout/MainLayout";
import SearchLayout from "../layout/SearchLayout";

export default function Coach() {
  return (
    <MainLayout>
      <SearchLayout>
        <CoachSearchBar />
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
                    <tr className="border-b border-[#dde0e4]">
                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Gregg Popovich</td>
                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Spurs</td>
                    </tr>
                    <tr className="border-b border-[#dde0e4]">
                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Steve Kerr</td>
                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Warriors</td>
                    </tr>
                    <tr className="border-b border-[#dde0e4]">
                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Erik Spoelstra</td>
                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Heat</td>
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
