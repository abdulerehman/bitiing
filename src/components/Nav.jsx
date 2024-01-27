import Image from "./PropX Logo.png";

const Search = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 mx-1 text-white bg-primary rounded-full"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
  </svg>
);

export const Nav = () => {
  return (
    <div className="w-full px-6 h-24 flex items-center justify-between bg-primary">
      <img src={Image} />
      <div className="flex ml-6 bg-white items-center rounded-md">
        <Search />
        <input
          type="text"
          className="rounded-md h-10 md:w-[200px] lg:w-[400px]"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center md:gap-4 lg:gap-12">
        <p className="text-2xl">My Bets</p>
        <p className="text-2xl">Promotions</p>
      </div>
      <div className="flex items-center md:gap-4 lg:gap-12">
        <div>
          <p className="text-xl">Balance</p>
          <p className="text-xl">$XX,XXX</p>
        </div>
        <p className="text-xl">Deposit</p>
      </div>
    </div>
  );
};
