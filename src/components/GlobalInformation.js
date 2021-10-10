import React, { useState, useEffect } from "react";
import "../App.css";
import CryptoIcon from "../assets/crypto.png";
import VolumeIcon from "../assets/volume.png";
import TradingIcon from "../assets/trading.png";
import UpArrowIcon from "../assets/up-arrow.png";
import DownArrowIcon from "../assets/down-arrow.png";
import { getGlobalInformation } from "../api/coingecko";

function GlobalInformation() {
  const [didMount, setDidMount] = useState(false);
  const [globalData, setGlobalData] = useState({
    active: 0,
    market_change: 0,
    ongoing_icos: 0,
  });
  useEffect(() => {
    if (!didMount) {
      getGlobalInformation().then((data) => {
        console.log(data.data);
        setGlobalData((state) => {
          return {
            active: data.data.active_cryptocurrencies,
            market_change:
              data.data.market_cap_change_percentage_24h_usd.toFixed(2),
            ongoing_icos: data.data.ongoing_icos,
          };
        });
      });
      setDidMount(true);
    }
  });
  return (
    <div className="bg-light rounded-3xl px-8 py-6">
      <p className="font-bold">Global Market Information</p>
      <div className="grid grid-cols-12 gap-4 mt-6">
        <div className="flex items-center col-span-12 2xl:col-span-4 h-24 rounded-md bg-white shadow-md">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4">
              <div className="w-16 pt-4 h-16 ml-4 bg-alt-1 rounded-md">
                <img className="w-8 mx-auto" src={CryptoIcon} />
              </div>
            </div>
            <div className="col-span-8 pt-2">
              <p className="text-sm text-gray-600">Total Active Coins</p>
              <p className="text-bold text-2xl">{globalData.active}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center col-span-12 2xl:col-span-4 h-24 rounded-md bg-white shadow-md">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4">
              <div className="w-16 pt-4 h-16 ml-4 bg-alt-2 rounded-md">
                <img className="w-8 mx-auto" src={VolumeIcon} />
              </div>
            </div>
            <div className="col-span-8 pt-2">
              <p className="text-sm text-gray-600">Ongoing ICOs</p>
              <p className="text-bold text-2xl">{globalData.ongoing_icos}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center col-span-12 2xl:col-span-4 h-24 rounded-md bg-white shadow-md">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4">
              <div className="w-16 pt-4 h-16 ml-4 bg-alt-3 rounded-md">
                <img className="w-8 mx-auto" src={TradingIcon} />
              </div>
            </div>
            <div className="col-span-8 pt-2">
              <p className="text-sm text-gray-600">24hr Market Cap Change</p>
              <div>
                <p className="inline-block text-bold text-2xl">
                  {globalData.market_change}%
                </p>
                {globalData.market_change > 0 ? (
                  <img
                    className="inline-block w-4 ml-2 -mt-2"
                    src={UpArrowIcon}
                  />
                ) : (
                  <img
                    className="inline-block w-4 ml-2 -mt-2"
                    src={DownArrowIcon}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlobalInformation;
