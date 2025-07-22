import React from 'react';

const Discover = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full h-full px-4 py-10 sm:px-8 md:px-16 lg:px-20 xl:px-24 flex flex-col items-center justify-center">
        
        {/* Image Section */}
        <div className="w-full max-w-6xl mb-10">
          <img
            src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?cs=srgb&dl=pexels-pixabay-326055.jpg&fm=jpg"
            alt=""
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow"
          />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start w-full max-w-6xl">
          
          {/* Left Column - Title (Centered on Mobile) */}
          <div className="flex justify-center lg:justify-start">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-black leading-tight text-center lg:text-left">
              DISCOVER
              <br />
              MORE
            </h2>
          </div>

          {/* Right Column - Text Content */}
          <div className="space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
            <p>
              At ALEXA Photography isn't just a profession—it's a lifelong passion. From my humble beginnings
              experimenting with my first camera to honing my craft through years of dedication and training, I've always
              believed in the power of imagery to evoke emotion and preserve memories.
            </p>

            <p>
              Every click of the shutter is an opportunity to freeze a moment in time, to capture the essence of a person,
              a place, or an event. Whether it's the tender embrace of a newlywed couple, the candid laughter of a family
              gathering, or the breathtaking beauty of a landscape at dawn, I strive to create images that resonate and
              endure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
