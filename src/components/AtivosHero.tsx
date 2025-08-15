import heroBackground from "@/assets/CAPA.png";
import { Users, TrendingUp, Shield, Globe } from "lucide-react";

const AtivosHero = () => {
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
        ATIVOS
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-cs-text-muted max-w-4xl mx-auto leading-relaxed mb-4 px-4">
        Compre ou venda um ativo
        </p>
        <div className="h-1 bg-cs-primary mx-auto mb-8 w-11/12 max-w-2xl"></div>
      </div>
      
      {/* Services bar at bottom */}
    </section>
  );
};

export default AtivosHero;
