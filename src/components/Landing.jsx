import React from "react";
import img1 from "../assets/mainimg.webp";
import img2 from "../assets/Sayali.webp";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa6";


const Landing = () => {
  return (
    <div>
      <div
        className="w-full lg:h-screen flex flex-col-reverse lg:flex-row items-center pt-16"
        id="home"
      >
        <div className="flex flex-col w-full lg:w-1/2 items-center">
          <div className="p-2 lg:p-10 lg:mt-8 flex flex-col items-center lg:items-start">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-black mb-1 ml-0 xl:ml-24 leading-tight">
              Hi, I'm
            </h1>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-black mb-2 leading-none ml-0 xl:ml-24 tracking-tight">
              SAYALI
            </h1>
            <p className="text-3xl lg:text-4xl font-bold text-[#ffadc1] ml-0 xl:ml-24 mb-5 text-center lg:text-left">
              Content Creator | Digital Dreamer
            </p>
            <p className="text-2xl lg:text-3xl font-normal text-black mb-10 ml-0 xl:ml-24 leading-tight text-center lg:text-left">
              Chasing dreams for creating my own path 🚀 <br />
              Let the vibe speak louder than words ✨
            </p>
            <button
            type="submit"
            className="px-6 py-3 text-lg font-medium text-black bg-[#ffadc1] border-2 border-black rounded-full shadow-md hover:shadow-lg transition hover:-translate-y-1 ml-0 xl:ml-24 flex items-center justify-center gap-4 mb-10"
          >
            <FaInstagram className="text-3xl"/> Follow me on INSTAGRAM
          </button>
          </div>

          {/* <div> */}
          {/* <img
              src={img2}
              alt="2 images"
              className="ml-0 xl:ml-24 w-96 h-64 xl:w-3/4 xl:h-3/4"
            /> */}

          {/* </div> */}
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
