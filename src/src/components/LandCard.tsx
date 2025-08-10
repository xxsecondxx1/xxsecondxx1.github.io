import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { MapPin, Ruler, DollarSign, Camera } from "lucide-react";

interface LandCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  size: string;
  image: string;
  type: string;
  featured?: boolean;
}

const LandCard = ({ title, location, price, size, image, type, featured }: LandCardProps) => {
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 overflow-hidden ${
      featured ? 'ring-2 ring-primary shadow-lg' : ''
    }`}>
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {type}
          </span>
        </div>
        {featured && (
          <div className="absolute top-3 right-3">
            <span className="bg-sunset text-white px-3 py-1 rounded-full text-sm font-medium">
              Destacado
            </span>
          </div>
        )}
        <div className="absolute bottom-3 right-3">
          <div className="bg-black/50 text-white p-2 rounded-full">
            <Camera className="w-4 h-4" />
          </div>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center">
            <Ruler className="w-4 h-4 mr-2 text-nature" />
            <span className="text-sm">{size}</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="w-4 h-4 mr-2 text-accent" />
            <span className="text-sm font-semibold">{price}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <div className="flex gap-2 w-full">
          <Button variant="outline" className="flex-1">
            Ver Detalles
          </Button>
          <Button variant="default" className="flex-1">
            Contactar
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LandCard;