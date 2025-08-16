import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Camera } from "lucide-react";

// Interface para as props do componente
interface AssetCardProps {
  id: string;
  title: string;
  price: string;
  description: string;
  images: string[];
  pdfUrl: string;
  whatsappNumber: string;
  whatsappMessage?: string;
}

const AssetCard: React.FC<AssetCardProps> = ({
  id,
  title,
  price,
  description,
  images,
  pdfUrl,
  whatsappNumber,
  whatsappMessage = `Olá! Tenho interesse no ativo ${title}. Poderia me dar mais informações?`,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Função para baixar o PDF
  const handleDownloadPDF = () => {
    const fullUrl = `${window.location.origin}${pdfUrl}`;
    console.log('Full URL:', fullUrl);
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${title.toLowerCase().replace(/\s+/g, '-')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Função para redirecionar ao WhatsApp
  const handleWhatsAppRedirect = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  };

  // Configurações do carrossel
  const carouselSettings = {
    align: "start" as const,
    loop: true,
  };

  return (
    <div className="bg-cs-dark text-white rounded-lg shadow-xl max-w-sm mx-auto overflow-hidden">
      {/* Área do Carrossel de Imagens */}
      <div className="relative">
        <Carousel
          opts={carouselSettings}
          className="w-full"
          onSelect={(api) => {
            if (api) {
              setCurrentSlide(api.selectedScrollSnap());
            }
          }}
        >
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem key={index}>
                <div className="relative">
                  <img
                    src={img}
                    alt={`${title} - ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Setas de navegação customizadas */}
          <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-black/60 border-none hover:bg-black/80 text-white" />
          <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-black/60 border-none hover:bg-black/80 text-white" />
        </Carousel>
        
        {/* Contador de Imagens no Carrossel */}
        <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white text-xs px-3 py-1 rounded-full flex items-center">
          <Camera className="inline-block mr-1 w-3 h-3" />
          {currentSlide + 1}/{images.length}
        </div>
      </div>

      {/* Informações do Produto */}
      <div className="p-4">
        <h2 className="text-xl font-bold uppercase mb-2">{title}</h2>
        <p className="text-sm text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Botões de Ação */}
        <button
          onClick={handleWhatsAppRedirect}
          className="w-full bg-white text-cs-dark font-semibold py-3 px-4 rounded-lg mb-3 hover:bg-gray-200 transition-colors duration-200"
        >
          QUERO ESSE ATIVO
        </button>
        <button
          onClick={handleDownloadPDF}
          className="w-full bg-cs-primary text-white font-semibold py-3 px-4 rounded-lg hover:bg-cs-primary/80 transition-colors duration-200"
        >
          BAIXAR PDF
        </button>
      </div>
    </div>
  );
};

export default AssetCard;
