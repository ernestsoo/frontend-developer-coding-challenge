import React, { useState, useEffect } from "react";
import "../App.css";
import CryptoTable from "../components/CryptoTable";
import Pagination from "../components/Pagination";
import { getAllCoins } from "../api/coingecko";

function CryptoListScreen() {
  const [page, setPage] = useState(1);
  const [paginationPointer, setPaginationPointer] = useState(1);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const [didMount, setDidMount] = useState(false);
  const [allCoins, setAllCoins] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [searchedIds, setSearchedIds] = useState();
  useEffect(() => {
    if (!didMount) {
      getAllCoins().then((data) => {
        setAllCoins(data);
      });
      setDidMount(true);
    }
  });
  const searchHandler = () => {
    let coinsArr = [...allCoins];
    coinsArr = coinsArr.filter((item) => {
      if (
        item.name
          .toString()
          .toLowerCase()
          .indexOf(searchKey.toString().toLowerCase()) > -1
      ) {
        return true;
      }
      return false;
    });
    console.log(coinsArr);
    let searchedIdsString = "";
    coinsArr.map((item, index) => {
      if (index + 1 == coinsArr.length) {
        searchedIdsString += item.id;
      } else {
        searchedIdsString += `${item.id},`;
      }
    });
    setSearchedIds(searchedIdsString);
  };
  return (
    <div className="screen">
      <div className="mb-5">
        <input
          className="bg-light px-5 py-2 rounded-3xl w-96 placeholder-gray-500"
          placeholder="By name or symbol"
          type="text"
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
        />
        <button
          className="text-white ml-3 bg-black py-2 px-5 rounded-3xl"
          onClick={searchHandler}
        >
          Search
        </button>
      </div>
      <div className=" bg-light rounded-3xl px-8 py-6 mr-8">
        <p className="font-bold">Cryptocurrencies List</p>
        <p className="text-gray-600 text-xs">Sorted by Market Cap</p>
        <Pagination
          current={page}
          setPage={setPage}
          paginationIndex={paginationIndex}
          setPaginationIndex={setPaginationIndex}
          paginationPointer={paginationPointer}
          setPaginationPointer={setPaginationPointer}
          maxCoins={allCoins.length}
        />
        <CryptoTable page={page} per_page={100} searchedIds={searchedIds} />
        <Pagination
          current={page}
          setPage={setPage}
          paginationIndex={paginationIndex}
          setPaginationIndex={setPaginationIndex}
          paginationPointer={paginationPointer}
          setPaginationPointer={setPaginationPointer}
          maxCoins={allCoins.length}
        />
      </div>
    </div>
  );
}

export default CryptoListScreen;
