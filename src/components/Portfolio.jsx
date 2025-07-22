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
    <div className="min-h-screen bg-yellow-100 p-6 sm:p-8 flex flex-col items-center">
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
                <h3 className="text-xl sm:text-2xl font-serif italic text-gray-800">
                  {person.name}
                </h3>
                <button className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border-2 border-gray-600 flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <ArrowRight className="w-5 h-5 text-gray-600" />
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
                  <h3 className="text-xl sm:text-2xl font-serif italic text-gray-800">{person.name}</h3>
                  <button className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border-2 border-gray-600 flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <ArrowRight className="w-5 h-5 text-gray-600" />
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
              className="px-10 py-3 sm:px-12 sm:py-4 border-2 border-gray-600 rounded-full text-gray-600 font-medium text-base sm:text-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
                  Loading...
                </div>
              ) : (
                "VIEW MORE"
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
