import React from "react";
import Home from "./Home";
import About from "./About";
import Workshop from "./Workshop";
import MyArt from "./MyArt";

function Render({ activeComponent }) {
  const renderComponent = (activeComponent) => {
    switch (activeComponent) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Workshop":
        return <Workshop />;
      case "MyArt":
        return <MyArt />;
      default:
        return <Home />;
    }
  };

  return <div className="">{renderComponent(activeComponent)}</div>;
}

export default Render;
