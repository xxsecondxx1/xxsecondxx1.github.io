import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-earth-light to-sky-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¿Listo para
            <span className="block bg-gradient-to-r from-earth to-sky bg-clip-text text-transparent">
              Invertir?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contáctanos hoy y descubre cómo podemos ayudarte a encontrar 
            el terreno perfecto para tu proyecto.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Dirección</h4>
                    <p className="text-muted-foreground">
                      Av. Real Estate 123, Col. Centro<br />
                      Ciudad, Estado, CP 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Teléfono</h4>
                    <p className="text-muted-foreground">
                      +52 (123) 456-7890<br />
                      +52 (123) 456-7891
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-nature rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">
                      info@uwu-terrenos.com<br />
                      ventas@uwu-terrenos.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sunset rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Horarios</h4>
                    <p className="text-muted-foreground">
                      Lun - Vie: 9:00 AM - 6:00 PM<br />
                      Sáb: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-gradient-to-br from-primary to-accent text-white border-0">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageCircle className="w-8 h-8" />
                  <h3 className="text-xl font-semibold">¿Necesitas ayuda inmediata?</h3>
                </div>
                <p className="mb-4 text-white/90">
                  Nuestro equipo está listo para atenderte y resolver todas tus dudas.
                </p>
                <Button variant="outline" className="w-full text-primary border-white hover:bg-white">
                  Llamar Ahora
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="shadow-lg border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Envíanos un Mensaje</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nombre</label>
                    <Input placeholder="Tu nombre completo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Teléfono</label>
                    <Input placeholder="Tu número de teléfono" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="tu@email.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Tipo de Terreno</label>
                  <select className="w-full p-3 border border-input rounded-md bg-background">
                    <option>Selecciona una opción</option>
                    <option>Residencial</option>
                    <option>Comercial</option>
                    <option>Industrial</option>
                    <option>Mixto</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Mensaje</label>
                  <Textarea 
                    placeholder="Cuéntanos sobre tu proyecto y qué tipo de terreno buscas..."
                    rows={5}
                  />
                </div>
                
                <Button variant="hero" className="w-full" size="lg">
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;