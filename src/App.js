import "./App.css";
import { Nav } from "./components/Nav";
import RightBar from "./components/RightBar";
import { Side } from "./components/Side";
import Events from "./pages/Events";
import Home from "./pages/Home";
import MyBets from "./pages/Settled";
import CreateMarket from "./pages/CreateMarket";
import { Outlet } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div className="flex bg-gray-100">
          <Side />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/create" element={<CreateMarket />} />
            <Route path="/bets" element={<MyBets />} />
            <Route path="/events" element={<Events />} />
          </Routes>
          <RightBar />
        </div>
      </div>
    </Router>
  );
}

export default App;
