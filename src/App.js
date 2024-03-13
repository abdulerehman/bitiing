import "./App.css";
import { Nav } from "./components/Nav";
import RightBar from "./components/RightBar";
import { Side } from "./components/Side";
import Events from "./pages/Events";
import Home from "./pages/Home";
import MyBets from "./pages/Settled";
import CreateMarket from "./pages/CreateMarket";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";

function App() {
  const [display, setDisplay] = useState(false);

  return (
    <Router>
      <div>
        <Nav />
        <div className="flex bg-gray-100">
          <Side />
          <Routes>
            <Route
              path="/"
              exact
              element={<Home setDisplay={() => setDisplay(true)} />}
            />
            <Route
              path="/create"
              element={<CreateMarket setDisplay={() => setDisplay(true)} />}
            />
            <Route
              path="/bets"
              element={<MyBets setDisplay={() => setDisplay(false)} />}
            />
            <Route
              path="/events"
              element={<Events setDisplay={() => setDisplay(false)} />}
            />
          </Routes>
          <RightBar display={display} />
        </div>
        <div className="w-full bg-primary py-8 px-8 flex gap-6">
          <p className="text-xl">About</p>
          <p className="text-xl">House Rules</p>
          <p className="text-xl">Contact</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
