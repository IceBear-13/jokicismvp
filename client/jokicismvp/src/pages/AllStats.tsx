import MainLayout from "../layout/MainLayout";
import SearchLayout from "../layout/SearchLayout";

export default function AllStats() {
    return (
        <MainLayout>
            <SearchLayout>
                <section className="w-full mt-4">
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
                                    <tr className="border-b border-[#dde0e4]">
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">LeBron James</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Lakers</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">25.0</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">7.7</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">7.4</td>
                                    </tr>
                                    <tr className="border-b border-[#dde0e4]">
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Stephen Curry</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Warriors</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">29.5</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">5.3</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">6.1</td>
                                    </tr>
                                    <tr className="border-b border-[#dde0e4]">
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Kevin Durant</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Suns</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">27.0</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">7.1</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">5.5</td>
                                    </tr>
                                    {/* Add more rows here to see scrolling effect */}
                                    <tr className="border-b border-[#dde0e4]">
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Nikola Jokić</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Nuggets</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">26.4</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">12.4</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">9.0</td>
                                    </tr>
                                    <tr className="border-b border-[#dde0e4]">
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Giannis Antetokounmpo</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Bucks</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">30.1</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">11.3</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">6.5</td>
                                    </tr>
                                    <tr className="border-b border-[#dde0e4]">
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Luka Dončić</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Mavericks</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">32.4</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">8.6</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">8.0</td>
                                    </tr>
                                    <tr className="border-b border-[#dde0e4]">
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Jayson Tatum</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Celtics</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">27.0</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">8.9</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">4.9</td>
                                    </tr>
                                    <tr className="border-b border-[#dde0e4]">
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Joel Embiid</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">76ers</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">33.1</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">10.2</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">4.2</td>
                                    </tr>
                                    <tr className="border-b border-[#dde0e4]">
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Damian Lillard</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Bucks</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">24.3</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">4.4</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">7.0</td>
                                    </tr>
                                    <tr className="border-b border-[#dde0e4]">
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Anthony Davis</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Lakers</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">24.7</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">12.6</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">3.5</td>
                                    </tr>
                                    <tr className="border-b border-[#dde0e4]">
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Shai Gilgeous-Alexander</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Thunder</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">30.1</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">5.5</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">6.2</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Kawhi Leonard</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">Clippers</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">23.7</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">6.1</td>
                                        <td className="px-4 py-3 text-[#121417] w-[20%] font-normal">3.6</td>
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