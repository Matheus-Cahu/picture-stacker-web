import { Button } from "@/components/ui/button";
import industrialImg from "@/assets/industrial.jpg";
import miningImg from "@/assets/mining.jpg";
import buildingsImg from "@/assets/buildings.jpg";

const AssetsSection = () => {
  const assets = [
    {
      id: 1,
      title: "USINAS E INDÚSTRIAS",
      image: industrialImg,
      description: "Soluções sustentáveis para o setor industrial"
    },
    {
      id: 2,
      title: "GEMAS E MINERAIS",
      image: miningImg,
      description: "Gestão e tokenização de recursos minerais"
    },
    {
      id: 3,
      title: "ATIVOS TOKENIZADOS",
      image: buildingsImg,
      description: "Digitalização e estruturação de ativos"
    },
    {
      id: 4,
      title: "TERRAS",
      image: industrialImg, // Reusing for now
      description: "Desenvolvimento sustentável de propriedades rurais"
    },
    {
      id: 5,
      title: "FAZENDAS",
      image: miningImg, // Reusing for now
      description: "Agronegócio e pecuária sustentável"
    },
    {
      id: 6,
      title: "FRIGORÍFICOS",
      image: buildingsImg, // Reusing for now
      description: "Processamento e distribuição de alimentos"
    },
    {
      id: 7,
      title: "PROJETOS EMPRESARIAIS",
      image: industrialImg, // Reusing for now
      description: "Consultoria e estruturação de negócios"
    }
  ];

  return (
    <section id="ativos" className="pt-8 pb-20 bg-cs-dark">
      <div className="container mx-auto px-4">
        <div className="mb-16 pl-8">
          <h2 className="text-4xl font-bold text-cs-text mb-16 text-left">
            NOSSOS <span className="text-cs-primary">ATIVOS</span>
          </h2>
          <div className="flex gap-12 mb-24">
            <div className="w-2 h-2 bg-cs-primary rounded-full"></div>
            <div className="w-2 h-2 bg-cs-primary rounded-full"></div>
            <div className="w-2 h-2 bg-cs-primary rounded-full"></div>
            <div className="w-2 h-2 bg-cs-primary rounded-full"></div>
          </div>
          <p className="text-cs-text-muted max-w-2xl text-lg leading-relaxed">
            Trabalhamos com um portfólio diversificado de ativos de alto valor, incluindo frigoríficos, minerais, gemas, terras, fazendas, agricultura e outros empreendimentos estratégicos. Atuamos para conectar oportunidades atuais e inovadoras e empresas que buscam segurança, rentabilidade e crescimento patrimonial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {assets.map((asset) => (
            <div 
              key={asset.id} 
              className="flex flex-col items-center gap-4"
            >
              <div className="w-full h-48 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${asset.image})` }}>
              </div>
              <div className="bg-transparent border border-cs-primary rounded-full px-6 py-2">
                <h3 className="text-cs-text font-medium text-sm text-center whitespace-nowrap">{asset.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold text-cs-text mb-6">
            QUER COMPRAR OU VENDER UM ATIVO?
          </h3>
          <Button className="bg-cs-primary hover:bg-cs-primary-light text-cs-text px-8 py-3 text-lg font-semibold">
            CLIQUE AQUI
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AssetsSection;