import React from "react";
import "../App.css";

function Attribution(props) {
  return (
    <div>
      <div className="text-center my-2 text-gray-500">
        Icons made by
        <a className="text-gray-900" href={props.link} title={props.author}>
          {` ${props.author}`}
        </a>
        {` from `}
        <a
          className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          href="https://www.flaticon.com/"
          title="Flaticon"
        >
          {`www.flaticon.com`}
        </a>
      </div>
    </div>
  );
}

export default Attribution;
