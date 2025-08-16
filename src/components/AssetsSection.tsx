import React from 'react';
import { Factory } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Interface para definir a estrutura de uma categoria
interface Category {
  id: string;
  name: string;
  image?: string; // URL para imagem da categoria
  icon?: React.ElementType; // Componente de ícone (ex: Lucide icon)
  bgColor?: string; // Cor de fundo para cards com ícones
}

// Importando imagens para as categorias
import gemasMineraisImg from "@/assets/GemasMinerios.png";
import ativosTokenizadosImg from "@/assets/PrediosTokens.png";
import terrasImg from "@/assets/Terras.png";
import fazendasImg from "@/assets/Fazendas.png";
import frigorificosImg from "@/assets/Frigorifico.png";
import projetosEmpresariaisImg from "@/assets/Empresarios.png";

// Dados das categorias
const categoriesData: Category[] = [
  { 
    id: 'usinas-industrias', 
    name: 'USINAS E INDÚSTRIAS', 
    icon: Factory, 
    bgColor: '#2C7A7B' 
  },
  { 
    id: 'gemas-minerais', 
    name: 'GEMAS E MINERAIS', 
    image: gemasMineraisImg 
  },
  { 
    id: 'ativos-tokenizados', 
    name: 'ATIVOS TOKENIZADOS', 
    image: ativosTokenizadosImg 
  },
  { 
    id: 'terras', 
    name: 'TERRAS', 
    image: terrasImg 
  },
  { 
    id: 'fazendas', 
    name: 'FAZENDAS', 
    image: fazendasImg 
  },
  { 
    id: 'frigorificos', 
    name: 'FRIGORÍFICOS', 
    image: frigorificosImg 
  },
  { 
    id: 'projetos-empresariais', 
    name: 'PROJETOS EMPRESARIAIS', 
    image: projetosEmpresariaisImg 
  },
];

const NossosAtivos: React.FC = () => {
  const navigate = useNavigate();
  const handleCategoryClick = (categoryId: string) => {
    console.log(`Categoria selecionada: ${categoryId}`);
    // Aqui você pode implementar a navegação ou filtro por categoria
  };

    const handleNavigateToAtivos = () => {
    navigate('/ativos');
  };

  return (
    <section className="py-16 md:py-24 bg-[#1A202C] text-[#E2E8F0]" id="nossos-ativos">
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#2C7A7B] text-center mb-12">
          NOSSOS ATIVOS
        </h2>
        
        {/* Descrição */}
        <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto">
          Trabalhamos com um portfólio diversificado de ativos de alto valor,
          incluindo frigoríficos, esmeraldas, prédios, terras, fazendas,
          indústrias e outros empreendimentos estratégicos. Atuamos para
          conectar oportunidades sólidas a investidores e empresas que buscam
          segurança, rentabilidade e crescimento patrimonial.
        </p>
        
        {/* Grid de Categorias */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
          {categoriesData.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="relative aspect-[3/4] overflow-hidden rounded-xl group cursor-pointer transform transition-transform duration-300 hover:scale-105"
            >
              {/* Renderização condicional: imagem ou ícone */}
              {category.image && (
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              )}
              
              {category.icon && (
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ backgroundColor: category.bgColor || '#2C7A7B' }}
                >
                  <category.icon className="h-24 w-24 text-white opacity-80" />
                </div>
              )}
              
              {/* Overlay escuro para melhor contraste do texto */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              
              {/* Label da categoria */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full border border-[#2C7A7B] bg-transparent text-white text-sm font-semibold whitespace-nowrap transition-colors duration-300 group-hover:bg-[#2C7A7B] group-hover:text-white backdrop-blur-sm">
                {category.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16  py-12 px-6 rounded-lg">
          <div className="text-center">
            <p className="text-white text-xl md:text-2xl font-semibold mb-6 uppercase tracking-wide">
              QUER COMPRAR OU VENDER UM ATIVO?
            </p>
            <button
              onClick={handleNavigateToAtivos}
              className="bg-[#57A37B] hover:bg-[#4A8E6E] text-white font-bold text-lg px-8 py-4 rounded-md transition-colors duration-300 uppercase tracking-wider shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              CLIQUE AQUI
            </button>
          </div>
        </div>
    </section>
  );
};

export default NossosAtivos;
