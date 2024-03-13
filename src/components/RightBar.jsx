import { useEffect, useState } from "react";

const RightBar = ({ display }) => {
  const [weager, setWeager] = useState("X");
  const [win, setWin] = useState("Y");

  /*   const [display, setDisplay] = useState(false);
  useEffect(() => {
    setDisplay(
      window.location.pathname == "/" || window.location.pathname == "/"
    );
  }, [window.location.pathname]);
 */
  return (
    <div className="flex-y-1 bg-secondary min-h-[100vh]">
      <div className="bg-black h-14 py-2 flex flex-col justify-center">
        <p className="text-white text-center font-bold text-2xl">Bet Slip</p>
      </div>
      <div className="mt-6 bg-mywhite px-4">
        <div className="flex justify-between items-center px-2 py-1">
          <p className="text-[18px]">Los Angeles Lakers</p>
          <input
            type="text"
            className="border border-primary p-2 w-16"
            placeholder="Odds"
          />
        </div>
        <p className="pl-2 text-gray-400 text-[14px]">MONEYLINE</p>
        <p className="pl-2 text-[12px]">Los Angeles Lakers @ Brooklyn Nets</p>
        <div className="flex gap-6 items-center justify-between px-4 py-2">
          <div className="border border-primary p-1">
            <p className="text-[12px]">TO WAGER</p>
            <div className="flex items-center">
              <p className="text-[12px]">$</p>
              <input
                onChange={(e) => setWeager(e.target.value)}
                type="text"
                className="text-[12px] border-none w-[80px] pl-2 bg-mywhite"
              />
            </div>
          </div>
          <div className="border border-primary p-1">
            <p className="text-[12px]">TO WIN</p>
            <div className="flex items-center">
              <p className="text-[12px]">$</p>
              <input
                onChange={(e) => setWin(e.target.value)}
                type="text"
                className="border-none text-[12px] w-[80px] pl-2 bg-mywhite"
              />
            </div>
          </div>
        </div>
        <div className="w-full pb-4 flex items-center justify-center">
          <button className="bg-primary mt-4 text-white font-bold w-[150px] px-6">
            <p className="whitespace-nowrap">Place ${weager || "X"}</p>
            <p className="whitespace-nowrap">to win ${win || "Y"}</p>
          </button>
        </div>
      </div>

      {display && (
        <div className="bg-black py-2 mt-32 flex flex-col justify-center">
          <button className="text-white text-center font-bold text-2xl">
            Create Market
          </button>
        </div>
      )}
    </div>
  );
};
export default RightBar;
