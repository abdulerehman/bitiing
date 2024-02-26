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
    <td className="text-xl text-center font-extrabold cursor-pointer text-red-600">
      X
    </td>
  </tr>
);

const Unmatched = () => {
  return (
    <div className="overflow-x-auto">
      <table className="text-nowrap w-full">
        <thead>
          <th className="px-4 text-start font-normal">Wager</th>
          <th className="px-4 text-start font-normal">Event</th>
          <th className="px-4 text-start font-normal">Wager Size</th>
          <th className="px-4 text-start font-normal">Odds</th>
          <th className="px-4 text-start font-normal">To Win</th>
          <th className="px-4 text-start font-normal">Cancel</th>
        </thead>
        <tbody className="border bg-white px-2">
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
        </tbody>
      </table>
    </div>
  );
};
export default Unmatched;
