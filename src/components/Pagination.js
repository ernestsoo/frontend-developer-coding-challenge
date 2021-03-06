import React, { useState, useEffect } from "react";
import "../App.css";

function Pagination(props) {
  const [maxPage, setMaxPage] = useState(-1);
  const [paginationArr, setPaginationArr] = useState(
    new Array(5).fill("bg-gray-200")
  );
  const [didMount, setDidMount] = useState(false);
  useEffect(() => {
    if (!didMount) {
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
    setMaxPage(Math.ceil(props.maxCoins / 100.0));
  }, [props.maxCoins]);
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
  const startHandler = () => {
    props.setPage(1);
    props.setPaginationIndex(0);
    props.setPaginationPointer(1);
  };
  const endHandler = () => {
    props.setPage(maxPage);
    props.setPaginationIndex((maxPage % 5) - 1);
    props.setPaginationPointer(parseInt(maxPage / 5) * 5 + 1);
  };
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
    <div className="w-full my-6">
      <div className="table mx-auto">
        <button
          className="bg-black rounded-3xl text-white px-3 py-2 mr-4"
          onClick={startHandler}
        >
          Start
        </button>
        <button
          className="bg-black rounded-3xl text-white px-3 py-2 mr-24"
          onClick={backHandler}
        >
          Back
        </button>
        {buttonMap}
        <button
          className="bg-black rounded-3xl text-white px-3 py-2 ml-24"
          onClick={nextHandler}
        >
          Next
        </button>
        <button
          className="bg-black rounded-3xl text-white px-3 py-2 ml-4"
          onClick={endHandler}
        >
          End
        </button>
      </div>
    </div>
  );
}

export default Pagination;
