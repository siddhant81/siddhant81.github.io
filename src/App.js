import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const [activeTab, setActiveTab] = useState("blog");

  return (
    <div className="app">
      <Header />
      <Main activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;
