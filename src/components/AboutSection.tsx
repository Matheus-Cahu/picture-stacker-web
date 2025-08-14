import { Eye, Target, Heart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 bg-cs-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block border-2 border-cs-primary rounded-full px-8 py-3">
            <h2 className="text-4xl font-bold text-cs-text mb-0">
              QUEM SOMOS
            </h2>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-cs-secondary/50 rounded-lg p-8 mb-12 backdrop-blur-sm">
            <p className="text-cs-text text-lg leading-relaxed mb-6">
              A CS Solutions Group garante a ponte entre o ideal e o possível, ao sonhar com resultados significativos e transformar com responsabilidade. Somos a tecnologia que muda os negócios sustentáveis, acessa capital global e entrega apuramento com rastreabilidade e segurança jurídica.
            </p>
            <p className="text-cs-text text-lg leading-relaxed mb-6">
              Nascemos da interseção entre propósito e estratégia, evoluindo para ser mais que uma consultoria, mas também como uma plataforma tech-jurídica que estrutura, conecta e potencializa projetos reais, tokenizados ou não.
            </p>
            <p className="text-cs-text text-lg leading-relaxed">
              Juntos acreditamos que negócios com impacto ambiental, social e econômico precisam ir além de boas intenções: é fundamental dados, contratos inteligentes, viabilidade técnica, governança sólida e acesso direto ao capital certo.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-cs-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-cs-text" />
              </div>
              <h3 className="text-2xl font-bold text-cs-text mb-4">MISSÃO</h3>
              <div className="relative">
                <p className="text-cs-text-muted leading-relaxed mb-4">
                  Desenvolver soluções sustentáveis, tecnológicas e jurídicas para transformar empresas e instituições.
                </p>
                <div className="w-full h-0.5 bg-cs-primary"></div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-cs-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-10 h-10 text-cs-text" />
              </div>
              <h3 className="text-2xl font-bold text-cs-text mb-4">VISÃO</h3>
              <div className="relative">
                <p className="text-cs-text-muted leading-relaxed mb-4">
                  Ser referência em soluções integradas para ESG, tecnologia e governança no Brasil e exterior.
                </p>
                <div className="w-full h-0.5 bg-cs-primary"></div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-cs-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-cs-text" />
              </div>
              <h3 className="text-2xl font-bold text-cs-text mb-4">VALORES</h3>
              <div className="relative">
                <p className="text-cs-text-muted leading-relaxed mb-4">
                  Ética, inovação, sustentabilidade, multidisciplinaridade e impacto positivo.
                </p>
                <div className="w-full h-0.5 bg-cs-primary"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;