import React from "react";
import img1 from "../assets/mainimg.webp";
import img2 from "../assets/Sayali.webp";

const Landing = () => {
  return (
    <div>
      <div className="w-full h-full flex flex-row">
        <div className="flex flex-col w-1/2">
          <div className="p-10 mt-8 relative z-10">
            <h1 className="text-5xl font-normal text-black mb-1 ml-25 leading-tight">
              Hi I'm
            </h1>
            <h1 className="text-9xl font-black text-black mb-2 leading-none ml-25 tracking-tight">
              ALEXA
            </h1>
            <p className="text-5xl text-[#ffadc1] font-serif italic ml-80 -mt-10">
              Photographer
            </p>
          </div>

          <div>
            <img src={img2} alt="2 images" className="ml-25"/>
          </div>
        </div>

        <div className="w-1/2 flex flex-row items-center justify-center">
          <img src={img1} alt="main image" className="h-10/12" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
