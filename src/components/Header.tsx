import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-cs-primary rounded-full flex items-center justify-center">
              <span className="text-cs-text font-bold text-lg">CS</span>
            </div>
            <span className="text-cs-text font-semibold text-xl">CS SOLUTIONS GROUP</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-cs-text hover:text-cs-primary transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-cs-text hover:text-cs-primary transition-colors">
              Quem Somos
            </a>
            <a href="#ativos" className="text-cs-text hover:text-cs-primary transition-colors">
              Ativos
            </a>
            <a href="#equipe" className="text-cs-text hover:text-cs-primary transition-colors">
              Equipe
            </a>
            <a href="#contato" className="text-cs-text hover:text-cs-primary transition-colors">
              Contato
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;