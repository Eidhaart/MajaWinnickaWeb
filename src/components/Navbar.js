import React, { useState } from "react";
import logo from "../images/winnicka.png";
import "./Navbar.css";

function Navbar({ onActiveItemChange }) {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    onActiveItemChange(itemName);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-title">
        <h1>Maja Winnicka</h1>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <button onClick={() => handleItemClick("Home")}>
            <span>Home</span>
          </button>
        </li>
        <li className="navbar-item">
          <button onClick={() => handleItemClick("Workshop")}>
            <span>Portfolio</span>
          </button>
        </li>
        <li className="navbar-item">
          <button onClick={() => handleItemClick("MyArt")}>
            <span>Events</span>
          </button>
        </li>
        <li className="navbar-item">
          <button onClick={() => handleItemClick("About")}>
            <span>About</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
