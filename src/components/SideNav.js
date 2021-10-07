import React, { useState, useEffect } from "react";
import "../App.css";
import LogoIcon from "../assets/logo.png";
import HomeIcon from "../assets/home.png";
import GlobalIcon from "../assets/global.png";
import SettingsIcon from "../assets/settings.png";

function SideNav() {
  return (
    <div className="flex items-center w-64 h-screen">
      <div className="side-nav flex flex-column items-center rounded-3xl bg-black w-36 h-full mx-auto">
        <div className="mx-auto">
          <div className=" bg-white w-20 h-20 pt-4 rounded-full mx-auto clear-right">
            <img class="w-12 mx-auto" src={LogoIcon} />
          </div>
          <img className="mt-36 w-8 mx-auto cursor-pointer" src={HomeIcon} />
          <img className="mt-20 w-8 mx-auto cursor-pointer" src={GlobalIcon} />
          <img
            className="mt-20 w-8 mx-auto cursor-pointer"
            src={SettingsIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default SideNav;
