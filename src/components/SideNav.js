import React, { useState, useEffect } from "react";
import "../App.css";
import LogoIcon from "../assets/logo.png";
import HomeIcon from "../assets/home.png";
import GlobalIcon from "../assets/global.png";
import SettingsIcon from "../assets/settings.png";
import { ReactComponent as HomeSVG } from "../assets/home.svg";

function SideNav() {
  return (
    <div className="flex items-center w-48 h-screen">
      <div className="side-nav flex flex-column items-center rounded-3xl bg-black w-32 h-full mx-auto">
        <div className="relative mx-auto">
          <div className="bg-white w-16 h-16 pt-3 rounded-full mx-auto clear-right">
            <img class="w-10 mx-auto" src={LogoIcon} />
          </div>
          <div
            className="relative mt-36 w-8 mx-auto cursor-pointer"
            style={{ zIndex: 1 }}
          >
            <HomeSVG fill={"black"} />
          </div>
          <div className="absolute" style={{ zIndex: 0, marginTop: -69 }}>
            <div className="bg-white w-28 h-6">
              <div className="bg-black rounded-br-3xl w-24 h-6"></div>
            </div>
            <div className="bg-white w-28 h-16 rounded-tl-3xl rounded-bl-3xl "></div>
            <div className="bg-white w-28 h-6">
              <div className="bg-black rounded-tr-3xl w-24 h-6"></div>
            </div>
          </div>
          <img className="mt-20 w-7 mx-auto cursor-pointer" src={GlobalIcon} />
          <img
            className="mt-20 w-7 mx-auto cursor-pointer"
            src={SettingsIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default SideNav;
