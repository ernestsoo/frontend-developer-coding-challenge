import React, { useState, useEffect } from "react";
import "../App.css";
import { getCoinsList } from "../api/coingecko";
import UpArrowIcon from "../assets/up-arrow.png";
import DownArrowIcon from "../assets/down-arrow.png";
import { Sparklines, SparklinesLine } from "react-sparklines";
import Colors from "../constants/colors";

function CryptoTable(props) {
  const [didMount, setDidMount] = useState(false);
  const [coinsList, setCoinsList] = useState(undefined);
  useEffect(() => {
    if (!didMount) {
      let page = 1;
      let per_page = 10;
      if (props.per_page && props.page) {
        page = props.page;
        per_page = props.per_page;
      }
      getCoinsList(page, per_page).then((data) => {
        setCoinsList(
          data.map((item, index) => {
            let price_change = undefined;
            if (item.price_change_percentage_24h > 0) {
              price_change = (
                <>
                  <img className="inline-block w-4 -mt-1" src={UpArrowIcon} />
                  <p className="inline-block ml-2 font-light text-green-400">{`${item.price_change_percentage_24h.toFixed(
                    2
                  )}%`}</p>
                </>
              );
            } else {
              price_change = (
                <>
                  <img className="inline-block w-4 -mt-1" src={DownArrowIcon} />
                  <p className="inline-block ml-2 font-light text-red-400">{`${item.price_change_percentage_24h.toFixed(
                    2
                  )}%`}</p>
                </>
              );
            }
            return (
              <div className="grid grid-cols-12 items-center border-b border-gray-200 py-2">
                <div className="col-span-1">
                  <p>{index + 1}</p>
                </div>
                <div className="col-span-3">
                  <img className="inline-block w-4 -mt-1" src={item.image} />
                  <p className="ml-3 inline-block font-light">{item.name}</p>
                </div>
                <div className="col-span-2">
                  <p className="font-light">{`$${item.current_price}`}</p>
                </div>
                <div className="col-span-2">
                  <p className="font-light">{`$${item.high_24h}`}</p>
                </div>
                <div className="col-span-2 pr-12">
                  <p className="font-light">
                    <Sparklines
                      data={item.sparkline_in_7d.price.slice(145, 168)}
                    >
                      <SparklinesLine
                        color={
                          item.price_change_percentage_24h > 0
                            ? Colors.green
                            : Colors.red
                        }
                      />
                    </Sparklines>
                  </p>
                </div>
                <div className="col-span-2">{price_change}</div>
              </div>
            );
          })
        );
      });
      setDidMount(true);
    }
  });
  return (
    <>
      <div className="grid grid-cols-12 border-t border-b border-gray-300 mt-9 py-4">
        <div className="col-span-1">
          <p>#</p>
        </div>
        <div className="col-span-3">
          <p class="font-medium">Coin</p>
        </div>
        <div className="col-span-2">
          <p class="font-medium">Price (USD)</p>
        </div>
        <div className="col-span-2">
          <p class="font-medium">High (24h)</p>
        </div>
        <div className="col-span-2">
          <p class="font-medium">Change (24h)</p>
        </div>
        <div className="col-span-2">
          <p class="font-medium"></p>
        </div>
      </div>
      {coinsList}
    </>
  );
}

export default CryptoTable;
