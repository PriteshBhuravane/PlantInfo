import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Droplets, Sun, TreePine } from "lucide-react";
import { getPlantImage } from "@/utils/imageUtils";

interface Plant {
  id: number;
  common_name: string;
  scientific_name: string;
  family: string;
  type: string;
  native_region: string;
  images: string[];
  description: {
    height: string;
    leaf_color: string;
    flower_description: string;
    growth_rate: string;
  };
  care: {
    water: string;
    sunlight: string;
    soil_type: string;
  };
  uses: {
    medicinal?: string;
    ornamental?: string;
    culinary?: string;
  };
  environmental: {
    air_purifying: boolean;
    pollinator_support: boolean;
  };
}

interface PlantCardProps {
  plant: Plant;
}

const PlantCard = ({ plant }: PlantCardProps) => {
  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'herb':
        return <Leaf className="w-4 h-4" />;
      case 'succulent':
        return <Droplets className="w-4 h-4" />;
      case 'tree':
        return <TreePine className="w-4 h-4" />;
      default:
        return <Sun className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'herb':
        return 'bg-nature-success text-nature-success-foreground';
      case 'succulent':
        return 'bg-accent text-accent-foreground';
      case 'tree':
        return 'bg-earth text-earth-foreground';
      default:
        return 'bg-flower text-flower-foreground';
    }
  };

  return (
    <Link to={`/plant/${plant.id}`}>
      <Card className="plant-card overflow-hidden group cursor-pointer h-full">
        <div className="relative overflow-hidden">
          <img
            src={getPlantImage(plant.id, 0)}
            alt={plant.common_name}
            className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
          />
          <div className="absolute top-3 left-3">
            <Badge className={`${getTypeColor(plant.type)} flex items-center space-x-1`}>
              {getTypeIcon(plant.type)}
              <span className="text-xs font-medium">{plant.type}</span>
            </Badge>
          </div>
          {plant.environmental.air_purifying && (
            <div className="absolute top-3 right-3">
              <Badge variant="secondary" className="text-xs">
                Air Purifying
              </Badge>
            </div>
          )}
        </div>

        <CardContent className="p-4 space-y-3">
          <div className="space-y-1">
            <h3 className="font-semibold text-lg text-foreground group-hover:text-accent transition-smooth">
              {plant.common_name}
            </h3>
            <p className="text-sm text-muted-foreground italic">
              {plant.scientific_name}
            </p>
            <p className="text-xs text-muted-foreground">
              Family: {plant.family}
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>Height: {plant.description.height}</span>
              <span>{plant.description.growth_rate} growing</span>
            </div>
            
            <div className="flex flex-wrap gap-1">
              {plant.uses.medicinal && (
                <Badge variant="outline" className="text-xs">
                  Medicinal
                </Badge>
              )}
              {plant.uses.ornamental && (
                <Badge variant="outline" className="text-xs">
                  Ornamental
                </Badge>
              )}
              {plant.uses.culinary && (
                <Badge variant="outline" className="text-xs">
                  Culinary
                </Badge>
              )}
              {plant.environmental.pollinator_support && (
                <Badge variant="outline" className="text-xs">
                  Pollinator Friendly
                </Badge>
              )}
            </div>
          </div>

          <div className="text-xs text-muted-foreground line-clamp-2">
            Native to {plant.native_region}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PlantCard;