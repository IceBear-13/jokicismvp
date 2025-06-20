import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Coach from "../pages/CoachLookup";
import PlayerLookup from "../pages/PlayerLookup";
import TeamLookup from "../pages/TeamLookup";
import AllStats from "../pages/AllStats";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/players" element={<PlayerLookup />} />
                <Route path="/teams" element={<TeamLookup />} />
                <Route path="/coaches" element={<Coach />} />
                <Route path="/stats" element={<AllStats />} />
            </Routes>
        </BrowserRouter>
    );
}