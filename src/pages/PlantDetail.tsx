import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Droplets,
  Sun,
  Thermometer,
  Heart,
  Shield,
  Leaf,
  MapPin,
  Clock,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Layout from "@/components/Layout";
import LanguageTranslator from "@/components/LanguageTranslator";
import plantsData from "@/data/plantsData.json";
import { getPlantImage } from "@/utils/imageUtils";

const PlantDetail = () => {
  const { id } = useParams();
  const originalPlant = plantsData.find((p) => p.id === parseInt(id || "0"));
  const [plant, setPlant] = useState(originalPlant);

  const handleTranslate = (translatedContent: any) => {
    setPlant(translatedContent);
  };

  if (!plant) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Plant not found</h1>
          <Link to="/gallery">
            <Button variant="outline">← Back to Gallery</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "herb":
        return <Leaf className="w-5 h-5" />;
      case "succulent":
        return <Droplets className="w-5 h-5" />;
      case "tree":
        return <Users className="w-5 h-5" />;
      default:
        return <Sun className="w-5 h-5" />;
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/gallery">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Gallery
            </Button>
          </Link>
        </div>

        {/* Language Translator */}
        {originalPlant && (
          <LanguageTranslator
            content={originalPlant}
            onTranslate={handleTranslate}
          />
        )}

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Plant Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg shadow-card">
              <img
                src={getPlantImage(plant.id, 0)}
                alt={plant.common_name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Plant Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-gradient-nature text-primary-foreground">
                  {getTypeIcon(plant.type)}
                  <span className="ml-1">{plant.type}</span>
                </Badge>
                {plant.environmental.air_purifying && (
                  <Badge variant="secondary">Air Purifying</Badge>
                )}
                {plant.environmental.pollinator_support && (
                  <Badge variant="outline">Pollinator Friendly</Badge>
                )}
              </div>
              <h1 className="text-4xl font-bold mb-2 text-foreground">
                {plant.common_name}
              </h1>
              <p className="text-xl text-muted-foreground italic mb-2">
                {plant.scientific_name}
              </p>
              <p className="text-muted-foreground">
                Family: <span className="font-medium">{plant.family}</span>
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <MapPin className="w-6 h-6 mx-auto mb-2 text-accent" />
                <div className="text-sm font-medium">Native Region</div>
                <div className="text-xs text-muted-foreground">
                  {plant.native_region}
                </div>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 text-center">
                <Clock className="w-6 h-6 mx-auto mb-2 text-nature-success" />
                <div className="text-sm font-medium">Growth Rate</div>
                <div className="text-xs text-muted-foreground">
                  {plant.description.growth_rate}
                </div>
              </div>
            </div>

            {/* Uses */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Primary Uses</h3>
              <div className="flex flex-wrap gap-2">
                {plant.uses.medicinal && (
                  <Badge
                    variant="outline"
                    className="bg-nature-success/10 text-nature-success border-nature-success/20"
                  >
                    Medicinal
                  </Badge>
                )}
                {plant.uses.ornamental && (
                  <Badge
                    variant="outline"
                    className="bg-flower/10 text-flower border-flower/20"
                  >
                    Ornamental
                  </Badge>
                )}
                {plant.uses.culinary && (
                  <Badge
                    variant="outline"
                    className="bg-earth/10 text-earth border-earth/20"
                  >
                    Culinary
                  </Badge>
                )}
                {plant.uses.religious && (
                  <Badge
                    variant="outline"
                    className="bg-accent/10 text-accent border-accent/20"
                  >
                    Religious
                  </Badge>
                )}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8">
              {[1, 2].map((index) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden rounded-md"
                >
                  <img
                    src={getPlantImage(plant.id, index)}
                    alt={`${plant.common_name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Care Instructions */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-accent" />
                Care Instructions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Droplets className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm">Watering</div>
                  <div className="text-sm text-muted-foreground">
                    {plant.care.water}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sun className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm">Sunlight</div>
                  <div className="text-sm text-muted-foreground">
                    {plant.care.sunlight}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Thermometer className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm">Temperature</div>
                  <div className="text-sm text-muted-foreground">
                    {plant.care.temperature_range}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Leaf className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium text-sm">Soil Type</div>
                  <div className="text-sm text-muted-foreground">
                    {plant.care.soil_type}
                  </div>
                </div>
              </div>

              {plant.care.pruning && (
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm">Pruning</div>
                    <div className="text-sm text-muted-foreground">
                      {plant.care.pruning}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Plant Description */}
          {/* Plant Description */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Physical Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium">Height:</span>
                  <div className="text-muted-foreground">
                    {plant.description.height}
                  </div>
                </div>
                {plant.description.spread && (
                  <div>
                    <span className="font-medium">Spread:</span>
                    <div className="text-muted-foreground">
                      {plant.description.spread}
                    </div>
                  </div>
                )}
                <div>
                  <span className="font-medium">Leaf Color:</span>
                  <div className="text-muted-foreground">
                    {plant.description.leaf_color}
                  </div>
                </div>
                <div>
                  <span className="font-medium">Lifespan:</span>
                  <div className="text-muted-foreground">
                    {plant.description.lifespan}
                  </div>
                </div>
              </div>

              <Separator />

              {/* Read More / Read Less for Flower Description */}
              <DescriptionWithToggle
                description={plant.description.description}
              />

              {plant.description.leaf_shape && (
                <div>
                  <span className="font-medium text-sm">Leaf Shape:</span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {plant.description.leaf_shape}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Uses and Benefits */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Uses & Benefits</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {plant.uses.medicinal && (
                <div>
                  <span className="font-medium text-sm text-nature-success">
                    Medicinal Uses:
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {plant.uses.medicinal}
                  </p>
                </div>
              )}

              {plant.uses.culinary && (
                <div>
                  <span className="font-medium text-sm text-earth">
                    Culinary Uses:
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {plant.uses.culinary}
                  </p>
                </div>
              )}

              {plant.uses.ornamental && (
                <div>
                  <span className="font-medium text-sm text-flower">
                    Ornamental Uses:
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {plant.uses.ornamental}
                  </p>
                </div>
              )}

              {plant.uses.religious && (
                <div>
                  <span className="font-medium text-sm text-accent">
                    Religious Significance:
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {plant.uses.religious}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Propagation & Safety */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Propagation & Safety</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <span className="font-medium text-sm">Propagation Method:</span>
                <p className="text-sm text-muted-foreground mt-1">
                  {plant.propagation.method}
                </p>
              </div>

              <div>
                <span className="font-medium text-sm">Best Season:</span>
                <p className="text-sm text-muted-foreground mt-1">
                  {plant.propagation.season}
                </p>
              </div>

              <div>
                <span className="font-medium text-sm">Germination Time:</span>
                <p className="text-sm text-muted-foreground mt-1">
                  {plant.propagation.germination_time}
                </p>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span className="font-medium text-sm">
                    Safety Information
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div
                    className={`p-2 rounded ${
                      plant.safety.toxic_to_pets
                        ? "bg-destructive/10 text-destructive"
                        : "bg-nature-success/10 text-nature-success"
                    }`}
                  >
                    Pets: {plant.safety.toxic_to_pets ? "Toxic" : "Safe"}
                  </div>
                  <div
                    className={`p-2 rounded ${
                      plant.safety.toxic_to_humans
                        ? "bg-destructive/10 text-destructive"
                        : "bg-nature-success/10 text-nature-success"
                    }`}
                  >
                    Humans: {plant.safety.toxic_to_humans ? "Toxic" : "Safe"}
                  </div>
                </div>
                {plant.safety.handling_precautions !== "None required" && (
                  <p className="text-xs text-muted-foreground">
                    Precautions: {plant.safety.handling_precautions}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Interesting Facts */}
        {plant.interesting_facts && plant.interesting_facts.length > 0 && (
          <Card className="mt-8 shadow-card">
            <CardHeader>
              <CardTitle>Interesting Facts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {plant.interesting_facts.map((fact, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </Layout>
  );
};

function DescriptionWithToggle({ description }: { description: string }) {
  const [showFull, setShowFull] = useState(false);
  const maxLength = 180;
  const isLong = description && description.length > maxLength;

  return (
    <div>
      <span className="font-medium text-sm">Description:</span>
      <p className="text-sm text-muted-foreground mt-1">
        {isLong && !showFull
          ? `${description.slice(0, maxLength)}...`
          : description}
      </p>
      {isLong && (
        <button
          className="text-xs text-accent underline mt-1"
          onClick={() => setShowFull((prev) => !prev)}
        >
          {showFull ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
}

export default PlantDetail;
