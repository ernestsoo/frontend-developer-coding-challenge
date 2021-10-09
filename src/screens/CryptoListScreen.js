import React, { useState } from "react";
import "../App.css";
import CryptoTable from "../components/CryptoTable";
import Pagination from "../components/Pagination";

function CryptoListScreen() {
  const [page, setPage] = useState(1);
  return (
    <div className="screen">
      <div className="mb-5">
        <input
          className="bg-light px-5 py-2 rounded-3xl w-96 placeholder-gray-500"
          placeholder="By name or symbol"
          type="text"
        />
        <button className="text-white ml-3 bg-black py-2 px-5 rounded-3xl">
          Search
        </button>
      </div>
      <div className=" bg-light rounded-3xl px-8 py-6 mr-8">
        <p className="font-bold">Cryptocurrencies List</p>
        <p className="text-gray-600 text-xs">Sorted by Market Cap</p>
        <Pagination current={page} />
        <CryptoTable page={page} per_page={100} />
        <Pagination current={page} />
      </div>
    </div>
  );
}

export default CryptoListScreen;
