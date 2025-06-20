interface SearchBarProps {
    placeholder?: string;
}

export default function SearchBar({placeholder}: SearchBarProps) {
    return (
        <form className="flex flex-col items-center justify-center w-full">
            <div className="relative w-full mb-4">
                <input
                    type="text"
                    placeholder={placeholder || "Search..."}
                    className="rounded p-2 pl-10 w-full h-[48px] bg-[#F0F2F5] placeholder:text-[#61758A] placeholder:text-xs" 
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
                
        </form>
    )
}