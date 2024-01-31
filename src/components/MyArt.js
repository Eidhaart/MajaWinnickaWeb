import React from "react";
import raven from "../images/raven.jpg";
import paints from "../images/paints.jpg";

function MyArt() {
  return (
    <div className="my-8 bg-sage-100 bg-opacity-40 rounded-l-full backdrop-blur-lg p-2 flex w-4/6 max-w-2xl min-w-[600px]">
      <div className="flex flex-row items-center">
        {" "}
        {/* Added items-center here */}
        <img className="h-52 rounded-full p-2" src={paints} alt="Paints"></img>
        <span className="font-fira leading-relaxed text-left text-sm py-3 px-7 text-black">
          made with Daniel Smith watercolor paints, which are artist-quality
          watercolors that use natural ingredients. Some of the colors are
          derived from minerals and gemstones, such as lapis lazuli, amethyst,
          and hematite. These paints have a rich texture and a vibrant hue that
          capture the essence of nature. They also reflect light in different
          ways, creating stunning effects on the paper. These paintings are
          truly one-of-a-kind, and they will add a touch of nature into your
          life.{" "}
        </span>
      </div>
    </div>
  );
}

export default MyArt;
