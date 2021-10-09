import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SideNav from "./components/SideNav";
import HomeScreen from "./screens/HomeScreen";
import CryptoListScreen from "./screens/CryptoListScreen";

function App() {
  return (
    <Router>
      <div className="App flex flex-row">
        <SideNav />
        <div className="w-full ml-48">
          <Switch>
            <Route path="/global">
              <div>Global</div>
            </Route>
            <Route path="/list" component={CryptoListScreen} />
            <Route path="/" component={HomeScreen} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
