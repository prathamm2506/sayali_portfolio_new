import { ArrowRight } from "lucide-react";
import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.jpeg";

export default function Portfolio() {
  const portfolioItems = [
    { name: "💗💛", id: 1, image: img2, link: "https://www.instagram.com/sayaleee_u_know_/reel/DGQ28YxScNK/" },
    { name: "🌷✨", id: 2, image: img4, link: "https://www.instagram.com/sayaleee_u_know_/p/DIwfqYdSsJ3/" },
    { name: "❤️😍✨", id: 3, image: img3, link: "https://www.instagram.com/sayaleee_u_know_/p/DLdbUnSTFEj/" },
  ];

  return (
    <div className="min-h-screen p-6 sm:p-8 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((person) => (
            <div key={person.id} className="w-full">
              <div className="h-80 sm:h-96 mb-4 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl">{person.name}</h3>
                <a href={person.link} target="_blank" rel="noopener noreferrer">
                  <button className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center text-black bg-[#ffadc1] border-2 border-black rounded-full shadow-md hover:shadow-lg transition hover:-translate-y-1 hover:cursor-pointer">
                    <ArrowRight className="w-5 h-5 text-black" />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <a href="https://www.instagram.com/sayaleee_u_know_/" target="_blank"><button
            className="inline-block px-6 py-3 text-lg font-medium text-black bg-[#ffadc1] border-2 border-black rounded-full shadow-md hover:shadow-lg transition hover:-translate-y-1 hover:cursor-pointer"
          >
            View more on Instagram
          </button></a>
        </div>
      </div>
    </div>
  );
}
