import React, { useState } from "react";
import logo from "../images/winnicka.png";
import "./Navbar.css";
import { FaHome, FaInfo, FaRegCalendar, FaRegImage } from "react-icons/fa";
import { Twirl as Hamburger } from "hamburger-react";

function Navbar({ onActiveItemChange }) {
  const [activeItem, setActiveItem] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const handleItemClick = (itemName, id) => {
    setActiveItem(itemName);
    onActiveItemChange(itemName);
    scrollToComponent(id);
  };

  function scrollToComponent(componentId) {
    const element = document.getElementById(componentId);
    if (element) {
      const yOffset = -100; // Adjust the offset to your needs
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      setModalOpen(false);
    }
  }

  return (
    <div>
      <div className="navbar-container">
        <div className="navbar-title">
          <h1>Maja Winnicka</h1>
        </div>
        <ul className="navbar-list">
          <li className="navbar-item">
            <button onClick={() => handleItemClick("Home", "home")}>
              <span>Home</span>
            </button>
          </li>
          <li className="navbar-item">
            <button onClick={() => handleItemClick("MyArt", "myArt")}>
              <span>Portfolio</span>
            </button>
          </li>
          <li className="navbar-item">
            <button onClick={() => handleItemClick("Events", "events")}>
              <span>Events</span>
            </button>
          </li>
          <li className="navbar-item">
            <button onClick={() => handleItemClick("About", "about")}>
              <span>About</span>
            </button>
          </li>
        </ul>
        <div className="hamburger-icon">
          <button
            onClick={
              !modalOpen
                ? () => {
                    setModalOpen(true);
                  }
                : () => {
                    setModalOpen(false);
                  }
            }
          >
            <Hamburger
              toggled={modalOpen}
              toggle={setModalOpen}
              size={20}
              color="#f8f3e9"
            />
          </button>
        </div>
      </div>

      <div className={modalOpen ? "modal-container active" : "modal-container"}>
        <ul>
          <li>
            <button onClick={() => handleItemClick("Home", "home")}>
              <div className="modal-item">
                <FaHome />
                Home
              </div>
            </button>
          </li>
          <li>
            <button onClick={() => handleItemClick("MyArt", "myArt")}>
              <div className="modal-item">
                <FaRegImage />
                Portfolio
              </div>
            </button>
          </li>
          <li>
            <button onClick={() => handleItemClick("Events", "events")}>
              <div className="modal-item">
                <FaRegCalendar />
                Events
              </div>
            </button>
          </li>
          <li>
            <button onClick={() => handleItemClick("About", "about")}>
              <div className="modal-item">
                <FaInfo />
                About
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
