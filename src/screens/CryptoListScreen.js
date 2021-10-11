import React, { useState, useEffect } from "react";
import "../App.css";
import { getAllCoins } from "../api/coingecko";
import CryptoTable from "../components/CryptoTable";
import Pagination from "../components/Pagination";

function CryptoListScreen() {
  const [isSearching, setIsSearching] = useState(false);
  const [page, setPage] = useState(1);
  const [paginationPointer, setPaginationPointer] = useState(1);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const [didMount, setDidMount] = useState(false);
  const [allCoins, setAllCoins] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [searchedIds, setSearchedIds] = useState();
  const [requestCounter, setRequestCounter] = useState(0);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (!didMount) {
      getAllCoins()
        .then((data) => {
          setAllCoins(data);
        })
        .catch((error) => {
          setIsError(true);
        });
      setDidMount(true);
    }
  });
  const showFullList = () => {
    setIsSearching(false);
    setPage(1);
    setRequestCounter((state) => state + 1);
  };
  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      searchHandler();
    }
  };
  const searchHandler = () => {
    setIsSearching(true);
    setPage(1);
    let coinsArr = [...allCoins];
    coinsArr = coinsArr.filter((item) => {
      let found = false;
      if (
        item.name
          .toString()
          .toLowerCase()
          .indexOf(searchKey.toString().toLowerCase()) > -1
      ) {
        found = true;
      }
      if (
        item.symbol
          .toString()
          .toLowerCase()
          .indexOf(searchKey.toString().toLowerCase()) > -1
      ) {
        found = true;
      }
      return found;
    });
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
  let pagination = undefined;
  let searchResults = undefined;
  if (!isSearching) {
    pagination = (
      <Pagination
        current={page}
        setPage={setPage}
        paginationIndex={paginationIndex}
        setPaginationIndex={setPaginationIndex}
        paginationPointer={paginationPointer}
        setPaginationPointer={setPaginationPointer}
        maxCoins={allCoins.length}
      />
    );
  } else {
    const searchedIdsLength = searchedIds.split(",").length;
    searchResults = (
      <div className="text-center py-8">
        <p className="font-medium text-lg">
          {searchedIds.length == 0 ? 0 : searchedIdsLength} Results Found
        </p>
        <button
          className="mt-3 bg-black text-white px-5 py-2 rounded-3xl"
          onClick={showFullList}
        >
          Show Full List
        </button>
      </div>
    );
  }
  return (
    <div data-testid="cryptoListScreen" className="screen">
      <div className="mb-5">
        <input
          className="bg-light px-5 py-2 rounded-3xl w-96 placeholder-gray-500"
          placeholder="By name or symbol"
          type="text"
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
          onKeyDown={keyDownHandler}
        />
        <button
          className="text-white ml-3 bg-black py-2 px-5 rounded-3xl"
          onClick={() => {
            if (searchKey.length > 1) {
              searchHandler();
            }
          }}
        >
          Search
        </button>
      </div>
      <div className=" bg-light rounded-3xl px-8 py-6 mr-8">
        <p className="font-bold">Cryptocurrencies List</p>
        <p className="text-gray-600 text-xs">Sorted by Market Cap</p>
        {searchResults}
        {pagination}
        <CryptoTable
          page={page}
          per_page={100}
          searchedIds={searchedIds}
          requestCounter={requestCounter}
          isError={isError}
        />
        {pagination}
      </div>
    </div>
  );
}

export default CryptoListScreen;
