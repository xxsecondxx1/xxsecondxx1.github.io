import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LandGrid from "@/components/LandGrid";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [activeTab, setActiveTab] = useState("inicio");

  return (
    <div className="min-h-screen">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsContent value="inicio" className="mt-0">
          <Hero />
          <LandGrid />
          <Services />
          <Contact />
        </TabsContent>
        
        <TabsContent value="terrenos" className="mt-0">
          <div className="pt-20">
            <LandGrid />
          </div>
        </TabsContent>
        
        <TabsContent value="servicios" className="mt-0">
          <div className="pt-20">
            <Services />
          </div>
        </TabsContent>
        
        <TabsContent value="contacto" className="mt-0">
          <div className="pt-20">
            <Contact />
          </div>
        </TabsContent>
      </Tabs>
      
      <Footer />
    </div>
  );
};

export default Index;
