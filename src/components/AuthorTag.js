import React from "react";
import "../App.css";

function Attribution(props) {
  return (
    <div className="mx-auto">
      <div className="text-center my-2 text-gray-500">
        Icons made by
        <a className="text-gray-900" href={props.link} title={props.author}>
          {` ${props.author}`}
        </a>
        {` from `}
        <a
          className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          href={
            props.sourceLink ? props.sourceLink : "https://www.flaticon.com/"
          }
          title={props.source ? props.source : "www.flaticon.com"}
        >
          {props.source ? props.source : "www.flaticon.com"}
        </a>
      </div>
    </div>
  );
}

export default Attribution;
