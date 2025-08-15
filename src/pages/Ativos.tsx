import Header from "@/components/Header";
import AtivosHero from "@/components/AtivosHero";
import NossosAtivos from "@/components/NossosAtivos";
import EntreEmContato from "@/components/EntreEmContato";

const Ativos = () => {
  return (
    <div className="min-h-screen bg-cs-dark">
      <Header />
      <AtivosHero />
      <NossosAtivos />
      <EntreEmContato />
    </div>
  );
};

export default Ativos;
