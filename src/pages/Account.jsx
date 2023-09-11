import React from "react";
import Favourite from "../components/Favourite";
import Watchlist from "../components/Watchlist";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[400px] object-cover"
          src="/images/netflix-bg.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-full"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <Favourite />
      <Watchlist />
    </>
  );
};

export default Account;
