import React from "react";
import "./About.css";
import winnicka from "../images/winnicka.jpg";
import winnicka2 from "../images/winnicka2.jpg";
import paints from "../images/paints.jpg";
import lady from "../images/lady.jpg"; // Importing the new image

function About({ id }) {
  return (
    <div id={id} className="about-page">
      <h1 className="about-title">About me</h1>
      <div className="about-content">
        <div className="about-section about-section--reverse">
          <img className="about-image" src={winnicka} alt="Maja Winnicka" />
          <span className="about-text">
            I'm Maja Winnicka, a Polish artist residing in the vibrant heart of
            Stockholm, Sweden. My artistic journey is deeply rooted in the
            exploration of nature’s essence and the intricate experiences of
            neurodivergent individuals. With a profound connection to the
            natural world, I find my sanctuary amidst the chaos of city life in
            my sunlit studio, where my imagination transforms into vivid
            watercolor paintings. Inspired by the fleeting beauty and the
            imperfections of nature, my work seeks to bridge the gap between the
            visible and the invisible, the spoken and the unspoken world.
          </span>
        </div>

        {/* New section for the split text */}
        <div className="about-section">
          <img
            className="about-image"
            src={lady}
            alt="Artistic representation by Maja Winnicka"
          />
          <span className="about-text">
            Roots play a significant motif in my art, symbolizing the unseen
            connections and the unvoiced emotions that shape our existence.
            Through my paintings, I explore themes of introversion, the
            deep-seated bonds we share with nature, and the pursuit of balance
            amidst life's overwhelming stimuli. Join me on this journey of
            discovery and introspection, where art serves as a window to the
            soul and a mirror to the world's untamed beauty.
          </span>
        </div>

        <div className="about-section about-section--reverse">
          <img className="about-image" src={paints} alt="Paints and brushes" />
          <span className="about-text">
            My workshop is an alchemy of old and new, where ancient techniques
            of watercolor painting meet modern interpretations and themes. It's
            a place where the heritage of the craft is both preserved and pushed
            into new spaces, reflecting deep respect for tradition coupled with
            my drive to explore contemporary narratives. Using the medium of
            Daniel Smith watercolors, known for their rich textures and vibrant
            hues derived from natural minerals and gemstones, each piece I
            create invites viewers into a dialogue with the natural
          </span>
        </div>

        <div className="about-section ">
          <img className="about-image" src={winnicka2} alt="Maja Winnicka" />
          <span className="about-text">
            Choice of medium is integral to the thematic essence of my art. The
            natural origin of the pigments resonates with the exploration of
            themes like the impermanence of beauty, the complexity of human
            emotion, and our intrinsic connection to the natural world. The
            mineral watercolors, with their earthly ties, inviting viewers to
            not only see but feel the essence of the subjects she portrays.
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
