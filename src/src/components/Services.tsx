import { Card, CardContent } from "@/components/ui/card";
import { FileText, Calculator, Shield, Users, MapPin, Phone } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Asesoría Legal",
    description: "Te acompañamos en todo el proceso legal de compra-venta con abogados especializados."
  },
  {
    icon: Calculator,
    title: "Financiamiento",
    description: "Opciones de financiamiento flexibles adaptadas a tu capacidad de pago."
  },
  {
    icon: Shield,
    title: "Títulos Limpios",
    description: "Garantizamos que todos nuestros terrenos tienen documentación en regla."
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description: "Un equipo dedicado te acompañará desde la primera visita hasta la escrituración."
  },
  {
    icon: MapPin,
    title: "Ubicaciones Prime",
    description: "Terrenos en las mejores ubicaciones con alta plusvalía y desarrollo futuro."
  },
  {
    icon: Phone,
    title: "Soporte 24/7",
    description: "Estamos disponibles cuando nos necesites para resolver cualquier duda."
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-20 bg-nature-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros
            <span className="block bg-gradient-to-r from-accent to-nature bg-clip-text text-transparent">
              Servicios
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos un servicio integral para que tu experiencia de compra sea 
            completamente satisfactoria y sin complicaciones.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;