const Arrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="w-8 h-8 text-white"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);

export const Side = () => {
  return (
    <div className="bg-black w-[250px] h-full flex flex-col">
      <p className="text-white font-bold mt-4 ml-2 text-2xl">Favorites</p>
      <p className="text-white font-bold mt-6 ml-2 text-2xl">Popular</p>
      <div className="flex flex-col mt-4 gap-3">
        <div className="flex items-center justify-between pr-4">
          <p className="ml-5 text-xl text-gray-200">Basketball</p>
          <Arrow />
        </div>
        <div className="flex items-center justify-between pr-4">
          <p className="ml-5 text-xl text-gray-200">Classical Music</p>
          <Arrow />
        </div>
      </div>
      <p className="text-white font-bold mt-16 ml-2 text-2xl">All Categories</p>
      <div className="flex flex-col mt-4 gap-3">
        <div className="flex items-center justify-between pr-4">
          <p className="ml-5 text-xl text-gray-200">Sports</p>
          <Arrow />
        </div>
        <div className="flex items-center justify-between pr-4">
          <p className="ml-5 text-xl text-gray-200">Weather</p>
          <Arrow />
        </div>
        <div className="flex items-center justify-between pr-4">
          <p className="ml-5 text-xl text-gray-200">Music</p>
          <Arrow />
        </div>
        <div className="flex items-center justify-between pr-4">
          <p className="ml-5 text-xl text-gray-200">Movies</p>
          <Arrow />
        </div>
      </div>
    </div>
  );
};
