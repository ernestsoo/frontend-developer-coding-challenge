import React, { useState, useEffect } from "react";
import "../App.css";
import { getAllCoins } from "../api/coingecko";

function Pagination(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(-1);
  const [paginationArr, setPaginationArr] = useState(
    new Array(5).fill("bg-gray-200")
  );
  const [didMount, setDidMount] = useState(false);
  useEffect(() => {
    if (!didMount) {
      getAllCoins().then((data) => {
        console.log(Math.ceil(data.length / 100.0));
        setMaxPage(Math.ceil(data.length / 100.0));
      });
      if (props.current) {
        setPaginationArr((arr) => {
          let newArr = [...arr];
          newArr[props.current - 1] = "pagination-selected";
          return newArr;
        });
      }
      setDidMount(true);
    }
  });
  const buttonMap = paginationArr.map((item, index) => {
    let marginLeft = "";
    if (index > 0) {
      marginLeft = " ml-3";
    }
    if (currentPage + index > maxPage) {
      return undefined;
    }
    return (
      <div
        key={index}
        className={`inline-block cursor-pointer w-12 h-12 pt-3 text-center rounded-full ${paginationArr[index]}${marginLeft}`}
      >
        <p>{currentPage + index}</p>
      </div>
    );
  });
  const nextHandler = () => {
    if (currentPage + 5 <= maxPage) {
      setCurrentPage((current) => current + 5);
    }
  };
  const backHandler = () => {
    if (currentPage - 5 > 0) {
      setCurrentPage((current) => current - 5);
    }
  };
  return (
    <div class="w-full my-5">
      <div className="table mx-auto">
        <button
          className="bg-black rounded-3xl text-white px-3 py-2 mr-20"
          onClick={backHandler}
        >
          Back
        </button>
        {buttonMap}
        <button
          className="bg-black rounded-3xl text-white px-3 py-2 ml-20"
          onClick={nextHandler}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
