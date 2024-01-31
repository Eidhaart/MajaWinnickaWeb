import React from "react";
import presentation from "../images/maja.png";

function Home() {
  return (
    <div className="flex flex-col text-xl text-white bg-forest-bg bg-cover  w-screen h-screen items-center  ">
      <div className="  mt-20 w-2/3 rounded-md max-w-2xl  min-w-[600px]">
        <div className="bg-sage-100 bg-opacity-40 backdrop-blur-lg  flex rounded-md shadow-lg">
          <div className="flex-1 flex justify-center items-center flex-col relative">
            <h1 className=" text-4xl text-black title flex-nowrap font-bold p-3">
              Back to the Roots
            </h1>
            <span className=" font-fira leading-loose text-left text-sm py-3 px-7 text-black">
              Where art is a dialogue between the natural world and the unique
              perspectives of neurodivergent minds. I am Maja Winnicka, Once
              drawn to the fleeting currents of artistic trends, I found my true
              calling in the embrace of nature. My work is an exploration of the
              imperfect beauty of the natural world, interwoven with the complex
              experiences of neurodivergent individuals.
            </span>
            <div className="flex gap-2 mb-5 mt-4 -ml-16">
              <button className="bg-gold px-2  rounded-lg text-white title text-sm ">
                Get in touch
              </button>
              <button className="bg-gold rounded-lg p-2 text-white title text-2xl flex justify-center items-center ">
                <ion-icon name="logo-instagram"></ion-icon>
              </button>
              <button className="bg-gold rounded-lg p-2 text-white title text-2xl flex justify-center items-center">
                <ion-icon name="logo-facebook"></ion-icon>
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img
              className="w-full max-w-xs p-5"
              src={presentation}
              alt="presentation"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
