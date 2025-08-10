import React from 'react';
import about from '../assets/about.jpeg'

const Discover = () => {
  return (
    <div className="w-full bg-white pt-16 pb-12" id="about">
      <div className="w-full h-full px-4 py-10 sm:px-8 md:px-16 lg:px-20 xl:px-24 flex flex-col items-center justify-center">
        
        {/* Image Section */}
        <div className="w-full max-w-6xl mb-10">
          <img
            src={about}
            alt=""
            className="w-full h-64 sm:h-80 md:h-[60vh] object-cover rounded-lg shadow"
          />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start w-full max-w-6xl">
          
          {/* Left Column - Title (Centered on Mobile) */}
          <div className="flex justify-center lg:justify-start">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-black leading-tight text-center lg:text-left mb-4">
              MEET
              <br />
              SAYALI
            </h2>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6 text-gray-800 leading-relaxed text-2xl">
            <p>
              Hi, I’m Sayali — a passionate content creator and digital dreamer. From styling cute outfits to sharing  vibes, I love turning moments into stories through Reels and posts.
            </p>

            <p>
              I believe in creating my own path, one post at a time. Whether it's a fun transition, a trending sound, or just a real smile — I’m here to share it all.
            </p>
            <p>🎀 Let’s make content that connects.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
