import { useState } from "react";
import Settled from "../components/Settled";
import Matched from "../components/Matched";
import Unmatched from "../components/UnMatched";

const Button = ({ text, active, click }) => {
  return (
    <button
      onClick={() => click()}
      className={`w-1/3 cursor-pointer ${
        active ? "bg-primary text-white font-bold" : "bg-white"
      } text-xl py-2 px-6 text-center  border border-primary`}
    >
      {text}
    </button>
  );
};

const MyBets = () => {
  const [selected, setSelected] = useState(1);
  return (
    <div className="h-[88.9vh] flex-1 overflow-y-hidden">
      <div className="bg-black w-full h-14 flex items-center">
        <p className="text-white font-bold text-3xl pl-4">My Bets</p>
      </div>
      <div className="px-4 h-[92%] bg-mywhite">
        <div className="flex justify-between mt-4 gap-4">
          <Button
            click={() => setSelected(1)}
            text="Open - Matched"
            active={selected === 1}
          />
          <Button
            click={() => setSelected(2)}
            text="Open - Unmatched"
            active={selected === 2}
          />
          <Button
            click={() => setSelected(3)}
            text="Settled"
            active={selected === 3}
          />
        </div>
        <div className="bg-black p-[1px] my-6"></div>
        {selected === 1 && <Matched />}
        {selected === 2 && <Unmatched />}
        {selected === 3 && <Settled />}
      </div>
    </div>
  );
};
export default MyBets;
