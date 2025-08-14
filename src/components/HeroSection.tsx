import heroBackground from "@/assets/hero-background.jpg";
import { Users, TrendingUp, Shield, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="inicio"
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 53, 48, 0.5), rgba(34, 53, 48, 0.6)), url(${heroBackground})`
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-cs-text mb-6 tracking-tight">
          CS SOLUTIONS
        </h1>
        <p className="text-xl md:text-2xl text-cs-text-muted max-w-4xl mx-auto leading-relaxed mb-4">
          Inovação e Gestão Sustentável com Segurança Jurídica
        </p>
        <div className="h-1 bg-cs-primary mx-auto mb-8" style={{ width: 'calc(100% + 10px)', maxWidth: '620px' }}></div>
      </div>
      
      {/* Services bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="flex items-center space-x-3 pb-3 border-b-2 border-cs-primary">
              <div className="w-10 h-10 bg-cs-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-cs-primary" />
              </div>
              <p className="text-cs-text text-sm">Venda e tokenização de ativos</p>
            </div>
            
            <div className="flex items-center space-x-3 pb-3 border-b-2 border-cs-primary">
              <div className="w-10 h-10 bg-cs-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-cs-primary" />
              </div>
              <p className="text-cs-text text-sm">Consultoria em Vendas e Gestão de Pessoas</p>
            </div>
            
            <div className="flex items-center space-x-3 pb-3 border-b-2 border-cs-primary">
              <div className="w-10 h-10 bg-cs-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-cs-primary" />
              </div>
              <p className="text-cs-text text-sm">Consultoria de Marketing e Posicionamento Digital</p>
            </div>
            
            <div className="flex items-center space-x-3 pb-3 border-b-2 border-cs-primary">
              <div className="w-10 h-10 bg-cs-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-cs-primary" />
              </div>
              <p className="text-cs-text text-sm">Consultoria Contábil e Financeira</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;