import React from "react";
import "../App.css";
import ErrorIcon from "../assets/error.svg";
import ViewIcon from "../assets/view.png";

function SettingsScreen() {
  return (
    <div data-testid="settingsScreen" className="screen flex">
      <div className="flex flex-col justify-center rounded-3xl bg-light w-full mr-12 settings-screen">
        <img className="mx-auto w-16" src={ViewIcon} />
        <div className="mt-6 text-gray-600 mx-auto">
          This tab is just a placeholder.
        </div>
        <div className="text-gray-600 mx-auto">Nothing to see here.</div>
      </div>
    </div>
  );
}

export default SettingsScreen;
