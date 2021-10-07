import React from "react";
import "../App.css";

function HomeScreen() {
  return (
    <div className="screen grid grid-cols-12">
      <div className="col-span-8 bg-grey pr-12">
        <div className="bg-light h-64 rounded-3xl"></div>
      </div>
      <div className="col-span-4 pr-12">
        <div className="bg-light h-64 rounded-3xl"></div>
      </div>
    </div>
  );
}

export default HomeScreen;
