import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-cs-primary/20' : ''
    }`}>
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-center">
          {/* Mobile Layout */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8">
            {/* Logo - Centro em mobile, esquerda em desktop */}
            <div className="flex items-center space-x-2 md:space-x-3 order-2 sm:order-2">
              <img 
                src="/lovable-uploads/29467764-b413-4136-8212-51df46d297f6.png" 
                alt="CS Solutions Group Logo" 
                className="h-10 sm:h-12 md:h-14 w-auto"
              />
              <span className="text-cs-text font-semibold text-sm sm:text-base md:text-xl">CS SOLUTIONS GROUP</span>
            </div>
            
            {/* Links - Abaixo da logo em mobile, nas laterais em desktop */}
            <div className="flex space-x-6 sm:space-x-8 order-1 sm:order-1">

            <Link to="/" className="text-cs-text hover:text-cs-primary transition-colors story-link underline text-sm sm:text-base"
              >
                Início
              </Link>
            <Link to="/ativos" className="text-cs-text hover:text-cs-primary transition-colors story-link underline text-sm sm:text-base"
              >
                Ativos
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
