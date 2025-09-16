import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PlantCard from "./PlantCard";
import plantsData from "@/data/plantsData.json";

const FeaturedPlants = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [plantsPerSlide, setPlantsPerSlide] = useState(3);

  // Responsive slides
  useEffect(() => {
    const updatePlantsPerSlide = () => {
      if (window.innerWidth < 768) {
        setPlantsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setPlantsPerSlide(2);
      } else {
        setPlantsPerSlide(3);
      }
    };

    updatePlantsPerSlide();
    window.addEventListener('resize', updatePlantsPerSlide);
    return () => window.removeEventListener('resize', updatePlantsPerSlide);
  }, []);

  const maxIndex = Math.max(0, plantsData.length - plantsPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-advance slider
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const visiblePlants = plantsData.slice(currentIndex, currentIndex + plantsPerSlide);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-nature bg-clip-text text-transparent">
            Featured Plants
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our curated selection of popular and interesting plants. 
            Each plant comes with detailed care instructions and fascinating facts.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={prevSlide}
            disabled={plantsData.length <= plantsPerSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={nextSlide}
            disabled={plantsData.length <= plantsPerSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Plants Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out">
            {visiblePlants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>

          {/* Dots Indicator */}
          {plantsData.length > plantsPerSlide && (
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-smooth ${
                    index === currentIndex
                      ? 'bg-accent scale-125'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlants;