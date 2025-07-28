import { ArrowRight } from "lucide-react";
import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";


export default function Portfolio() {
  const portfolioItems = [
  { name: "Elsa Kay", id: 1, image: img1 },
  { name: "Jenifer Elsa", id: 2, image: img2 },
  { name: "Anglea Jose", id: 3, image: img3 },
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
                <button className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center text-black bg-[#ffadc1] border-2 border-black rounded-full shadow-md hover:shadow-lg transition hover:-translate-y-1">
                  <ArrowRight className="w-5 h-5 text-black" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12">
          <button
            className="inline-block px-6 py-3 text-lg font-medium text-black bg-[#ffadc1] border-2 border-black rounded-full shadow-md hover:shadow-lg transition hover:-translate-y-1"
          >
            View more on Instagram
          </button>
        </div>
      </div>
    </div>
  );
}
