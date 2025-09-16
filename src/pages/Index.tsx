import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Search, Leaf, TreePine, Flower, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import FeaturedPlants from "@/components/FeaturedPlants";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/gallery?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-nature-success" />,
      title: "Comprehensive Plant Database",
      description: "Explore detailed information about thousands of plants including care instructions, uses, and interesting facts."
    },
    {
      icon: <TreePine className="w-8 h-8 text-earth" />,
      title: "From Herbs to Trees",
      description: "Find information about all types of plants - herbs, succulents, flowering plants, trees, and more."
    },
    {
      icon: <Flower className="w-8 h-8 text-flower" />,
      title: "Beautiful Plant Gallery",
      description: "Browse our stunning collection of plant photographs and discover new species to learn about."
    },
    {
      icon: <Heart className="w-8 h-8 text-accent" />,
      title: "Plant Care Made Easy",
      description: "Get expert care tips, watering schedules, and growing advice for healthy, thriving plants."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
              Discover the World of
              <span className="block bg-gradient-to-r from-accent to-nature-success bg-clip-text text-transparent">
                Plants & Nature
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Your comprehensive guide to plant information, care tips, and botanical knowledge. 
              Explore thousands of plants with detailed descriptions and beautiful imagery.
            </p>

            {/* Hero Search */}
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto mb-12">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search for any plant..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg bg-background/90 backdrop-blur-sm border-2 border-primary-foreground/20 focus:border-accent"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="h-14 px-8 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                Explore Plants
              </Button>
            </form>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/gallery">
                <Button size="lg" variant="outline" className="bg-background/20 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/30">
                  Browse Gallery
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="ghost" className="text-primary-foreground hover:bg-background/20">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-nature bg-clip-text text-transparent">
              Why Choose PlantInfo?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive, accurate, and beautifully presented plant information 
              to help you learn, grow, and connect with nature.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="plant-card text-center p-6 h-full">
                <CardContent className="p-0 space-y-4">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-nature rounded-full flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Plants */}
      <FeaturedPlants />

      {/* Call to Action */}
      <section className="py-16 bg-gradient-earth">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-earth-foreground">
            Ready to Explore?
          </h2>
          <p className="text-xl text-earth-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of plant enthusiasts in discovering the fascinating world of botany. 
            Start your plant journey today!
          </p>
          <Link to="/gallery">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Browse All Plants
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
