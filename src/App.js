import React, { useState } from "react";
import "./App.css";
import Render from "./components/Render";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyArt from "./components/MyArt";
import Events from "./components/Events";

function App() {
  const [activeItem, setActiveItem] = useState("");

  const handleActiveItemChange = (newActiveItem) => {
    setActiveItem(newActiveItem);
    // Additional actions can be performed here
  };

  return (
    <div className=" flex flex-col text-xl text-white w-screen h-screen items-center App">
      <div className=" content-app">
        <Navbar
          onActiveItemChange={handleActiveItemChange}
          className="fixed "
        />
        <Home />
        <MyArt />
        <Events />
        <div className="bg-forest-fixed"></div>
      </div>
    </div>
  );
}

export default App;
