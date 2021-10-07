import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SideNav from "./components/SideNav";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Router>
      <div className="App flex flex-row">
        <SideNav />
        <div className="w-full">
          <Switch>
            <Route path="/global">
              <div>Global</div>
            </Route>
            <Route path="/trending">
              <div>Trending</div>
            </Route>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
