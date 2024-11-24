import React from "react";
import banner1 from "../public/images/banner-1.jpg";
import banner2 from "../public/images/banner-2.jpg";
import { ImagesSlider } from "./image-slider";
import { FlipWords } from "./flip-words";

const Hero = () => {
  return (
    <section className="h-[calc(100vh-100px)]">
      <ImagesSlider
        images={[banner1, banner2]}
        overlayClassName={"bg-black/70"}
      >
        <div className="relative z-50 flex flex-col items-center justify-center gap-3">
          <h1 className={"py-2 text-center text-lg text-white"}>
            <span className="text-6xl font-extrabold">
              89% of Businesses are <br />
              <span className="decoration-[#099140] decoration-8 underline px-4 pb-2 rounded">
                {" "}
                Unorganised!
              </span>
            </span>
            <div>
              <br /> After helping Business Owners Scale Up their businesses,{" "}
              <br /> I have decoded the major glitches that is keeping you
              stuck!
            </div>
            <div className="text-4xl font-bold">
              <FlipWords
                words={[
                  "Increase your Sales",
                  "Build Funnels easily",
                  "Automate & Track Business",
                ]}
              />
            </div>
          </h1>
        </div>
      </ImagesSlider>
    </section>
  );
};

export default Hero;
