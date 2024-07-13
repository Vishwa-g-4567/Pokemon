import React from "react";

const Header = ({ search, handleSearch }) => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-lg">
      <div className="container sm:mx-auto px-5 flex justify-between items-center">
        <h1 className="text-lg sm:text-3xl font-bold">Pokemon Gallery</h1>
        <input
          type="text"
          placeholder="Search Pokemon..."
          value={search}
          onChange={handleSearch}
          className="p-2 rounded-lg border-none text-black"
        />
      </div>
    </header>
  );
};

export default Header;
