import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Importando as imagens dos assets
import esmeraldasImg from "@/assets/CAPA.png";
import jazidaMineralImg from "@/assets/CAPA.png";
import turmalinasImg from "@/assets/CAPA.png";
import edificioLaDefenseImg from "@/assets/CAPA.png";
import ativoMultissetorialImg from "@/assets/CAPA.png";
import fazendaExcepcionalImg from "@/assets/CAPA.png";
import complexoUsinasImg from "@/assets/CAPA.png";
import serranaImg from "@/assets/CAPA.png";
import usinaAcucarImg from "@/assets/CAPA.png";
import predioSaoPauloImg from "@/assets/CAPA.png";
import frigoricoFrangosImg from "@/assets/CAPA.png";
import frigoricoImg from "@/assets/CAPA.png";

// Importando imagens adicionais para cada ativo (você precisa criar essas)
import esmeraldas2Img from "@/assets/CAPA.png";
import esmeraldas3Img from "@/assets/CAPA.png";
import jazida2Img from "@/assets/CAPA.png";
import jazida3Img from "@/assets/CAPA.png";
// ... continue importando mais imagens conforme necessário

// Interface para definir a estrutura de um ativo
interface Asset {
  id: string;
  title: string;
  price: string;
  description: string;
  images: string[]; // Mudança: agora é um array de imagens
}

// Dados dos ativos com múltiplas imagens
const assetsData: Asset[] = [
  {
    id: 'esmeraldas',
    title: 'CANGAS ESMERALDAS',
    price: 'R$ 10.000,00 (KG)',
    description: 'As esmeraldas são consideradas ativos de alto valor e proteção patrimonial, com forte aceitação nos mercados de luxo, colecionismo e joalheria.',
    images: [esmeraldasImg, esmeraldas2Img, esmeraldas3Img], // Múltiplas imagens
  },
  {
    id: 'jazida-mineral',
    title: 'JAZIDA MINERAL',
    price: 'R$ 200.000.000',
    description: 'Jazida multimetálica (ouro, cobre, lítio, nióbio, tântalo, cromo, alumínio, magnésio, terras raras, sílica, quartzo)',
    images: [jazidaMineralImg, jazida2Img, jazida3Img],
  },
  {
    id: 'turmalinas',
    title: 'TURMALINAS E GEMAS VARIADAS',
    price: 'A PARTIR DE R$ 25.000,00 (KG)',
    description: 'As gemas contam com nota fiscal e certificado de origem, garantindo segurança jurídica e possibilidade de revenda ou internacionalização do ativo.',
    images: [turmalinasImg, turmalinasImg, turmalinasImg], // Temporário: mesma imagem
  },
  {
    id: 'edificio-la-defense',
    title: 'EDIFÍCIO LA DEFENSE',
    price: 'R$ 240.000.000',
    description: 'Prédio comercial para locação com 20.416m² de área total e 10.658m² de área privativa, distribuídos em 25 pavimentos e 3 subsolos com 175 vagas de garagem.',
    images: [edificioLaDefenseImg, edificioLaDefenseImg, edificioLaDefenseImg],
  },
  {
    id: 'ativo-multissetorial',
    title: 'ATIVO MULTISSETORIAL PREMIUM',
    price: 'R$ 545.000.000',
    description: 'Área viável também para implantação de parques eólicos, além dos já existentes na área. Uma receita estimada R$ 800 milhões a R$ 1,2 bilhão/ano (PPA).',
    images: [ativoMultissetorialImg, ativoMultissetorialImg, ativoMultissetorialImg],
  },
  {
    id: 'fazenda-excepcional',
    title: 'FAZENDA EXCEPCIONAL',
    price: 'R$ 5.000.000.000',
    description: 'Apresentamos uma das maiores e mais estruturadas propriedades do centro-oeste brasileiro. Localizada no Mato Grosso, maior produtor de grãos e carne do país.',
    images: [fazendaExcepcionalImg, fazendaExcepcionalImg, fazendaExcepcionalImg],
  },
  {
    id: 'complexo-usinas',
    title: 'COMPLEXO DE 11 USINAS',
    price: 'R$ 50.000.000.000',
    description: 'Usinas e conglomerado de empresas no Brasil Excelente oportunidade para investidores no setor sucroenergético do Brasil',
    images: [complexoUsinasImg, complexoUsinasImg, complexoUsinasImg],
  },
  {
    id: 'serrana',
    title: 'SERRANA',
    price: 'US\$ 35.000.000',
    description: 'Jazida mineradora, situada no Brasil, que apresenta operações em pleno funcionamento, todas as licenças e autorizações liberadas.',
    images: [serranaImg, serranaImg, serranaImg],
  },
  {
    id: 'usina-acucar',
    title: 'USINA DE AÇUCAR E ETANOL E ENERGIA',
    price: 'US\$ 700.000.000,00',
    description: 'Produção de álcool para o mercado interno e exportação, açúcar VHP para exportação, e energia elétrica para o seu consumo, vendendo o excedente.',
    images: [usinaAcucarImg, usinaAcucarImg, usinaAcucarImg],
  },
  {
    id: 'predio-sao-paulo',
    title: 'PRÉDIO EM SÃO PAULO',
    price: 'R$ 46.000.000',
    description: 'O empreendimento é composto de 02 (duas) torres residenciais e 02 (dois) conjuntos de prédios comerciais, todos com acessos independentes.',
    images: [predioSaoPauloImg, predioSaoPauloImg, predioSaoPauloImg],
  },
  {
    id: 'frigorifico-frangos',
    title: 'GRUPO DE FRIGORÍFICOS DE FRANGOS',
    price: 'US\$ 1.100.000.000',
    description: 'Abatedouro, fábrica embutidos, ração e estrutura de toda a cadeia produtiva. Estrutura para 200 toneladas ou 75 mil aves/ dia, com velocidade de 9.000 aves hora.',
    images: [frigoricoFrangosImg, frigoricoFrangosImg, frigoricoFrangosImg],
  },
  {
    id: 'frigorifico',
    title: 'FRIGORÍFICO',
    price: 'US\$ 1.300.000.000',
    description: 'Oportunidade estratégica de aquisição no setor de proteína animal — Frango, Peixe e Derivados, com operação nacional e habilitação global de exportação.',
    images: [frigoricoImg, frigoricoImg, frigoricoImg],
  },
];

