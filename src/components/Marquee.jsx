import React from 'react'

const Marquee = () => {
  return (
    <div className="w-full py-12 sm:py-16 overflow-hidden pt-24 md:pt-20" id="portfolio">
      <div className="w-full">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight">
            PORTFOLIO GALLERIES
          </h1>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden fontme2">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className={`flex items-center space-x-4 sm:space-x-6 md:space-x-8 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black ${
                  i === 1 ? 'ml-8' : ''
                }`}
              >
                {Array.from({ length: 8 }).map((_, index) => (
                  <React.Fragment key={index}>
                    <span
                      className="text-transparent"
                      style={{ WebkitTextStroke: '2px #000' }}
                    >
                      SAYALI
                    </span>
                    <span className="text-[#ffadc1]">•</span>
                    <span className="text-[#ffadc1]">SAYALI</span>
                    <span className="text-[#ffadc1]">•</span>
                  </React.Fragment>
                ))}
              </div>
            ))}
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
  )
}

export default Marquee
