import { useState, type FormEvent } from "react";

interface TeamSearchbarProps {
    onSearch?: (query: string, filter: string) => void;
}

export default function TeamSearchbar({onSearch}: TeamSearchbarProps) {
    const [query, setQuery] = useState("");
    const [filter, setFilter] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(query, filter);
        }
    };

    return (
        <section className="flex flex-col items-center justify-center w-full">
            <div className="flex gap-4 w-full mb-4">
                <div className="relative flex-1">
                    <input
                        type="text"
                        placeholder="Search for team(s)..."
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
                    <option value="id">Abbreviation</option>
                    <option value="name">Name</option>
                    <option value="city">City</option>
                    <option value="conference">Conference</option>
                    <option value="conference">Wins</option>
                    <option value="conference">Losses</option>
                    <option value="conference">Player</option>
                </select>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded h-[48px] text-sm font-medium justify-center flex items-center" type="submit" onClick={handleSubmit}>
                    Search
                </button>
            </div>
        </section>
    )
}
