import React from "react";
import presentation from "../images/maja.png";
import MyArt from "./MyArt";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="columns">
        <div className="center-column">
          <h1 className="main-title">Back to the Roots</h1>

          <span className="intro-text">
            Where art is a dialogue between the natural world and the unique
            perspectives of neurodivergent minds. I am Maja Winnicka, Once drawn
            to the fleeting currents of artistic trends, I found my true calling
            in the embrace of nature. My work is an exploration of the imperfect
            beauty of the natural world, interwoven with the complex experiences
            of neurodivergent individuals.
          </span>
          <div className="button-group">
            <button className="contact-button">Get in touch</button>
            <button className="social-button">
              <ion-icon name="logo-instagram"></ion-icon>
            </button>
            <button className="social-button">
              <ion-icon name="logo-facebook"></ion-icon>
            </button>
          </div>
        </div>

        <div className="image-column">
          <img
            className="presentation-image"
            src={presentation}
            alt="presentation"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
