import MainLayout from "../layout/MainLayout";

export default function Home() {
    return (
        <MainLayout>
            <div className="flex flex-col items-center justify-center h-full w-full">
                <h1 className="text-4xl font-bold mb-4 text-center">Welcome to Jokicismvp</h1>
                <p className="text-lg text-gray-600 text-center">Your one-stop solution for basketball stats lookup.</p>
                <div className="mt-8">
                    <a href="/players" className="text-blue-500 hover:underline mr-4">Player</a>
                    <a href="/teams" className="text-blue-500 hover:underline mr-4">Team</a>
                    <a href="/coaches" className="text-blue-500 hover:underline">Coach</a>
                </div>
            </div>
        </MainLayout>
    );
}