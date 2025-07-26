import React from "react";
import img1 from "../assets/mainimg.webp";
import img2 from "../assets/Sayali.webp";

const Landing = () => {
  return (
    <div>
      <div className="w-full lg:h-screen flex flex-col-reverse lg:flex-row items-center pt-16" id="home">
        <div className="flex flex-col w-full lg:w-1/2 items-center">
          <div className="p-2 lg:p-10 lg:mt-8 relative z-10 flex flex-col items-center lg:items-start">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-black mb-1 ml-0 xl:ml-24 leading-tight">
              Hi I'm
            </h1>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-black mb-2 leading-none ml-0 xl:ml-24 tracking-tight">
              ALEXA
            </h1>
            <p className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-[#ffadc1] font-serif italic ml-12 xl:ml-80 -mt-6 sm:-mt-8 xl:-mt-12">
              Photographer
            </p>
          </div>

          <div>
            <img
              src={img2}
              alt="2 images"
              className="ml-0 xl:ml-24 w-96 h-64 xl:w-3/4 xl:h-3/4"
            />
          </div>
        </div>

        <div className="w-full sm:w-3/4 md:w-1/2 flex items-center justify-center">
          <img
            src={img1}
            alt="main image"
            className="w-4/4 sm:w-4/5 md:w-full lg:w-10/12 xl:w-10/12 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
