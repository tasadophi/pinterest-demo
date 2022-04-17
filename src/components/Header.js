import { useState } from "react";
import pinterest from "./../images/pinterestLogo.png";

const SearchResults = ({ filtered }) => {
  return filtered.length ? (
    filtered.map((p) => {
      return (
        <div
          key={p.page_id}
          className="border-b-2 p-2 w-full rounded cursor-pointer text-sm hover:bg-gray-50"
        >
          <a
            href={p.url}
            rel="noreferrer"
            target="_blank"
            className="w-full h-full justify-center items-center flex"
          >
            {p.name}
          </a>
        </div>
      );
    })
  ) : (
    <div className="border-b-2 p-2 w-full rounded">
      There is no product dear!
    </div>
  );
};

const Header = ({ products }) => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  const searchHandler = (e) => {
    setSearch(e.target.value);
    const filteredProducts = products.filter((p) => {
      if (e.target.value)
        return p.description
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
    });
    setFiltered(filteredProducts);
  };
  return (
    <header className="md:container p-2 flex items-center justify-between text-sm md:text-lg sm:p-4">
      <div className="flex gap-x-4 items-center">
        <div className="flex gap-1">
          <img className="w-6 h-6" src={pinterest} alt="pinterest" />
          <span className="text-red-600 font-bold">Pinterest</span>
        </div>
        <div className="relative">
          {/* search input */}
          <input
            type="text"
            onChange={searchHandler}
            placeholder="Search for products ..."
            className="hidden border border-gray-500 outline-none px-2 py-1 rounded ml-4 w-[42vw] max-w-[800px] text-base focus:border-2 lg:block"
          />
          {/* search results */}
          <div
            className={`absolute w-full max-h-80 p-4 z-20 rounded bg-white overflow-auto shadow-xl ml-4 flex-col ${
              search ? "flex" : "hidden"
            }`}
          >
            <SearchResults filtered={filtered} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-1 md:w-1/2 ">
        <span className="hidden font-bold p-2 rounded-full cursor-pointer hover:bg-gray-100 sm:block">
          Explore
        </span>
        <span className="font-bold p-2 rounded-full cursor-pointer hover:bg-gray-100">
          Get App
        </span>
        <span className="font-bold p-2 rounded-full cursor-pointer hover:bg-gray-100">
          Login
        </span>
        <span className="font-bold p-3 bg-gray-100 cursor-pointer rounded-full">
          Sign Up
        </span>
      </div>
    </header>
  );
};

export default Header;
