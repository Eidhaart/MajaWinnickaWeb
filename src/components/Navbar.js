import React, { useState } from "react";
import logo from "../images/winnicka.png";

function Navbar({ onActiveItemChange }) {
  const [activeItem, setActiveItem] = useState("");

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
    onActiveItemChange(itemName);
  };
  return (
    <div className="fixed  w-screen p-5 pt-0 text-sage-600 font-fira   text-lg z-50">
      <ul className="flex  flex-row  items-center justify-center gap-10">
        <li className="py-2 opacity-75">
          <button onClick={() => handleItemClick("Home")}>
            <span>Home</span>
          </button>
        </li>
        <li className="py-2 opacity-75">
          <button onClick={() => handleItemClick("Workshop")}>
            <span>Workshop</span>
          </button>
        </li>

        <li>
          <h1 className=" title text-black font-bold">Maja Winnicka</h1>
        </li>
        <li className="py-2 opacity-75">
          <button onClick={() => handleItemClick("MyArt")}>
            <span>My Art</span>
          </button>
        </li>
        <li className="py-2 opacity-75">
          <button onClick={() => handleItemClick("About")}>
            <span>About</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
