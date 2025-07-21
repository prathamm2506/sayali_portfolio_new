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

  return (
    <div className="min-h-screen bg-yellow-100 p-8 flex flex-col items-center justify-center">
      <div className="max-w-6xl w-full">
        {/* Portfolio Grid */}
        <div className="flex flex-row justify-between gap-8">
          {/* Elsa Kay */}
          <div className="w-11/12">
            <div className="h-96 mb-4 overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5ee52f7d9edc8a7ee635591a/8df50655-6b68-460e-ad6c-5230001b9d5a/240404+-+063944+-+001.jpg?format=2500w"
                alt="Elsa Kay"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-serif italic text-gray-800">
                Elsa Kay
              </h3>
              <button className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <ArrowRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Jenifer Elsa */}
          <div className="w-11/12">
            <div className="h-96 mb-4 overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5ee52f7d9edc8a7ee635591a/8df50655-6b68-460e-ad6c-5230001b9d5a/240404+-+063944+-+001.jpg?format=2500w"
                alt="Jenifer Elsa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-serif italic text-gray-800">
                Jenifer Elsa
              </h3>
              <button className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <ArrowRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Anglea Jose */}
          <div className="w-11/12">
            <div className="h-96 mb-4 overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.squarespace-cdn.com/content/v1/5ee52f7d9edc8a7ee635591a/8df50655-6b68-460e-ad6c-5230001b9d5a/240404+-+063944+-+001.jpg?format=2500w"
                alt="Anglea Jose"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-serif italic text-gray-800">
                Anglea Jose
              </h3>
              <button className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <ArrowRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Additional Portfolio Items (Lazy Loaded) */}
        {showMore && (
  <div className="flex flex-row justify-between gap-8 mt-12 mb-12 animate-fade-in">
    {additionalPortfolios.map((person) => (
      <div key={person.id} className="w-11/12">
        <div className="h-96 mb-4 overflow-hidden rounded-lg shadow-lg">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5ee52f7d9edc8a7ee635591a/8df50655-6b68-460e-ad6c-5230001b9d5a/240404+-+063944+-+001.jpg?format=2500w"
            alt={person.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-serif italic text-gray-800">{person.name}</h3>
          <button className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center hover:bg-gray-100 transition-colors">
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
              className="px-12 py-4 border-2 border-gray-600 rounded-full text-gray-600 font-medium text-lg hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
