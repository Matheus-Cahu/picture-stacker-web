// src/data/assets.ts

// Importando todas as imagens necessárias
import cangasEsmeraldas1 from "@/assets/CANGAS-ESMERALDAS-1.PNG";
import cangasEsmeraldas2 from "@/assets/CANGAS-ESMERALDAS-2.PNG";
import cangasEsmeraldas3 from "@/assets/CANGAS-ESMERALDAS-3.PNG";
import cangasEsmeraldas4 from "@/assets/CANGAS-ESMERALDAS-4.PNG";

import jazidaMineral1 from "@/assets/JAZIDA-MINERAL-1.PNG";
import jazidaMineral2 from "@/assets/JAZIDA-MINERAL-2.PNG";
import jazidaMineral3 from "@/assets/JAZIDA-MINERAL-3.PNG";

import pedrasPreciosas1 from "@/assets/Pedras-preciosas-1.PNG";
import pedrasPreciosas2 from "@/assets/Pedras-preciosas-2.PNG";
import pedrasPreciosas3 from "@/assets/Pedras-preciosas-3.PNG";
import pedrasPreciosas4 from "@/assets/Pedras-preciosas-4.PNG";
import pedrasPreciosas5 from "@/assets/Pedras-preciosas-5.PNG";
import pedrasPreciosas6 from "@/assets/Pedras-preciosas-6.PNG";

import predio1 from "@/assets/Predio-01.PNG";
import predio2 from "@/assets/Predio-02.PNG";
import predio3 from "@/assets/Predio-03.PNG";
import predio4 from "@/assets/Predio-04.PNG";

import multisetorial1 from "@/assets/MULTISETORIAL-01.PNG";
import multisetorial2 from "@/assets/MULTISETORIAL-02.PNG";
import multisetorial3 from "@/assets/MULTISETORIAL-03.PNG";
import multisetorial4 from "@/assets/MULTISETORIAL-04.PNG";

import fazenda1 from "@/assets/FAZENDA-1.PNG";

import complexoUsinas1 from "@/assets/COMPLEXO-DE-11-USINAS-1.PNG";
import complexoUsinas2 from "@/assets/COMPLEXO-DE-11-USINAS-2.PNG";
import complexoUsinas3 from "@/assets/COMPLEXO-DE-11-USINAS-3.PNG";
import complexoUsinas4 from "@/assets/COMPLEXO-DE-11-USINAS-4.PNG";
import complexoUsinas5 from "@/assets/COMPLEXO-DE-11-USINAS-5.PNG";
import complexoUsinas6 from "@/assets/COMPLEXO-DE-11-USINAS-6.PNG";
import complexoUsinas7 from "@/assets/COMPLEXO-DE-11-USINAS-7.PNG";

import serrana1 from "@/assets/SERRANA-1.PNG";
import serrana2 from "@/assets/SERRANA-2.PNG";
import serrana3 from "@/assets/SERRANA-3.PNG";
import serrana4 from "@/assets/SERRANA-4.PNG";
import serrana5 from "@/assets/SERRANA-5.PNG";
import serrana6 from "@/assets/SERRANA-6.PNG";

import usinaAcucar1 from "@/assets/USINA-DE-AÇUCAR-E-ETANOL-1.PNG";
import usinaAcucar2 from "@/assets/USINA-DE-AÇUCAR-E-ETANOL-2.PNG";
import usinaAcucar3 from "@/assets/USINA-DE-AÇUCAR-E-ETANOL-3.PNG";
import usinaAcucar4 from "@/assets/USINA-DE-AÇUCAR-E-ETANOL-4.PNG";

import paulista1 from "@/assets/PAULISTA-1.PNG";
import paulista2 from "@/assets/PAULISTA-2.PNG";
import paulista3 from "@/assets/PAULISTA-3.PNG";
import paulista4 from "@/assets/PAULISTA-4.PNG";
import paulista5 from "@/assets/PAULISTA-5.PNG";
import paulista6 from "@/assets/PAULISTA-6.PNG";

import frigoricoFrangos1 from "@/assets/FRIGORIFICOS-DE-FRANGOS-1.PNG";
import frigoricoFrangos2 from "@/assets/FRIGORIFICOS-DE-FRANGOS-2.PNG";
import frigoricoFrangos3 from "@/assets/FRIGORIFICOS-DE-FRANGOS-3.PNG";
import frigoricoFrangos4 from "@/assets/FRIGORIFICOS-DE-FRANGOS-4.PNG";

import frigorifico from "@/assets/Frigorifico.png";

export interface Asset {
  id: string;
  title: string;
  price: string;
  description: string;
  images: string[];
  pdfUrl: string;
}

/**
 * Array de dados dos ativos com as imagens reais importadas.
 * Os PDFs estão localizados em `public/assets/PDF/` e são referenciados como `/assets/PDF/nome-do-arquivo.pdf`.
 */
