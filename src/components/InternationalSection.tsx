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
    <section className="py-20 bg-cs-secondary">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
          <div className="w-20 h-20 bg-cs-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Globe className="w-10 h-10 text-cs-primary" />
          </div>
          <h2 className="text-3xl font-bold text-cs-text mb-4">
            ALCANCE INTERNACIONAL
          </h2>
          <div className="w-20 h-1 bg-cs-primary mx-auto"></div>
        </div>
        
        <div className="flex justify-center items-center space-x-8 md:space-x-12 mb-8">
          {countries.map((country, index) => (
            <div key={index} className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 bg-cs-dark/50 rounded-full flex items-center justify-center border-2 border-cs-primary/30">
                <span className="text-3xl">{country.flag}</span>
              </div>
              <span className="text-cs-text text-sm font-medium">{country.name}</span>
            </div>
          ))}
        </div>
        
        <p className="text-cs-text text-lg max-w-2xl mx-auto">
          Brasil | EUA | Europa | Dubai | China
        </p>
      </div>
    </section>
  );
};

export default InternationalSection;