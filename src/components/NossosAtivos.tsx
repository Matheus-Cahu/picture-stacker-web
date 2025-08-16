// NossosAtivos.tsx
import React from 'react';
import { Button } from "@/components/ui/button";
import AssetCard from "@/components/AssetCard";
import { assetsData } from '@/data/data'; 

const NossosAtivos: React.FC = () => {
  // Dados do WhatsApp (mesmo do EntreEmContato)
  const whatsappNumber = "5512996845888"; // Substitua pelo número real

  return (
    <section className="py-16 md:py-24 bg-background text-cs-text" id="nossos-ativos">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cs-primary mb-6">
            NOSSOS ATIVOS
          </h2>
          <p className="text-cs-text-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Trabalhamos com um portfólio diversificado de ativos de alto valor,
            incluindo frigoríficos, esmeraldas, prédios, terras, fazendas,
            indústrias e outros empreendimentos estratégicos. Atuamos para
            conectar oportunidades sólidas a investidores e empresas que buscam
            segurança, rentabilidade e crescimento patrimonial.
          </p>
        </div>

        {/* Grid de ativos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {assetsData.map((asset) => (
            <AssetCard
              key={asset.id}
              id={asset.id}
              title={asset.title}
              price={asset.price}
              description={asset.description}
              images={asset.images}
              pdfUrl={asset.pdfUrl}
              whatsappNumber={whatsappNumber}
              whatsappMessage={`Olá! Tenho interesse no ativo ${asset.title}. Poderia me dar mais informações sobre este investimento?`}
            />
          ))}
        </div>

        {/* Call to action final */}
        <div className="text-center mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-cs-primary mb-4">
            Interessado em algum ativo específico?
          </h3>
          <p className="text-cs-text-light text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para mais informações sobre nossos ativos 
            e oportunidades de investimento.
          </p>
          <Button 
            size="lg"
            onClick={() => {
              const encodedMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre os ativos disponíveis para investimento.");
              const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
              window.open(whatsappLink, '_blank');
            }}
            className="bg-cs-primary hover:bg-cs-primary/90 text-white font-bold px-8 py-3 text-lg rounded-md transition-colors duration-200"
          >
            FALAR COM ESPECIALISTA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NossosAtivos;
