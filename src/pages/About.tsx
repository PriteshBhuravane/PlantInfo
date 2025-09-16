import { Leaf, Users, BookOpen, Heart, Target, Award, Globe, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const About = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-nature-success" />,
      title: "Comprehensive Database",
      description: "Detailed information about thousands of plants including care instructions, uses, and botanical facts."
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Expert Curated",
      description: "All plant information is verified by botanical experts and experienced gardeners."
    },
    {
      icon: <Globe className="w-8 h-8 text-earth" />,
      title: "Global Coverage",
      description: "Plants from all continents and climate zones, from tropical to desert species."
    },
    {
      icon: <Shield className="w-8 h-8 text-flower" />,
      title: "Safety First",
      description: "Clear safety information including toxicity warnings and handling precautions."
    }
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6 text-nature-success" />,
      title: "Love for Nature",
      description: "We believe in fostering a deep connection between people and plants."
    },
    {
      icon: <Target className="w-6 h-6 text-accent" />,
      title: "Accuracy",
      description: "Providing scientifically accurate and up-to-date plant information."
    },
    {
      icon: <Award className="w-6 h-6 text-earth" />,
      title: "Accessibility",
      description: "Making botanical knowledge accessible to everyone, from beginners to experts."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              About PlantInfo
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Your trusted companion in the world of plants and botany. We're passionate about 
              sharing the beauty and knowledge of plant life with enthusiasts around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-nature bg-clip-text text-transparent">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              To create the most comprehensive, accurate, and accessible plant information resource on the internet. 
              We believe that understanding plants is key to understanding our world and building a sustainable future.
            </p>
            <div className="bg-gradient-leaf p-8 rounded-lg text-primary-foreground">
              <p className="text-xl font-medium">
                "Every plant has a story to tell, and we're here to help you discover it."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-nature bg-clip-text text-transparent">
              What Makes Us Special
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We go beyond basic plant identification to provide comprehensive information 
              that helps you understand, care for, and appreciate plants.
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

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-nature bg-clip-text text-transparent">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  PlantInfo was born from a simple observation: while there's an abundance of plant 
                  information scattered across the internet, there wasn't a single, reliable source 
                  that combined beautiful imagery with comprehensive, accurate data.
                </p>
                <p>
                  Founded by a team of botanists, gardeners, and technology enthusiasts, we set out 
                  to create the ultimate plant information resource. Our goal is to bridge the gap 
                  between scientific botanical knowledge and practical gardening wisdom.
                </p>
                <p>
                  Today, we serve thousands of plant enthusiasts, from curious beginners taking 
                  their first steps into gardening to experienced botanists seeking detailed 
                  scientific information.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-nature rounded-lg p-8 text-primary-foreground">
                <div className="flex items-center justify-center w-16 h-16 bg-background/20 rounded-full mx-auto mb-6">
                  <Leaf className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Growing Together
                </h3>
                <p className="text-center">
                  Join our community of plant lovers and discover the fascinating world of botany. 
                  Together, we're cultivating knowledge and nurturing a deeper connection with nature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-nature bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do at PlantInfo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-gradient-nature rounded-full flex items-center justify-center">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-earth">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-earth-foreground">
            Join Our Growing Community
          </h2>
          <p className="text-xl text-earth-foreground/90 mb-8 max-w-2xl mx-auto">
            Whether you're a seasoned gardener or just starting your plant journey, 
            PlantInfo is here to help you discover the wonderful world of plants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/gallery" className="inline-block">
              <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-semibold transition-smooth">
                Explore Plants
              </button>
            </a>
            <a href="/contact" className="inline-block">
              <button className="bg-earth-foreground/10 hover:bg-earth-foreground/20 text-earth-foreground px-8 py-3 rounded-lg font-semibold border border-earth-foreground/30 transition-smooth">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;