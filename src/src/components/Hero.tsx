import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, TrendingUp, Users } from "lucide-react";
import heroImage from "@/assets/hero-land.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroImage})`
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Tu Terreno
            <span className="block bg-gradient-to-r from-sunset to-sky bg-clip-text text-transparent">
              Ideal Te Espera
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Descubre las mejores oportunidades de inversión en terrenos. 
            Desde lotes residenciales hasta propiedades comerciales e industriales.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Ver Terrenos Disponibles
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-foreground">
              Solicitar Información
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="w-8 h-8 text-sunset" />
              </div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-white/80">Terrenos Vendidos</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-sky" />
              </div>
              <div className="text-2xl font-bold text-white">1,200+</div>
              <div className="text-white/80">Clientes Satisfechos</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-nature" />
              </div>
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-white/80">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;