import React from "react";
import "../App.css";
import GlobalInformation from "../components/GlobalInformation";
import TrendingCoins from "../components/TrendingCoins";
import CryptoTable from "../components/CryptoTable";

function HomeScreen() {
  return (
    <div className="screen flex">
      <div className="flex-1 bg-grey pr-7">
        <GlobalInformation />
        <div className="mt-7 bg-light rounded-3xl px-8 py-6">
          <div>
            <div className="inline-block">
              <p className="font-bold">Top 10 Cryptocurrencies</p>
              <p className="text-gray-600 text-xs">Sorted by Market Cap</p>
            </div>
            <p className="text-md text-gray-600 float-right">View Full List</p>
          </div>
          <CryptoTable />
        </div>
      </div>
      <div className="pr-7">
        <div className="bg-light rounded-3xl px-8 py-6">
          <p className="font-bold">Trending Coins</p>
          <p className="text-gray-600 text-xs">Sorted by Market Cap Ranking</p>
          <TrendingCoins />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
