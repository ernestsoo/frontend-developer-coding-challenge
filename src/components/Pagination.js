import React, { useState, useEffect } from "react";
import "../App.css";
import { getAllCoins } from "../api/coingecko";

function Pagination(props) {
  const [maxPage, setMaxPage] = useState(-1);
  const [paginationArr, setPaginationArr] = useState(
    new Array(5).fill("bg-gray-200")
  );
  const [didMount, setDidMount] = useState(false);
  useEffect(() => {
    if (!didMount) {
      getAllCoins().then((data) => {
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
  useEffect(() => {
    if (didMount) {
      setPaginationArr((arr) => {
        let newArr = [...arr].fill("bg-gray-200");
        newArr[props.paginationIndex] = "pagination-selected";
        return newArr;
      });
    }
  }, [props.paginationIndex]);
  const buttonMap = paginationArr.map((item, index) => {
    let marginLeft = "";
    if (index > 0) {
      marginLeft = " ml-3";
    }
    if (props.paginationPointer + index > maxPage) {
      return undefined;
    }
    return (
      <div
        key={index}
        className={`inline-block cursor-pointer w-12 h-12 pt-3 text-center rounded-full ${paginationArr[index]}${marginLeft}`}
        onClick={() => {
          props.setPage(props.paginationPointer + index);
          setPaginationArr((arr) => {
            let newArr = [...arr].fill("bg-gray-200");
            newArr[index] = "pagination-selected";
            return newArr;
          });
          props.setPaginationIndex(index);
        }}
      >
        <p>{props.paginationPointer + index}</p>
      </div>
    );
  });
  const nextHandler = () => {
    if (props.paginationPointer + 5 <= maxPage) {
      props.setPage(props.paginationPointer + 5);
      props.setPaginationIndex(0);
      props.setPaginationPointer((current) => current + 5);
      setPaginationArr((arr) => {
        let newArr = [...arr].fill("bg-gray-200");
        newArr[0] = "pagination-selected";
        return newArr;
      });
    }
  };
  const backHandler = () => {
    if (props.paginationPointer - 5 > 0) {
      props.setPaginationIndex(0);
      props.setPage(props.paginationPointer - 5);
      props.setPaginationPointer((current) => current - 5);
      setPaginationArr((arr) => {
        let newArr = [...arr].fill("bg-gray-200");
        newArr[0] = "pagination-selected";
        return newArr;
      });
    }
  };
  return (
    <div class="w-full my-6">
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
