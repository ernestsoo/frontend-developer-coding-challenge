import React, { useEffect, useState } from "react";
import "../App.css";
import GlobalInformation from "../components/GlobalInformation";
import TrendingCoins from "../components/TrendingCoins";

function HomeScreen() {
  return (
    <div className="screen flex">
      <div className="flex-1 bg-grey pr-7">
        <GlobalInformation />
        <div className="mt-7 bg-light h-64 rounded-3xl px-8 py-6">
          <p className="font-bold inline-block">
            Cryptocurrencies by Market Cap
          </p>
          <p className="text-xs text-gray-600 float-right">Full List</p>
        </div>
      </div>
      <div className="pr-7">
        <div className="bg-light rounded-3xl px-8 py-6">
          <p className="font-bold">Trending Coins</p>
          <TrendingCoins />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
