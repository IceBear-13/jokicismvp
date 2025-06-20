function Header(){
    return (
        <div className="border border-b-2 border-gray-300 bg-white shadow-sm fixed top-0 w-full z-50 h-[85px] items-center md:flex justify-between px-4 hidden">
            <div className="flex items-center gap-8">
                <div className="flex items-center space-x-2">
                    <img src="logo.svg" alt="Jokicismvp Logo" className="size-[16px]" />
                    <h1 className="font-bold text-sm">Jokicismvp</h1>
                </div>
                <div className="flex items-center gap-9">
                    <a className="text-[#111418] text-xs font-medium leading-normal" href="/">Home</a>
                    <a className="text-[#111418] text-xs font-medium leading-normal" href="/players">Players</a>
                    <a className="text-[#111418] text-xs font-medium leading-normal" href="/teams">Teams</a>
                    <a className="text-[#111418] text-xs font-medium leading-normal" href="/coaches">Coaches</a>
                    <a className="text-[#111418] text-xs font-medium leading-normal" href="/stats">Stats</a>
                </div>

            </div>
        </div>
    )
}

export default Header;