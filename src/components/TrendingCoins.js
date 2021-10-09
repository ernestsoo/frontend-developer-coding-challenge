import React, { useState, useEffect } from "react";
import "../App.css";
import { getTrendingCoins, getCoinMarketInformation } from "../api/coingecko";
import UpArrowIcon from "../assets/up-arrow.png";
import DownArrowIcon from "../assets/down-arrow.png";
function TrendingCoins() {
  const [didMount, setDidMount] = useState(false);
  const [trendingCoinList, setTrendingCoinList] = useState(null);
  useEffect(() => {
    if (!didMount) {
      getTrendingCoins().then((data) => {
        let ids = "";
        for (var i = 0; i < data.coins.length; i++) {
          if (i + 1 === data.coins.length) {
            ids += data.coins[i].item.id.toString();
          } else {
            ids += data.coins[i].item.id.toString() + ",";
          }
        }
        getCoinMarketInformation(ids).then((data) => {
          setTrendingCoinList(
            data.map((item, index) => {
              let price_change = undefined;
              if (item.price_change_24h > 0) {
                price_change = (
                  <div>
                    <p className="ml-0 inline-block font-medium text-green-400">
                      {item.price_change_percentage_24h.toFixed(2)}%
                    </p>
                    <img className="inline-block w-4 ml-2" src={UpArrowIcon} />
                  </div>
                );
              } else {
                let negated_price_change =
                  0.0 - item.price_change_percentage_24h.toFixed(2);

                if (negated_price_change === 0) {
                  negated_price_change = 0.01;
                }
                price_change = (
                  <div>
                    <p className="ml-0 inline-block font-medium text-red-400">
                      {negated_price_change}%
                    </p>
                    <img
                      className="inline-block w-4 ml-2"
                      src={DownArrowIcon}
                    />
                  </div>
                );
              }
              return (
                <div
                  key={index}
                  className="mt-6 h-20 px-2 flex items-center bg-white shadow-md rounded-lg"
                >
                  <img className="w-7 ml-1 inline-block" src={item.image} />
                  <div className="ml-4 inline-block">
                    <p className="text-gray-600 text-xs">
                      #{item.market_cap_rank}
                    </p>
                    <p className="text-sm w-28">{item.name}</p>
                  </div>
                  <div className="block">{price_change}</div>
                </div>
              );
            })
          );
        });
      });
      setDidMount(true);
    }
  });
  return trendingCoinList;
}

export default TrendingCoins;