import heroBackground from "@/assets/hero-background.jpg";
import { Users, TrendingUp, Shield, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="inicio"
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 53, 48, 0.8), rgba(34, 53, 48, 0.9)), url(${heroBackground})`
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-cs-text mb-6 tracking-tight">
          CS SOLUTIONS
        </h1>
        <p className="text-xl md:text-2xl text-cs-text-muted max-w-4xl mx-auto leading-relaxed mb-4">
          Inovação e Gestão Sustentável com Segurança Jurídica
        </p>
        <div className="w-32 h-1 bg-cs-primary mx-auto mb-8"></div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 bg-cs-primary/20 rounded-full flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-cs-primary" />
            </div>
            <p className="text-cs-text text-sm">Venda e tokenização de ativos</p>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 bg-cs-primary/20 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-cs-primary" />
            </div>
            <p className="text-cs-text text-sm">Consultoria em Vendas e Gestão de Pessoas</p>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 bg-cs-primary/20 rounded-full flex items-center justify-center">
              <Globe className="w-8 h-8 text-cs-primary" />
            </div>
            <p className="text-cs-text text-sm">Consultoria de Marketing e Posicionamento Digital</p>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 bg-cs-primary/20 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-cs-primary" />
            </div>
            <p className="text-cs-text text-sm">Consultoria Contábil e Financeira</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;