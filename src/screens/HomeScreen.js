import React from "react";
import "../App.css";
import { useHistory } from "react-router-dom";
import GlobalInformation from "../components/GlobalInformation";
import TrendingCoins from "../components/TrendingCoins";
import CryptoTable from "../components/CryptoTable";

function HomeScreen() {
  const history = useHistory();
  return (
    <div data-testid="homeScreen" className="screen flex">
      <div className="flex-1 bg-grey pr-7">
        <GlobalInformation />
        <div className="mt-7 bg-light rounded-3xl px-8 py-6">
          <div>
            <div className="inline-block">
              <p className="font-bold">Top 10 Cryptocurrencies</p>
              <p className="text-gray-600 text-xs">Sorted by Market Cap</p>
            </div>
            <div
              className="bg-black rounded-3xl text-md text-white float-right px-4 py-2 cursor-pointer"
              onClick={() => history.push("/list")}
            >
              View Full List
            </div>
          </div>
          <CryptoTable />
        </div>
      </div>
      <div className="pr-7">
        <div className="trending-coins-container bg-light rounded-3xl px-8 py-6">
          <p className="font-bold">Trending Coins</p>
          <p className="text-gray-600 text-xs">Sorted by Volume</p>
          <TrendingCoins />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
