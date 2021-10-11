import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SideNav from "./components/SideNav";
import HomeScreen from "./screens/HomeScreen";
import CryptoListScreen from "./screens/CryptoListScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ErrorIcon from "./assets/error.png";
import Attribution from "./components/Attribution";
function App() {
  return (
    <Router data-testid="app">
      <div className="flex flex-col justify-center xl:hidden h-screen w-screen text-center">
        <img className="w-28 mx-auto mb-8" src={ErrorIcon} />
        <p className="text-gray-600">
          This website has not been optimized for mobile/tablet view.
        </p>
        <p className="text-gray-600">
          Please view it in a larger screen in the meantime :)
        </p>
      </div>
      <div className="App hidden xl:flex flex-row">
        <SideNav />
        <div className="w-full ml-48">
          <Switch>
            <Route path="/settings" component={SettingsScreen} />
            <Route path="/list" component={CryptoListScreen} />
            <Route path="/" component={HomeScreen} />
          </Switch>
        </div>
      </div>
      <Attribution />
    </Router>
  );
}

export default App;
