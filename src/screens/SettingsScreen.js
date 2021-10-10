import React from "react";
import "../App.css";
import ErrorIcon from "../assets/error.svg";

function SettingsScreen() {
  return (
    <div className="screen flex">
      <div className="flex flex-col justify-center rounded-3xl bg-light w-full mr-12 settings-screen">
        <img className="mx-auto w-16" src={ErrorIcon} />
        <div className="mx-auto">This tab is just a placeholder page.</div>
      </div>
    </div>
  );
}

export default SettingsScreen;
