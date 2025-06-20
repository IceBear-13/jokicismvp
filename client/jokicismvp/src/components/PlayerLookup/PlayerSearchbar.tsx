import { useState } from "react";
import type { FormEvent } from "react";

interface PlayerSearchbarProps {
    onSearch?: (query: string, filter: string) => void;
}

export default function PlayerSearchbar({ onSearch }: PlayerSearchbarProps) {
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(query, filter);
        }
    };

    return (
        <form className="flex flex-col items-center justify-center w-full" onSubmit={handleSubmit}>
            <div className="flex gap-4 w-full mb-4">
                <div className="relative flex-1">
                    <input
                        type="text"
                        placeholder="Search for player(s)..."
                        className="rounded p-2 pl-10 w-full h-[48px] bg-[#F0F2F5] placeholder:text-[#61758A] placeholder:text-xs"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <svg
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
                <select 
                    className="rounded p-2 h-[48px] bg-[#F0F2F5] text-[#61758A] text-xs"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="">Search Options</option>
                    <option value="team">Team</option>
                    <option value="name">Name</option>
                    <option value="position">Position</option>
                    <option value="points">Points</option>
                    <option value="assists">Assists</option>
                    <option value="rebounds">Rebound</option>
                    <option value="steals">Steals</option>
                    <option value="blocks">Blocks</option>
                    <option value="efficiency">Efficiency</option>
                </select>
                <button 
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded h-[48px] text-sm font-medium justify-center flex items-center"
                >
                    Search
                </button>
            </div>
        </form>
    );
}