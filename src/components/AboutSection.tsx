import { Eye, Target, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block border-2 border-cs-primary rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cs-text mb-0">
              QUEM SOMOS
            </h2>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-cs-secondary/50 rounded-lg p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 backdrop-blur-sm">
            <p className="text-cs-text text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
              A CS Solutions Group garante a ponte entre o ideal e o possível, ao sonhar com resultados significativos e transformar com responsabilidade. Somos a tecnologia que muda os negócios sustentáveis, acessa capital global e entrega apuramento com rastreabilidade e segurança jurídica.
            </p>
            <p className="text-cs-text text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
              Nascemos da interseção entre propósito e estratégia, evoluindo para ser mais que uma consultoria, mas também como uma plataforma tech-jurídica que estrutura, conecta e potencializa projetos reais, tokenizados ou não.
            </p>
            <p className="text-cs-text text-sm sm:text-base md:text-lg leading-relaxed">
              Juntos acreditamos que negócios com impacto ambiental, social e econômico precisam ir além de boas intenções: é fundamental dados, contratos inteligentes, viabilidade técnica, governança sólida e acesso direto ao capital certo.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center flex flex-col">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cs-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-cs-text" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-cs-text mb-4 sm:mb-6">MISSÃO</h3>
              <div className="relative flex-1 flex flex-col justify-between">
                <p className="text-cs-text-muted text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-xs mx-auto">
                  Desenvolver soluções sustentáveis, tecnológicas e jurídicas para transformar empresas e instituições.
                </p>
                <div className="w-32 sm:w-48 h-1 bg-cs-primary mx-auto"></div>
              </div>
            </div>
            
            <div className="text-center flex flex-col">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cs-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Eye className="w-8 h-8 sm:w-10 sm:h-10 text-cs-text" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-cs-text mb-4 sm:mb-6">VISÃO</h3>
              <div className="relative flex-1 flex flex-col justify-between">
                <p className="text-cs-text-muted text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-xs mx-auto">
                  Ser referência em soluções integradas para ESG, tecnologia e governança no Brasil e exterior.
                </p>
                <div className="w-32 sm:w-48 h-1 bg-cs-primary mx-auto"></div>
              </div>
            </div>
            
            <div className="text-center flex flex-col sm:col-span-2 md:col-span-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cs-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-cs-text" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-cs-text mb-4 sm:mb-6">VALORES</h3>
              <div className="relative flex-1 flex flex-col justify-between">
                <p className="text-cs-text-muted text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-xs mx-auto">
                  Ética, inovação, sustentabilidade, multidisciplinaridade e impacto positivo.
                </p>
                <div className="w-32 sm:w-48 h-1 bg-cs-primary mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
