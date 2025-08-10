import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header = ({ activeTab, setActiveTab }: HeaderProps) => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-nature to-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-nature to-primary bg-clip-text text-transparent">
              UwU
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => setActiveTab("inicio")}
              className={`transition-colors ${
                activeTab === "inicio" 
                  ? "text-primary" 
                  : "text-foreground hover:text-primary"
              }`}
            >
              Inicio
            </button>
            <button 
              onClick={() => setActiveTab("terrenos")}
              className={`transition-colors ${
                activeTab === "terrenos" 
                  ? "text-primary" 
                  : "text-foreground hover:text-primary"
              }`}
            >
              Terrenos
            </button>
            <button 
              onClick={() => setActiveTab("servicios")}
              className={`transition-colors ${
                activeTab === "servicios" 
                  ? "text-primary" 
                  : "text-foreground hover:text-primary"
              }`}
            >
              Servicios
            </button>
            <button 
              onClick={() => setActiveTab("contacto")}
              className={`transition-colors ${
                activeTab === "contacto" 
                  ? "text-primary" 
                  : "text-foreground hover:text-primary"
              }`}
            >
              Contacto
            </button>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>+52 123 456 7890</span>
              </div>
            </div>
            <Button variant="hero" size="sm">
              Contáctanos
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;