import React from "react";
import "./App.css";
import List from "./components/List";
import Navigation from "./components/Navigation";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="row">
        <div className="col-1 sidebar">
          <SideBar />
        </div>
        <div className="col-8 list">
          <List />
        </div>
      </div>
    </div>
  );
}
export default App;
