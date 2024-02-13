import React, { useState } from "react";
import "./App.css";
import Render from "./components/Render";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyArt from "./components/MyArt";
import Events from "./components/Events";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  const [activeItem, setActiveItem] = useState("");

  const handleActiveItemChange = (newActiveItem) => {
    setActiveItem(newActiveItem);
    // Additional actions can be performed here
  };

  return (
    <div className="App">
      {/* Header/Navbar might go here */}
      <div className="content-app">
        {/* Your main content goes here */}
        <Navbar onActiveItemChange={handleActiveItemChange} />
        <Home id="home" />
        <MyArt id="myArt" />
        <Events id="events" />
        <About id="about" />
        {/* Ensure any other content is within this container */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