// Componente para o carrossel de imagens de cada ativo
const AssetImageCarousel: React.FC<{ images: string[]; title: string }> = ({ images, title }) => {
  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative">
                <img
                  src={image}
                  alt={`${title} - Imagem ${index + 1}`}
                  className="w-full h-48 object-cover rounded-md border border-cs-primary/10"
                />
                {/* Indicador de posição */}
                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                  {index + 1}/{images.length}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Botões de navegação menores para o carrossel interno */}
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 h-6 w-6 bg-black/60 border-none hover:bg-black/80 text-white" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 bg-black/60 border-none hover:bg-black/80 text-white" />
      </Carousel>
      
      {/* Indicadores de pontos (dots) */}
      <div className="flex justify-center mt-2 space-x-1">
        {images.map((_, index) => (
          <div
            key={index}
            className="w-2 h-2 rounded-full bg-cs-primary/30"
          />
        ))}
      </div>
    </div>
  );
};

const NossosAtivos: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-background text-cs-text" id="nossos-ativos">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-cs-primary text-center mb-12">
          NOSSOS ATIVOS
        </h2>
        <p className="text-center text-cs-text-light mb-10 max-w-2xl mx-auto">
          Trabalhamos com um portfólio diversificado de ativos de alto valor,
          incluindo frigoríficos, esmeraldas, prédios, terras, fazendas,
          indústrias e outros empreendimentos estratégicos. Atuamos para
          conectar oportunidades sólidas a investidores e empresas que buscam
          segurança, rentabilidade e crescimento patrimonial.
        </p>
        
        {/* Carousel Container dos Ativos */}
        <div className="w-full max-w-7xl mx-auto px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {assetsData.map((asset) => (
                <CarouselItem key={asset.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="p-1">
                    <div className="bg-background border border-cs-primary/20 rounded-lg p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                      
                      {/* Carrossel de imagens do ativo */}
                      <div className="w-full mb-4">
                        <AssetImageCarousel images={asset.images} title={asset.title} />
                      </div>
                      
                      <h3 className="text-xl font-semibold text-cs-primary mb-2 min-h-[56px] flex items-center justify-center">
                        {asset.title}
                      </h3>
                      <p className="text-cs-text-light text-left text-sm mb-4 flex-grow">
                        {asset.description}
                      </p>
                      <div className="mt-auto flex flex-col space-y-3 w-full">
                        <Button className="w-full bg-cs-primary hover:bg-white hover:text-cs-primary text-white font-bold py-2 px-4 rounded-md transition-colors duration-200">
                          QUERO ESSE ATIVO
                        </Button>
                        <Button variant="outline" className="w-full border-cs-primary text-cs-primary hover:bg-cs-primary/10 transition-colors duration-200">
                          BAIXAR PDF
                        </Button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-cs-primary/10 border-cs-primary/20 hover:bg-cs-primary hover:text-white" />
            <CarouselNext className="hidden md:flex -right-12 bg-cs-primary/10 border-cs-primary/20 hover:bg-cs-primary hover:text-white" />
          </Carousel>
        </div>

        {/* Indicador de navegação */}
        <div className="flex justify-center mt-8 md:hidden">
          <p className="text-cs-text-light text-sm">
            Deslize para ver mais ativos →
          </p>
        </div>
      </div>
    </section>
  );
};

export default NossosAtivos;
