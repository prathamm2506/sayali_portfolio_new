import image2 from '../assets/image2.jpeg'
import image4 from '../assets/1.webp'

const ImageSlider = () => {
  const slide = {
    id: 1,
    title: "My World on Instagram",
    description:
      'Instagram is more than just a platform — it’s my creative playground. Here, I share everyday inspiration, style, and stories that spark conversation and connection. Whether it’s a behind-the-scenes moment, a new brand collab, or just my daily vibe, I love curating content that’s both aesthetic and relatable.',
    coupleImage:
      image4,
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
              className="w-full h-[500px] max-w-md rounded-lg object-cover shadow-lg"
            />

            {/* Static Button */}
            <div className="mt-6">
              <a href="https://www.instagram.com/sayaleee_u_know_/" target="_blank"><button
                onClick={handleClick}
                className="w-14 h-14 flex items-center justify-center text-black bg-[#ffadc1] border-2 border-black rounded-full shadow-md hover:shadow-lg transition hover:-translate-y-1 hover:cursor-pointer"
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
              </a>
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
