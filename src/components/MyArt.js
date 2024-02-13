import React from "react";
import raven from "../images/raven.jpg";
import paints from "../images/paints.jpg";
import "./MyArt.css"; // Import the new CSS file
import ravens from "../images/ravens.png";
import listen from "../images/listen.jpg";
import leshen from "../images/leshen.jpg";
import heart from "../images/heart.jpg";
import { FaEtsy } from "react-icons/fa";

function MyArt({ id }) {
  return (
    <div id={id}>
      <div className="my-art-container">
        <h1> Popular Work </h1>
        <div className="work-column">
          <div className="work-card">
            <img src={listen}></img>
            <h2>Listening in</h2>
            <span>
              A state of calm, desired silence and solitude, allowing one to
              regain balance and gather strength before diving again into the
              omnipresent chaos.
            </span>
          </div>
          <div className="work-card">
            <img src={ravens}></img>
            <h2>Ravens</h2>
            <span>
              The ravens symbolize the connection between the natural and the
              spiritual realms, as well as the wisdom and mystery of nature. The
              roots form an unseen world in nature and represent my
              introversion.
            </span>
          </div>

          <div className="work-card-additional">
            <img src={heart}></img>
            <h2>Heart of the forest</h2>
            <span>
              Focusing on maintaining a state of balance and avoiding sensory
              overstimulation, wading waist-deep in a swamp of stimuli.
            </span>
          </div>
          <div className="work-card">
            <img src={leshen}></img>
            <h2>Leshen</h2>
            <span>
              His body, a mysterious intertwining of bark and foliage, rises
              from the ground, one with nature and its immortal cycles. Leshen's
              eyes, glowing like emeralds, reflect infinite wisdom and a deep
              understanding of nature's mystical paths.
            </span>
          </div>
        </div>
      </div>
      <div className="social-box">
        <span>You can see more of my paintings in my Etsy shop</span>
        <a
          href="https://inmyforestshop.etsy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEtsy />
        </a>
      </div>
    </div>
  );
}

export default MyArt;
