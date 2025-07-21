import { useState } from "react"

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 3

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const slides = [
    {
      id: 1,
      title: "Weddings",
      description:
        '"Love is in the air and every frame tells a story. From the exchange of vows to the joyous celebration that follows, my wedding portfolio captures the romance, the emotion, and the beauty of your special day."',
      coupleImage: "https://images.squarespace-cdn.com/content/v1/5ee52f7d9edc8a7ee635591a/8df50655-6b68-460e-ad6c-5230001b9d5a/240404+-+063944+-+001.jpg?format=2500w",
      ringsImage: "https://media.greatbigphotographyworld.com/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg",
    },
    {
      id: 2,
      title: "Weddings",
      description:
        '"Every wedding is unique and tells its own beautiful story. Through my lens, I capture the intimate moments, the laughter, the tears of joy, and all the precious memories that make your day unforgettable."',
      coupleImage: "https://images.squarespace-cdn.com/content/v1/5ee52f7d9edc8a7ee635591a/8df50655-6b68-460e-ad6c-5230001b9d5a/240404+-+063944+-+001.jpg?format=2500w",
      ringsImage: "https://media.greatbigphotographyworld.com/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg",
    },
    {
      id: 3,
      title: "Weddings",
      description:
        '"From the first look to the last dance, I document every magical moment of your wedding day. My photography style focuses on natural emotions and candid moments that you will treasure forever."',
      coupleImage: "https://images.squarespace-cdn.com/content/v1/5ee52f7d9edc8a7ee635591a/8df50655-6b68-460e-ad6c-5230001b9d5a/240404+-+063944+-+001.jpg?format=2500w",
      ringsImage: "https://media.greatbigphotographyworld.com/wp-content/uploads/2014/11/Landscape-Photography-steps.jpg",
    },
  ]

  return (
    <div className="bg-yellow-100 p-8 md:p-12 lg:p-16 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="relative overflow-hidden">
          {/* Slides container */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={slide.id} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                  {/* Left side - Main couple photo and arrow button */}
                  <div className="relative">
                    <div className="mb-8">
                      <img
                        src={slide.coupleImage || "/placeholder.svg"}
                        alt="Wedding couple in romantic pose"
                        className="w-full max-w-md h-72 md:h-[450px] rounded-lg object-cover"
                      />
                    </div>

                    {/* Arrow button */}
                    <div className="flex justify-start">
                      <button
                        onClick={nextSlide}
                        className="w-16 h-16 border-2 border-gray-600 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors group"
                      >
                        <svg
                          className="w-6 h-6 text-gray-600 group-hover:translate-x-1 transition-transform"
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

                  {/* Right side - Content */}
                  <div className="space-y-8 mt-14">
                    {/* Weddings title with decorative line */}
                    <div>
                      <h1 className="text-4xl md:text-5xl font-serif italic text-gray-700 mb-2">{slide.title}</h1>
                      <div className="w-full h-px bg-gray-400"></div>
                    </div>

                    {/* Description text */}
                    <div className="space-y-4">
                      <p className="text-gray-600 leading-relaxed text-base md:text-lg">{slide.description}</p>
                    </div>

                    {/* Wedding rings photo - landscape */}
                    <div className="pt-4">
                      <img
                        src={slide.ringsImage || "/placeholder.svg"}
                        alt="Wedding rings"
                        className="w-full max-w-lg h-60 md:h-72 rounded-lg shadow-md object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageSlider
