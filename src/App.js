import "./App.css";
import { Nav } from "./components/Nav";
import RightBar from "./components/RightBar";
import { Side } from "./components/Side";
import MyBets from "./pages/MyBets";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Settled from "./pages/Settled";
import CreateMarket from "./pages/CreateMarket";

function App() {
  return (
    <div>
      <Nav />
      <div className="flex bg-gray-100">
        <Side />
        <Settled />
        <RightBar />
      </div>
    </div>
  );
}

export default App;
