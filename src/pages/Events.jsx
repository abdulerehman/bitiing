import { useEffect } from "react";

const Events = ({ setDisplay }) => {
  useEffect(() => {
    setDisplay();
  }, []);
  return (
    <div className="h-[88.9vh] flex-1 overflow-y-scroll">
      <div className="bg-black w-full h-14 flex items-center">
        <p className="text-white font-bold text-3xl pl-4">My Bets</p>
      </div>
      <div className="px-4 py-4">
        <p className="text-gray-500">
          Basketball/NBA Odds/Philadelphia 76ers @ Brooklyn Nets Odds
        </p>
        <p className="text-primary mt-4 font-bold text-xl">
          Philadelphia 76ers @ Brooklyn Nets Odds
        </p>

        <div className="overflow-x-auto">
          <div className="flex w-full py-4 gap-6">
            <p className="bg-primary border-2 border-primary text-white px-6 py-[6px]">
              Popular
            </p>
            <p className="bg-white border-2 border-primary text-primary px-6 py-[6px] ">
              Popular
            </p>
            <p className="bg-white border-2 border-primary text-primary px-6 py-[6px] ">
              Popular
            </p>
            <p className="bg-white border-2 border-primary text-primary px-6 py-[6px] ">
              Popular
            </p>
            <p className="bg-white border-2 border-primary text-primary px-6 py-[6px] ">
              Popular
            </p>
            <p className="bg-white border-2 border-primary text-primary px-6 py-[6px] ">
              Popular
            </p>
            <p className="bg-white border-2 border-primary text-primary px-6 py-[6px] ">
              Popular
            </p>
            <p className="bg-white border-2 border-primary text-primary px-6 py-[6px] ">
              Popular
            </p>
            <p className="bg-white border-2 border-primary text-primary px-6 py-[6px] ">
              Popular
            </p>
          </div>
        </div>
        <div className="bg-black p-[1px] my-6"></div>
        <div className="flex flex-col gap-6">
          <div className="border-2 border-black flex flex-col justify-start">
            <div className="bg-black p-[5px]">
              <p className="text-white text-2xl font-bold">Moneyline</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex gap-6 items-center my-3 justify-center">
                <p className="py-3 px-5 border">PHI</p>
                <p className="py-3 px-5 border">BKN</p>
              </div>
              <div className="flex gap-6 items-center my-3 justify-center">
                <div className="flex flex-col gap-2 justify-center items-center">
                  <p className="py-3 px-5 border border-primary bg-gray-100">
                    --220
                  </p>
                  <p>$1,200</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <p className="py-3 px-5 border border-primary bg-gray-100">
                    -210
                  </p>
                  <p>$1,200</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <p className="py-3 px-5 border border-primary bg-primary text-white font-bold">
                    -200
                  </p>
                  <p>$1,200</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <p className="py-3 px-5 border border-purple-700 bg-purple-700 text-white font-bold">
                    +180
                  </p>
                  <p>$1,200</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <p className="py-3 px-5 border border-purple-700 bg-gray-100">
                    +170
                  </p>
                  <p>$1,200</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <p className="py-3 px-5 border border-purple-700 bg-gray-100">
                    +165
                  </p>
                  <p>$1,200</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 border-black flex flex-col justify-start">
            <div className="bg-black p-[5px]">
              <p className="text-white text-2xl font-bold">Spread</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex gap-6 items-center my-3 justify-center">
                <p className="py-3 px-5 border">PHI (-3.5)</p>
                <p className="py-3 px-5 border">BKN (+3.5)</p>
              </div>
              <div className="flex gap-6 items-center my-3 justify-center">
                <div className="flex flex-col gap-2 justify-center items-center">
                  <p className="py-3 px-5 border border-primary bg-gray-100">
                    -115
                  </p>
                  <p>$1,200</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <p className="py-3 px-5 border border-primary bg-gray-100">
                    -112
                  </p>
                  <p>$1,200</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <p className="py-3 px-5 border border-primary bg-primary text-white font-bold">
                    -110
                  </p>
                  <p>$1,200</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <p className="py-3 px-5 border border-purple-700 bg-purple-700 text-white font-bold">
                    --110
                  </p>
                  <p>$1,200</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <p className="py-3 px-5 border border-purple-700 bg-gray-100">
                    -111
                  </p>
                  <p>$1,200</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <p className="py-3 px-5 border border-purple-700 bg-gray-100">
                    -120
                  </p>
                  <p>$1,200</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 border-black flex flex-col justify-start">
            <div className="bg-black p-[5px]">
              <p className="text-white text-2xl font-bold">Total</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex gap-6 items-center my-3 justify-center">
                <p className="py-3 px-5 border">PHI</p>
                <p className="py-3 px-5 border">BKN</p>
              </div>
              <div className="flex gap-6 items-center my-3 justify-center">
                <div className="flex flex-col gap-2 justify-center items-center">
                  <p className="py-3 px-5 border border-primary bg-gray-100">
                    -115
                  </p>
                  <p>$1,200</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <p className="py-3 px-5 border border-primary bg-gray-100">
                    -111
                  </p>
                  <p>$1,200</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <p className="py-3 px-5 border border-primary bg-primary text-white font-bold">
                    -110
                  </p>
                  <p>$1,200</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <p className="py-3 px-5 border border-purple-700 bg-purple-700 text-white font-bold">
                    -108
                  </p>
                  <p>$1,200</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <p className="py-3 px-5 border border-purple-700 bg-gray-100">
                    -110
                  </p>
                  <p>$1,200</p>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <p className="py-3 px-5 border border-purple-700 bg-gray-100">
                    -113
                  </p>
                  <p>$1,200</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-black">
            <p className="text-2xl text-white px-2 py-1 font-bold">About</p>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            reprehenderit assumenda eum laborum qui ex quo asperiores fuga
            similique nemo provident obcaecati voluptatum animi exercitationem,
            aut nam enim nostrum. Soluta.
          </div>
        </div>
      </div>
    </div>
  );
};
export default Events;
