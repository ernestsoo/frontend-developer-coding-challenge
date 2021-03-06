import React, { useState, useEffect } from "react";
import "../App.css";
import { useHistory, useLocation } from "react-router-dom";
import LogoIcon from "../assets/logo.png";
import { ReactComponent as HomeSVG } from "../assets/home.svg";
import { ReactComponent as ListSVG } from "../assets/list.svg";
import { ReactComponent as SettingsSVG } from "../assets/settings.svg";

function SideNav() {
  let history = useHistory();
  const location = useLocation();
  const [currentState, setCurrentState] = useState(1);
  useEffect(() => {
    if (location.pathname == "/") {
      setCurrentState(1);
    } else if (location.pathname == "/list") {
      setCurrentState(2);
    } else if (location.pathname == "/settings") {
      setCurrentState(3);
    }
  }, [location]);
  return (
    <div
      data-testid="sideNav"
      className="fixed flex items-center w-48 h-screen"
    >
      <div className="side-nav flex flex-column items-center rounded-3xl bg-black w-32 h-full mx-auto">
        <div className="relative mx-auto">
          <div
            className="bg-white w-16 h-16 pt-3 rounded-full mx-auto clear-right cursor-pointer"
            onClick={() => history.push("/")}
          >
            <img className="w-10 mx-auto" src={LogoIcon} />
          </div>
          <div
            className="relative mt-36 w-8 mx-auto cursor-pointer to-front"
            onClick={() => {
              setCurrentState(1);
              history.push("/");
            }}
          >
            <HomeSVG fill={currentState == 1 ? "black" : "white"} />
          </div>
          <div
            className={`absolute transition-all duration-700 nav-position-${currentState}`}
          >
            <div className="bg-white w-28 h-6">
              <div className="bg-black rounded-br-3xl w-24 h-6"></div>
            </div>
            <div className="bg-white w-28 h-16 rounded-tl-3xl rounded-bl-3xl "></div>
            <div className="bg-white w-28 h-6">
              <div className="bg-black rounded-tr-3xl w-24 h-6"></div>
            </div>
          </div>
          <div
            className="relative mt-20 w-8 mx-auto cursor-pointer to-front"
            onClick={() => {
              setCurrentState(2);
              history.push("/list");
            }}
          >
            <ListSVG fill={currentState == 2 ? "black" : "white"} />
          </div>
          <div
            className="relative mt-20 w-8 mx-auto cursor-pointer to-front"
            onClick={() => {
              setCurrentState(3);
              history.push("/settings");
            }}
          >
            <SettingsSVG stroke={currentState == 3 ? "black" : "white"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
