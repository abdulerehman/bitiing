const Row = () => (
  <tr className="border-b">
    <td className="pt-4 px-4">
      <p className="text-md">Dallas Cowboys</p>
      <p className="text-sm text-gray-400">Moneyline</p>
    </td>
    <td className="pt-4 px-4">
      <p className="text-md">Dallas Cowboys @ Miami Dolphins</p>
      <p className="text-sm text-gray-400">Nov 19, 2023 1:00PM</p>
    </td>
    <td className="pt-4 text-md px-4">$50.00</td>
    <td className="pt-4 text-md px-4">+150</td>
    <td className="pt-4 text-md px-4">$75.00</td>
  </tr>
);

const MyBets = () => {
  return (
    <div className="h-[88.9vh] flex-1 overflow-y-hidden">
      <div className="bg-black w-full h-14 flex items-center">
        <p className="text-white font-bold text-3xl pl-4">My Bets</p>
      </div>
      <div className="px-4 h-[92%] bg-mywhite">
        <div className="flex justify-between mt-4 gap-4">
          <div className="w-1/3 cursor-pointer hover:text-white hover:font-bold  hover:bg-primary text-xl py-2 px-6 text-center  bg-white border border-primary">
            Open - Matched
          </div>
          <div className="w-1/3 cursor-pointer hover:text-black hover:font-normal  hover:bg-white bg-primary text-white font-bold text-xl py-2 px-6 text-center border border-primary">
            Open - Unmatched
          </div>
          <div className="w-1/3 cursor-pointer hover:text-white hover:font-bold  hover:bg-primary text-xl py-2 px-6 text-center  bg-white border border-primary">
            Settled
          </div>
        </div>
        <div className="bg-black p-[1px] my-6"></div>
      </div>
    </div>
  );
};
export default MyBets;
