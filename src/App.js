import React, { useState, useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyArt from "./components/MyArt";
import Events from "./components/Events";
import About from "./components/About";
import Footer from "./components/Footer";
import forest from "./images/forestnew.jpg";

function App() {
  const [activeItem, setActiveItem] = useState("");

  const handleActiveItemChange = (newActiveItem) => {
    setActiveItem(newActiveItem);
    // Additional actions can be performed here
  };

  useEffect(() => {
    // This function runs after the component mounts
    window.scrollTo(0, 1);
  }, []); // The empty array means this effect runs only once after the initial render

  return (
    <div className="App">
      <div className="content-app">
        <Navbar onActiveItemChange={handleActiveItemChange} />
        <Home id="home" />
        <MyArt id="myArt" />
        <Events id="events" />
        <About id="about" />
      </div>
    </div>
  );
}

export default App;
