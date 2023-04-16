import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const App = () => {
  const [activeTab, setActiveTab] = useState("resume");

  return (
    <div className="app">
      <Header />
      <Main activeTab={activeTab} setActiveTab={setActiveTab} />
      <Footer />
    </div>
  );
};

export default App;
