import React from 'react';
import { User, Phone, Mail } from 'lucide-react';
import teamHelen from "@/assets/team-helen.jpg";

const EntreEmContato: React.FC = () => {
  return (
    <section className="bg-background text-cs-text" id="contato">
      {/* Seção superior com título */}
      <div className="bg-background py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-20">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              ENTRE EM <span className="text-cs-primary">CONTATO</span>
            </h2>
            
            {/* Três pontos verdes */}
            <div className="flex gap-4 mb-8">
              <div className="w-3 h-3 bg-cs-primary rounded-full"></div>
              <div className="w-3 h-3 bg-cs-primary rounded-full"></div>
              <div className="w-3 h-3 bg-cs-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Seção inferior com detalhes de contato */}
      <div className="bg-black/60 py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Helen Souza */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 flex-1 lg:flex-[2]">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-2 border-cs-primary/20">
                <img
                  src={teamHelen}
                  alt="Helen Souza"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="text-center sm:text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-cs-text mb-2 flex items-center justify-center sm:justify-start gap-3">
                  <User className="w-5 h-5 text-cs-text" />
                  Helen Souza
                </h3>
                <p className="text-cs-text-muted text-base md:text-lg">
                  Diretora Executiva & Head of Strategy
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col items-center text-center flex-1 group">
              <div className="mb-4 p-4 rounded-full bg-cs-primary/10 group-hover:bg-cs-primary/20 transition-colors duration-300">
                <Phone className="w-8 h-8 md:w-10 md:h-10 text-cs-text" />
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-cs-text mb-2">
                WhatsApp
              </h4>
              <a 
                href="https://wa.me/5512996845888" 
                className="text-cs-text-muted hover:text-cs-primary transition-colors duration-300 text-base md:text-lg"
                
                rel="noopener noreferrer"
              >
                (12) 99684-5888
              </a>
            </div>

            {/* E-mail */}
            <div className="flex flex-col items-center text-center flex-1 group">
              <div className="mb-4 p-4 rounded-full bg-cs-primary/10 group-hover:bg-cs-primary/20 transition-colors duration-300">
                <Mail className="w-8 h-8 md:w-10 md:h-10 text-cs-text" />
              </div>
              <h4 className="text-lg md:text-xl font-semibold text-cs-text mb-2">
                E-mail
              </h4>
              <a 
                href="mailto:contato@cssolution.com.br" 
                className="text-cs-text-muted hover:text-cs-primary transition-colors duration-300 text-base md:text-lg break-all"
              >
                contato@cssolution.com.br
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default EntreEmContato;
