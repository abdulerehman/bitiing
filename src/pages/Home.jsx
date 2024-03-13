import { useEffect } from "react";
import Banner from "../components/Banner";
import { ReactComponent as Pen } from "../components/image 8 (1).svg";
import { Link } from "react-router-dom";

const Item = ({ active, text }) => {
  return (
    <div
      className={`
  border-primary rounded-[5px] w-32 text-center border-2 ${
    active ? "text-white bg-primary" : "bg-white"
  }
  `}
    >
      {text}
    </div>
  );
};

const Row = ({ text, yes, no }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex px-4 gap-2 items-center">
        <div className="p-4 rounded-full bg-gray-200"></div>
        <p>{text}</p>
      </div>
      <div className="flex gap-2 items-center px-2">
        <div className="rounded-md border-primary border-2 px-1">+{yes}</div>
        <div className="rounded-md border-primary border-2 px-1">-{no}</div>
      </div>
    </div>
  );
};

const Home = ({ setDisplay }) => {
  useEffect(() => {
    setDisplay();
  }, []);
  return (
    <div className="h-[88.9vh] flex flex-col flex-1">
      <div className="flex items-center justify-center">
        <div className="flex gap-6 items-center justify-center p-4">
          <Link to="/create">
            <div className="border-primary bg-white border-2 flex flex-col items-center justify-center w-52 h-52">
              <p className="mb-2 text-xl">Create a Market</p>
              <Pen />
            </div>
          </Link>
          <div className="border-primary text-center bg-white border-2 flex flex-col items-center justify-center w-52 h-52">
            <p className="mb-2 text-xl">No Commission!</p>
            <p className="mb-2 text-xl">
              All Entertainment Bets are Commission Free
            </p>
            <p className="mb-2 text-xl">thru 12/01/23</p>
          </div>
          <div className="border-primary bg-white border-2 flex flex-col items-center justify-center w-52 h-52">
            <p className="mb-2 text-xl">Earn $100</p>
            <p className="mb-2 text-xl">Refer a Friend and</p>
            <p className="mb-2 text-xl">Earn $100 Back</p>
          </div>
        </div>
        <button className="bg-primary text-2xl font-bold text-white rounded-full w-10 h-10">
          {">"}
        </button>
      </div>
      <Banner text="Featured Events" />
      <div className="flex items-center justify-center">
        <div className="flex gap-6 items-center justify-center p-4">
          <Link to="/events">
            <div className="border-primary text-center bg-white border-2 flex flex-col items-center justify-start w-52 h-52">
              <p className="mb-2 mt-2 text-md">Monday Night Football</p>
              <p className="mb-6 mt-6 text-md">Who will win?</p>
              <div className="flex justify-between w-full px-8">
                <p className="text-xl">Jets</p>
                <div className="border-primary px-2 bg-gray-200 border-2 text-xl">
                  -100
                </div>
              </div>
              <div className="flex mt-3 justify-between w-full px-8">
                <p className="text-xl">Giants</p>
                <div className="border-primary px-2 bg-gray-200 border-2 text-xl">
                  -100
                </div>
              </div>
            </div>
          </Link>
          <Link to="/events">
            <div className="border-primary text-center bg-white border-2 flex flex-col items-center justify-start w-52 h-52">
              <p className="py-2 text-md">Barbenheimer</p>
              <p className="pb-4 pt-2 px-2 text-sm">
                Combined opening weekend will be over 300mm?
              </p>
              <div className="flex justify-between w-full px-8">
                <p className="text-xl">Yes</p>
                <div className="border-primary px-2 bg-gray-200 border-2 text-xl">
                  -100
                </div>
              </div>
              <div className="flex mt-3 justify-between w-full px-8">
                <p className="text-xl">No</p>
                <div className="border-primary px-2 bg-gray-200 border-2 text-xl">
                  -100
                </div>
              </div>
            </div>
          </Link>
          <Link to="/events">
            <div className="border-primary text-center bg-white border-2 flex flex-col items-center justify-start w-52 h-52">
              <p className="mb-2 mt-2 text-md">Today’s Trends</p>
              <p className="mb-4 mt-2">Will Sam Altman be reinstated as CEO?</p>
              <div className="flex justify-between w-full px-8">
                <p className="text-xl">Yes</p>
                <div className="border-primary px-2 bg-gray-200 border-2 text-xl">
                  -100
                </div>
              </div>
              <div className="flex mt-3 justify-between w-full px-8">
                <p className="text-xl">No</p>
                <div className="border-primary px-2 bg-gray-200 border-2 text-xl">
                  -100
                </div>
              </div>
            </div>
          </Link>
        </div>

        <button className="bg-primary text-2xl font-bold text-white rounded-full w-10 h-10">
          {">"}
        </button>
      </div>
      <div className="flex items-center px-2 gap-4 justify-between py-2">
        <div className="flex gap-4 items-center justify-start">
          <Item active text="US Elections" />
          <Item text="NBA" />
          <Item text="NFL" />
          <Item text="Covid vaccines" />
          <Item text="Entertainment" />
        </div>
        <button className="bg-primary text-2xl font-bold text-white rounded-full w-10 h-10">
          {">"}
        </button>
      </div>
      <Banner text="SUN NOV 19TH" />
      <div className="px-4 py-2">
        <div className="py-2 border-2 border-primary bg-white">
          <div className="flex justify-between items-center">
            <p className="px-4 text-xl font-bold">Republican Nominee 2024</p>
            <div className="flex">
              <p className="text-primary font-bold">More Wagers</p>
              <p className="text-primary font-bold mx-1">{">"}</p>
            </div>
          </div>
          <div className="h-[2px] w-full bg-gray-200"></div>
          <div className="flex justify-between items-center">
            <p className="px-4 text-sm text-gray-500">Politics</p>
            <div className="flex gap-8 px-4">
              <p>Yes</p>
              <p>No</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-2">
            <Row text="Donald Trump" yes="120" no="150" />
            <Row text="Donald Trump" yes="120" no="150" />
            <Row text="Donald Trump" yes="120" no="150" />
            <Row text="Donald Trump" yes="120" no="150" />
            <Row text="Donald Trump" yes="120" no="150" />
            <Row text="Donald Trump" yes="120" no="150" />
            <Row text="Donald Trump" yes="120" no="150" />
            <Row text="Donald Trump" yes="120" no="150" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
