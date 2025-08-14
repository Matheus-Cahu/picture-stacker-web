import { Users, Monitor, Calculator, Scale } from "lucide-react";
import helenImg from "@/assets/team-helen.jpg";
import pauloImg from "@/assets/team-paulo.jpg";
import andrezaImg from "@/assets/team-andreza.jpg";
import andreImg from "@/assets/team-andre.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Helen Souza",
      role: "Diretora Executiva & Head of Strategy",
      image: helenImg,
      icon: Users,
      description: "Executiva global com sólida atuação em negócios internacionais, ESG, energias renováveis e tecnologia jurídica. Lidera a CS Solutions Group como um hub estratégico que conecta ativos, pessoas e capital, estruturando projetos de alto impacto com segurança jurídica e alcance global."
    },
    {
      id: 2,
      name: "Paulo Victor Costa",
      role: "Diretor de Tecnologia & Inovação",
      image: pauloImg,
      icon: Monitor,
      description: "Especialista em desenvolvimento de sistemas e integração de tecnologias emergentes. Paulo Victor conduz a área de TI da CS Solutions Group com foco em automação, blockchain, segurança digital aplicada a negócios."
    },
    {
      id: 3,
      name: "Andreza Souza",
      role: "Consultoria Contábil",
      image: andrezaImg,
      icon: Calculator,
      description: "Especialista em consultoria contábil e financeira para empresas de diversos segmentos.",
      services: [
        "Revisão de regime tributário e obrigações fiscais",
        "Planejamento financeiro e controle de custos",
        "Auxílio na formação de preço de venda",
        "Organização de fluxo de caixa",
        "Orientação sobre pró-labore e distribuição de lucros"
      ]
    },
    {
      id: 4,
      name: "Dr André Oliveira",
      role: "Jurídico",
      image: andreImg,
      icon: Scale,
      description: "Advogado especialista em direito empresarial e contratos.",
      services: [
        "Elabora e revisa contratos de compra e venda",
        "Verifica a regularidade fiscal e jurídica das partes",
        "Analisa riscos e cláusulas de responsabilidade",
        "Apoia na negociação de termos contratuais",
        "Confere documentação legal do produto ou serviço",
        "Atua na prevenção e gestão de riscos jurídicos"
      ]
    }
  ];

  return (
    <section id="equipe" className="py-12 sm:py-16 md:py-20 bg-cs-dark">
      <div className="container mx-auto px-4">
        <div className="mb-12 sm:mb-16 pl-4 sm:pl-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cs-text mb-8 sm:mb-12 md:mb-16 text-left">
            NOSSA <span className="text-cs-primary">EQUIPE</span>
          </h2>
          <div className="flex gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16 md:mb-24">
            <div className="w-2 h-2 bg-cs-primary rounded-full"></div>
            <div className="w-2 h-2 bg-cs-primary rounded-full"></div>
            <div className="w-2 h-2 bg-cs-primary rounded-full"></div>
            <div className="w-2 h-2 bg-cs-primary rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6">
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-cover bg-center border-4 border-cs-primary" style={{ backgroundImage: `url(${member.image})` }}>
                </div>
              </div>
              
              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-2">
                  <member.icon className="w-5 h-5 sm:w-6 sm:h-6 text-cs-primary" />
                  <h3 className="text-lg sm:text-xl font-bold text-cs-text">{member.name}</h3>
                </div>
                <p className="text-cs-primary font-semibold mb-3 text-sm sm:text-base">{member.role}</p>
                <p className="text-cs-text-muted leading-relaxed mb-4 text-sm sm:text-base">{member.description}</p>
                
                {member.services && (
                  <ul className="space-y-2">
                    {member.services.map((service, index) => (
                      <li key={index} className="flex items-start space-x-2 justify-center sm:justify-start">
                        <div className="w-2 h-2 bg-cs-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-cs-text-muted text-xs sm:text-sm text-left">{service}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;