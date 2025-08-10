import image2 from '../assets/image2.jpeg'

const ImageSlider = () => {
  const slide = {
    id: 1,
    title: "Weddings",
    description:
      '"Love is in the air and every frame tells a story. From the exchange of vows to the joyous celebration that follows, my wedding portfolio captures the romance, the emotion, and the beauty of your special day."',
    coupleImage:
      "https://images.squarespace-cdn.com/content/v1/5ee52f7d9edc8a7ee635591a/8df50655-6b68-460e-ad6c-5230001b9d5a/240404+-+063944+-+001.jpg?format=2500w",
    ringsImage:
      image2,
  }

  const handleClick = () => {
    console.log("Button clicked")
    // Future logic can go here
  }

  return (
    <div className="p-6 md:p-12 lg:p-16 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Side */}
          <div className="relative flex flex-col items-start">
            <img
              src={slide.coupleImage || "/placeholder.svg"}
              alt="Wedding couple in romantic pose"
              className="w-full h-auto max-w-md rounded-lg object-cover shadow-lg"
            />

            {/* Static Button */}
            <div className="mt-6">
              <button
                onClick={handleClick}
                className="w-14 h-14 flex items-center justify-center text-black bg-[#ffadc1] border-2 border-black rounded-full shadow-md hover:shadow-lg transition hover:-translate-y-1"
              >
                <svg
                  className="w-6 h-6 text-black group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6 mt-10 lg:mt-0">
            <div>
              <h1 className="text-3xl md:text-4xl text-black mb-2">
                {slide.title}
              </h1>
              <div className="w-full h-px bg-gray-800"></div>
            </div>

            <p className="text-gray-800 leading-relaxed text-base md:text-lg">
              {slide.description}
            </p>

            <img
              src={slide.ringsImage || "/placeholder.svg"}
              alt="Wedding rings"
              className="w-full h-80 max-w-md rounded-lg object-cover shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageSlider
