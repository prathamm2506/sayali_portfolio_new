import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Portfolio() {
  const [showMore, setShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleViewMore = async () => {
    if (showMore) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setShowMore(true);
    setIsLoading(false);
  };

  const additionalPortfolios = [
    { name: "Maria Santos", id: 4 },
    { name: "David Chen", id: 5 },
    { name: "Sofia Rodriguez", id: 6 },
  ];

  const portfolioItems = [
    { name: "Elsa Kay", id: 1 },
    { name: "Jenifer Elsa", id: 2 },
    { name: "Anglea Jose", id: 3 },
  ];

  return (
    <div className="min-h-screen p-6 sm:p-8 flex flex-col items-center pt-16 md:pt-0">
      <div className="max-w-6xl w-full">
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((person) => (
            <div key={person.id} className="w-full">
              <div className="h-80 sm:h-96 mb-4 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/5ee52f7d9edc8a7ee635591a/8df50655-6b68-460e-ad6c-5230001b9d5a/240404+-+063944+-+001.jpg?format=2500w"
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl ">
                  {person.name}
                </h3>
                <button className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center text-black bg-[#ffadc1] border-2 border-black rounded-full shadow-md hover:shadow-lg transition hover:-translate-y-1">
                  <ArrowRight className="w-5 h-5 text-black" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Portfolio Items (Lazy Loaded) */}
        {showMore && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-12 animate-fade-in">
            {additionalPortfolios.map((person) => (
              <div key={person.id} className="w-full">
                <div className="h-80 sm:h-96 mb-4 overflow-hidden rounded-lg shadow-lg">
                  <img
                    src="https://images.squarespace-cdn.com/content/v1/5ee52f7d9edc8a7ee635591a/8df50655-6b68-460e-ad6c-5230001b9d5a/240404+-+063944+-+001.jpg?format=2500w"
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl text-black">{person.name}</h3>
                  <button className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center text-black bg-[#ffadc1] border-2 border-black rounded-full shadow-md hover:shadow-lg transition hover:-translate-y-1">
                  <ArrowRight className="w-5 h-5 text-black" />
                </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View More Button */}
        {!showMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={handleViewMore}
              disabled={isLoading}
              className="inline-block px-6 py-3 text-lg font-medium text-black bg-[#ffadc1] border-2 border-black rounded-full shadow-md hover:shadow-lg transition hover:-translate-y-1"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  Loading...
                </div>
              ) : (
                "View More"
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