export const assetsData: Asset[] = [
  {
    id: 'cangas-esmeraldas',
    title: 'CANGAS ESMERALDAS',
    price: 'R$ 10.000,00 (KG)',
    description: 'As esmeraldas são consideradas ativos de alto valor e proteção patrimonial, com forte aceitação nos mercados de luxo, colecionismo e joalheria.',
    images: [
      cangasEsmeraldas1,
      cangasEsmeraldas2,
      cangasEsmeraldas3,
      cangasEsmeraldas4,
    ],
    pdfUrl: '/assets/PDF/cangas-esmeraldas.pdf',
  },
  {
    id: 'jazida-mineral',
    title: 'JAZIDA MINERAL',
    price: 'R$ 200.000.000',
    description: 'Jazida multimetálica (ouro, cobre, lítio, nióbio, tântalo, cromo, alumínio, magnésio, terras raras, sílica, quartzo)',
    images: [
      jazidaMineral1,
      jazidaMineral2,
      jazidaMineral3,
    ],
    pdfUrl: '/assets/PDF/jazida-mineral.pdf',
  },
  {
    id: 'turmalinas-gemas-variadas',
    title: 'TURMALINAS E GEMAS VARIADAS',
    price: 'A PARTIR DE R$ 25.000,00 (KG)',
    description: 'As gemas contam com nota fiscal e certificado de origem, garantindo segurança jurídica e possibilidade de revenda ou internacionalização do ativo.',
    images: [
      pedrasPreciosas1,
      pedrasPreciosas2,
      pedrasPreciosas3,
      pedrasPreciosas4,
      pedrasPreciosas5,
      pedrasPreciosas6,
    ],
    pdfUrl: '/assets/PDF/gemas-preciosas-variadas.pdf',
  },
  {
    id: 'edificio-la-defense',
    title: 'EDIFÍCIO LA DEFENSE',
    price: 'R$ 240.000.000',
    description: 'Prédio comercial para locação com 20.416m² de área total e 10.658m² de área privativa, distribuídos em 25 pavimentos e 3 subsolos com 175 vagas de garagem.',
    images: [
      predio1,
      predio2,
      predio3,
      predio4,
    ],
    pdfUrl: '/assets/PDF/proposta-comercial-edificio-la-defense-2.pdf',
  },
  {
    id: 'ativo-multissetorial-premium',
    title: 'ATIVO MULTISSETORIAL PREMIUM',
    price: 'R$ 545.000.000',
    description: 'Área viável também para implantação de parques eólicos, além dos já existentes na área. Uma receita estimada R$ 800 milhões a R$ 1,2 bilhão/ano (PPA).',
    images: [
      multisetorial1,
      multisetorial2,
      multisetorial3,
      multisetorial4,
    ],
    pdfUrl: '/assets/PDF/ativo-multissetorial-portugues.pdf',
  },
  {
    id: 'fazenda-excepcional',
    title: 'FAZENDA EXCEPCIONAL',
    price: 'R$ 5.000.000.000',
    description: 'Apresentamos uma das maiores e mais estruturadas propriedades do centro-oeste brasileiro. Localizada no Mato Grosso, maior produtor de grãos e carne do país.',
    images: [
      fazenda1,
    ],
    pdfUrl: '/assets/PDF/fazenda-mato-grosso.pdf',
  },
  {
    id: 'complexo-11-usinas',
    title: 'COMPLEXO DE 11 USINAS',
    price: 'R$ 50.000.000.000',
    description: 'Usinas e conglomerado de empresas no Brasil. Excelente oportunidade para investidores no setor sucroenergético do Brasil',
    images: [
      complexoUsinas1,
      complexoUsinas2,
      complexoUsinas3,
      complexoUsinas4,
      complexoUsinas5,
      complexoUsinas6,
      complexoUsinas7,
    ],
    pdfUrl: '/assets/PDF/usina-de-etanol-complexo-de-11-português.pdf',
  },
  {
    id: 'serrana',
    title: 'SERRANA',
    price: 'US\$ 35.000.000',
    description: 'Jazida mineradora, situada no Brasil, que apresenta operações em pleno funcionamento, todas as licenças e autorizações liberadas.',
    images: [
      serrana1,
      serrana2,
      serrana3,
      serrana4,
      serrana5,
      serrana6,
    ],
    pdfUrl: '/assets/PDF/terra-serrana.pdf',
  },
  {
    id: 'usina-acucar-etanol-energia',
    title: 'USINA DE AÇÚCAR E ETANOL E ENERGIA',
    price: 'US\$ 700.000.000,00',
    description: 'Produção de álcool para o mercado interno e exportação, açúcar VHP para exportação, e energia elétrica para o seu consumo, vendendo o excedente.',
    images: [
      usinaAcucar1,
      usinaAcucar2,
      usinaAcucar3,
      usinaAcucar4,
    ],
    pdfUrl: '/assets/PDF/usina-de-açucar-etanol-português.pdf',
  },
  {
    id: 'predio-sao-paulo',
    title: 'PRÉDIO EM SÃO PAULO',
    price: 'R$ 46.000.000',
    description: 'O empreendimento é composto de 02 (duas) torres residenciais e 02 (dois) conjuntos de prédios comerciais, todos com acessos independentes.',
    images: [
      paulista1,
      paulista2,
      paulista3,
      paulista4,
      paulista5,
      paulista6,
    ],
    pdfUrl: '/assets/PDF/predio-são-paulo.pdf',
  },
  {
    id: 'grupo-frigorificos-frangos',
    title: 'GRUPO DE FRIGORÍFICOS DE FRANGOS',
    price: 'US\$ 1.100.000.000',
    description: 'Abatedouro, fábrica embutidos, ração e estrutura de toda a cadeia produtiva. Estrutura para 200 toneladas ou 75 mil aves/ dia, com velocidade de 9.000 aves hora.',
    images: [
      frigoricoFrangos1,
      frigoricoFrangos2,
      frigoricoFrangos3,
      frigoricoFrangos4,
    ],
    pdfUrl: '/assets/PDF/frigorifico-de-frangos.pdf',
  },
  {
    id: 'frigorifico-geral',
    title: 'FRIGORÍFICO',
    price: 'US\$ 1.300.000.000',
    description: 'Oportunidade estratégica de aquisição no setor de proteína animal — Frango, Peixe e Derivados, com operação nacional e habilitação global de exportação.',
    images: [
      frigorifico,
    ],
    pdfUrl: '/assets/PDF/frigorifico.pdf',
  },
];
