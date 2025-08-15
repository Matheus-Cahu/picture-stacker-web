import React from 'react';
import { Button } from "@/components/ui/button";

// Importando as imagens dos assets
import esmeraldasImg from "@/assets/esmeraldas.jpg";
import jazidaMineralImg from "@/assets/jazida-mineral.jpg";
import turmalinasImg from "@/assets/turmalinas.jpg";
import edificioLaDefenseImg from "@/assets/edificio-la-defense.jpg";
import ativoMultissetorialImg from "@/assets/ativo-multissetorial.jpg";
import fazendaExcepcionalImg from "@/assets/fazenda-excepcional.jpg";
import complexoUsinasImg from "@/assets/complexo-usinas.jpg";
import serranaImg from "@/assets/serrana.jpg";
import usinaAcucarImg from "@/assets/usina-acucar-etanol.jpg";
import predioSaoPauloImg from "@/assets/predio-sao-paulo.jpg";
import frigoricoFrangosImg from "@/assets/frigorifico-frangos.jpg";
import frigoricoImg from "@/assets/frigorifico.jpg";

// Interface para definir a estrutura de um ativo
interface Asset {
  id: string;
  title: string;
  price: string;
  description: string;
  image: string;
}

// Dados dos ativos com imagens importadas
const assetsData: Asset[] = [
  {
    id: 'esmeraldas',
    title: 'CANGAS ESMERALDAS',
    price: 'R$ 10.000,00 (KG)',
    description: 'As esmeraldas são consideradas ativos de alto valor e proteção patrimonial, com forte aceitação nos mercados de luxo, colecionismo e joalheria.',
    image: esmeraldasImg,
  },
  {
    id: 'jazida-mineral',
    title: 'JAZIDA MINERAL',
    price: 'R$ 200.000.000',
    description: 'Jazida multimetálica (ouro, cobre, lítio, nióbio, tântalo, cromo, alumínio, magnésio, terras raras, sílica, quartzo)',
    image: jazidaMineralImg,
  },
  {
    id: 'turmalinas',
    title: 'TURMALINAS E GEMAS VARIADAS',
    price: 'A PARTIR DE R$ 25.000,00 (KG)',
    description: 'As gemas contam com nota fiscal e certificado de origem, garantindo segurança jurídica e possibilidade de revenda ou internacionalização do ativo.',
    image: turmalinasImg,
  },
  {
    id: 'edificio-la-defense',
    title: 'EDIFÍCIO LA DEFENSE',
    price: 'R$ 240.000.000',
    description: 'Prédio comercial para locação com 20.416m² de área total e 10.658m² de área privativa, distribuídos em 25 pavimentos e 3 subsolos com 175 vagas de garagem.',
    image: edificioLaDefenseImg,
  },
  {
    id: 'ativo-multissetorial',
    title: 'ATIVO MULTISSETORIAL PREMIUM',
    price: 'R$ 545.000.000',
    description: 'Área viável também para implantação de parques eólicos, além dos já existentes na área. Uma receita estimada R$ 800 milhões a R$ 1,2 bilhão/ano (PPA).',
    image: ativoMultissetorialImg,
  },
  {
    id: 'fazenda-excepcional',
    title: 'FAZENDA EXCEPCIONAL',
    price: 'R$ 5.000.000.000',
    description: 'Apresentamos uma das maiores e mais estruturadas propriedades do centro-oeste brasileiro. Localizada no Mato Grosso, maior produtor de grãos e carne do país.',
    image: fazendaExcepcionalImg,
  },
  {
    id: 'complexo-usinas',
    title: 'COMPLEXO DE 11 USINAS',
    price: 'R$ 50.000.000.000',
    description: 'Usinas e conglomerado de empresas no Brasil Excelente oportunidade para investidores no setor sucroenergético do Brasil',
    image: complexoUsinasImg,
  },
  {
    id: 'serrana',
    title: 'SERRANA',
    price: 'US\$ 35.000.000',
    description: 'Jazida mineradora, situada no Brasil, que apresenta operações em pleno funcionamento, todas as licenças e autorizações liberadas.',
    image: serranaImg,
  },
  {
    id: 'usina-acucar',
    title: 'USINA DE AÇUCAR E ETANOL E ENERGIA',
    price: 'US\$ 700.000.000,00',
    description: 'Produção de álcool para o mercado interno e exportação, açúcar VHP para exportação, e energia elétrica para o seu consumo, vendendo o excedente.',
    image: usinaAcucarImg,
  },
  {
    id: 'predio-sao-paulo',
    title: 'PRÉDIO EM SÃO PAULO',
    price: 'R$ 46.000.000',
    description: 'O empreendimento é composto de 02 (duas) torres residenciais e 02 (dois) conjuntos de prédios comerciais, todos com acessos independentes.',
    image: predioSaoPauloImg,
  },
  {
    id: 'frigorifico-frangos',
    title: 'GRUPO DE FRIGORÍFICOS DE FRANGOS',
    price: 'US\$ 1.100.000.000',
    description: 'Abatedouro, fábrica embutidos, ração e estrutura de toda a cadeia produtiva. Estrutura para 200 toneladas ou 75 mil aves/ dia, com velocidade de 9.000 aves hora.',
    image: frigoricoFrangosImg,
  },
  {
    id: 'frigorifico',
    title: 'FRIGORÍFICO',
    price: 'US\$ 1.300.000.000',
    description: 'Oportunidade estratégica de aquisição no setor de proteína animal — Frango, Peixe e Derivados, com operação nacional e habilitação global de exportação.',
    image: frigoricoImg,
  },
];

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {assetsData.map((asset) => (
            <div key={asset.id} className="bg-background border border-cs-primary/20 rounded-lg p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={asset.image}
                alt={asset.title}
                className="w-full h-48 object-cover rounded-md mb-4 border border-cs-primary/10"
              />
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default NossosAtivos;
