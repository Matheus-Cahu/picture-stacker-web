import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Link Início - Esquerda */}
          <div className="flex-1">
            <a href="#inicio" className="text-cs-text hover:text-cs-primary transition-colors">
              Início
            </a>
          </div>
          
          {/* Logo - Centro */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/29467764-b413-4136-8212-51df46d297f6.png" 
              alt="CS Solutions Group Logo" 
              className="h-10 w-auto"
            />
            <span className="text-cs-text font-semibold text-xl">CS SOLUTIONS GROUP</span>
          </div>
          
          {/* Link Ativos - Direita */}
          <div className="flex-1 flex justify-end">
            <a href="#ativos" className="text-cs-text hover:text-cs-primary transition-colors">
              Ativos
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;