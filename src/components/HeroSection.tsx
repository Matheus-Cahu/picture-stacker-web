import heroBackground from "@/assets/CAPA.png";
import { Users, TrendingUp, Shield, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section 
      id="inicio"
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 53, 48, 0.7), rgba(34, 53, 48, 0.8)), url(${heroBackground})`
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-cs-text mb-4 sm:mb-6 tracking-tight">
          CS SOLUTIONS
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-cs-text-muted max-w-4xl mx-auto leading-relaxed mb-4 px-4">
          Inovação e Gestão Sustentável com Segurança Jurídica
        </p>
        <div className="h-1 bg-cs-primary mx-auto mb-8 w-11/12 max-w-2xl"></div>
      </div>
      
      {/* Services bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 py-6 sm:py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
            <div className="relative">
              <div className="flex items-center space-x-3 pb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cs-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-cs-primary" />
                </div>
                <p className="text-cs-text text-xs sm:text-sm">Venda e tokenização de ativos</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cs-primary" style={{ transform: 'translateY(10px)' }}></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center space-x-3 pb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cs-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-cs-primary" />
                </div>
                <p className="text-cs-text text-xs sm:text-sm">Consultoria em Vendas e Gestão de Pessoas</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cs-primary" style={{ transform: 'translateY(10px)' }}></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center space-x-3 pb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cs-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-cs-primary" />
                </div>
                <p className="text-cs-text text-xs sm:text-sm">Consultoria de Marketing e Posicionamento Digital</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cs-primary" style={{ transform: 'translateY(10px)' }}></div>
            </div>
            
            <div className="relative">
              <div className="flex items-center space-x-3 pb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-cs-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-cs-primary" />
                </div>
                <p className="text-cs-text text-xs sm:text-sm">Consultoria Contábil e Financeira</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cs-primary" style={{ transform: 'translateY(10px)' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
