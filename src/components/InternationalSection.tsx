import { Globe, Flag } from "lucide-react";

const InternationalSection = () => {
  const countries = [
    { name: "Brasil", flag: "🇧🇷" },
    { name: "EUA", flag: "🇺🇸" },
    { name: "Europa", flag: "🇪🇺" },
    { name: "Dubai", flag: "🇦🇪" },
    { name: "China", flag: "🇨🇳" }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-cs-secondary">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8 sm:mb-12">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cs-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-cs-primary" />
          </div>
          <div className="inline-block border-2 border-cs-primary rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-cs-text mb-0">
              ALCANCE INTERNACIONAL
            </h2>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-6 sm:mb-8">
          {countries.map((country, index) => (
            <div key={index} className="flex flex-col items-center space-y-1 sm:space-y-2">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-cs-dark/50 rounded-full flex items-center justify-center border-2 border-cs-primary/30">
                <span className="text-xl sm:text-2xl md:text-3xl">{country.flag}</span>
              </div>
              <span className="text-cs-text text-xs sm:text-sm font-medium">{country.name}</span>
            </div>
          ))}
        </div>
        
        <p className="text-cs-text text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-4 sm:mb-6 px-4">
          Brasil | EUA | Europa | Dubai | China
        </p>
        <div className="w-64 sm:w-80 h-1 bg-cs-primary mx-auto"></div>
      </div>
    </section>
  );
};

export default InternationalSection;