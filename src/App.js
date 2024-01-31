import React, { useState } from "react";
import "./App.css";
import Render from "./components/Render";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyArt from "./components/MyArt";

function App() {
  const [activeItem, setActiveItem] = useState("");

  const handleActiveItemChange = (newActiveItem) => {
    setActiveItem(newActiveItem);
    // Additional actions can be performed here
  };

  return (
    <div className="App ">
      <div className="flex flex-col">
        <Navbar onActiveItemChange={handleActiveItemChange} />
        <Home />
      </div>
    </div>
  );
}

export default App;
