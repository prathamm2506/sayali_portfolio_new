import React from 'react'

const Discover = () => {
  return (
    <div>
        <div className='w-full h-full p-20 flex flex-col items-center justify-center bg-white'>
            <div className='w-5/6 mb-10'>
                <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?cs=srgb&dl=pexels-pixabay-326055.jpg&fm=jpg" alt="" className='w-full h-96 object-cover'/>
            </div>

            {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start w-5/6">
        {/* Left Column - Large Title */}
        <div>
          <h2 className="text-6xl lg:text-7xl font-black text-black leading-tight">
            DISCOVER
            <br />
            MORE
          </h2>
        </div>

        {/* Right Column - Text Content */}
        <div className="space-y-6">
          <p className="text-gray-600 text-base leading-relaxed">
            At ALEXA Photography isn't just a profession—it's a lifelong passion. From my humble beginnings
            experimenting with my first camera to honing my craft through years of dedication and training, I've always
            believed in the power of imagery to evoke emotion and preserve memories.
          </p>

          <p className="text-gray-600 text-base leading-relaxed">
            Every click of the shutter is an opportunity to freeze a moment in time, to capture the essence of a person,
            a place, or an event. Whether it's the tender embrace of a newlywed couple, the candid laughter of a family
            gathering, or the breathtaking beauty of a landscape at dawn, I strive to create images that resonate and
            endure.
          </p>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Discover