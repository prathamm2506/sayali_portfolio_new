import React from 'react'

const Marquee = () => {
  return (
    <div>
         <div className="w-full py-16">
      <div className="w-full mx-auto">
        {/* Portfolio Galleries Title */}
        <div className="text-center mb-12">
          <h1 className="text-6xl lg:text-7xl font-black text-black tracking-tight">PORTFOLIO GALLERIES</h1>
        </div>

        {/* Marquee Section */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            <div className="flex items-center space-x-8 text-8xl font-black">
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #333" }}>
                ALEXA
              </span>
              <span className="text-orange-500">•</span>
              <span className="text-orange-500">ALEXA</span>
              <span className="text-orange-500">•</span>
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #333" }}>
                ALEXA
              </span>
              <span className="text-orange-500">•</span>
              <span className="text-orange-500">ALEXA</span>
              <span className="text-orange-500">•</span>
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #333" }}>
                ALEXA
              </span>
              <span className="text-orange-500">•</span>
              <span className="text-orange-500">ALEXA</span>
              <span className="text-orange-500">•</span>
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #333" }}>
                ALEXA
              </span>
              <span className="text-orange-500">•</span>
              <span className="text-orange-500">ALEXA</span>
              <span className="text-orange-500">•</span>
            </div>

            {/* Duplicate for seamless loop */}
            <div className="flex items-center space-x-8 text-8xl font-black ml-8">
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #333" }}>
                ALEXA
              </span>
              <span className="text-orange-500">•</span>
              <span className="text-orange-500">ALEXA</span>
              <span className="text-orange-500">•</span>
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #333" }}>
                ALEXA
              </span>
              <span className="text-orange-500">•</span>
              <span className="text-orange-500">ALEXA</span>
              <span className="text-orange-500">•</span>
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #333" }}>
                ALEXA
              </span>
              <span className="text-orange-500">•</span>
              <span className="text-orange-500">ALEXA</span>
              <span className="text-orange-500">•</span>
              <span className="text-transparent" style={{ WebkitTextStroke: "2px #333" }}>
                ALEXA
              </span>
              <span className="text-orange-500">•</span>
              <span className="text-orange-500">ALEXA</span>
              <span className="text-orange-500">•</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
    </div>
  )
}

export default Marquee