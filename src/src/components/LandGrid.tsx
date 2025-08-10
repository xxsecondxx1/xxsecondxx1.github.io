import LandCard from "./LandCard";
import { Button } from "@/components/ui/button";
import { Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import land1 from "@/assets/land-1.jpg";
import land2 from "@/assets/land-2.jpg";
import land3 from "@/assets/land-3.jpg";

const landData = [
  {
    id: "1",
    title: "Terreno Residencial Los Pinos",
    location: "Zona Norte, Ciudad",
    price: "$2,500,000 MXN",
    size: "1,200 m²",
    image: land1,
    type: "Residencial",
    featured: true
  },
  {
    id: "2",
    title: "Lote Comercial Centro",
    location: "Av. Principal, Centro",
    price: "$4,800,000 MXN",
    size: "800 m²",
    image: land2,
    type: "Comercial",
    featured: false
  },
  {
    id: "3",
    title: "Terreno Industrial",
    location: "Parque Industrial Norte",
    price: "$8,500,000 MXN",
    size: "5,000 m²",
    image: land3,
    type: "Industrial",
    featured: true
  },
  {
    id: "4",
    title: "Lote Residencial Premium",
    location: "Fraccionamiento Elite",
    price: "$3,200,000 MXN",
    size: "1,500 m²",
    image: land1,
    type: "Residencial",
    featured: false
  },
  {
    id: "5",
    title: "Terreno Mixto",
    location: "Zona Comercial Sur",
    price: "$6,200,000 MXN",
    size: "2,200 m²",
    image: land2,
    type: "Mixto",
    featured: false
  },
  {
    id: "6",
    title: "Lote Industrial Grande",
    location: "Corredor Industrial",
    price: "$12,000,000 MXN",
    size: "8,500 m²",
    image: land3,
    type: "Industrial",
    featured: true
  }
];

const LandGrid = () => {
  return (
    <section id="terrenos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Terrenos
            <span className="block bg-gradient-to-r from-nature to-accent bg-clip-text text-transparent">
              Disponibles
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Encuentra el terreno perfecto para tu próximo proyecto. Tenemos opciones 
            residenciales, comerciales e industriales.
          </p>
        </div>
        
        {/* Filters */}
        <div className="bg-card rounded-lg p-6 mb-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input placeholder="Buscar terrenos..." className="pl-10" />
            </div>
            
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Tipo de terreno" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="residencial">Residencial</SelectItem>
                <SelectItem value="comercial">Comercial</SelectItem>
                <SelectItem value="industrial">Industrial</SelectItem>
                <SelectItem value="mixto">Mixto</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Rango de precio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="0-3m">$0 - $3M</SelectItem>
                <SelectItem value="3-6m">$3M - $6M</SelectItem>
                <SelectItem value="6-10m">$6M - $10M</SelectItem>
                <SelectItem value="10m+">$10M+</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" className="w-full">
              <Filter className="w-4 h-4 mr-2" />
              Más Filtros
            </Button>
          </div>
        </div>
        
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {landData.map((land) => (
            <LandCard key={land.id} {...land} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver Más Terrenos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LandGrid;