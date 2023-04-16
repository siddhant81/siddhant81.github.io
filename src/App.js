import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
};

export default App;
