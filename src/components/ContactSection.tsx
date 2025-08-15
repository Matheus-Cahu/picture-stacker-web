import { Phone, Mail, Instagram, Globe, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-12 sm:py-16 md:py-20 bg-background relative overflow-hidden">
      {/* Background geometric pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-20 h-20 sm:w-32 sm:h-32 border-2 border-cs-primary rounded-full"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-16 h-16 sm:w-24 sm:h-24 border-2 border-cs-primary transform rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 w-12 h-12 sm:w-16 sm:h-16 border-2 border-cs-primary transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 sm:mb-16 pl-4 sm:pl-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cs-text mb-4 text-left">CONTATO</h2>
          <div className="w-16 sm:w-20 h-1 bg-cs-primary"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-4xl pl-4 sm:pl-8">
          <div className="text-left">
            <div className="flex items-center space-x-3 mb-4">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-cs-primary" />
              <h3 className="text-lg sm:text-xl font-semibold text-cs-text">WhatsApp</h3>
            </div>
            <p className="text-cs-text-muted text-sm sm:text-base">(12) 99684-5888</p>
          </div>
          
          <div className="text-left">
            <div className="flex items-center space-x-3 mb-4">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-cs-primary" />
              <h3 className="text-lg sm:text-xl font-semibold text-cs-text">E-mail</h3>
            </div>
            <p className="text-cs-text-muted text-sm sm:text-base">contato@cssolution.com.br</p>
          </div>
          
          <div className="text-left">
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-cs-primary" />
              <h3 className="text-lg sm:text-xl font-semibold text-cs-text">Site</h3>
            </div>
            <p className="text-cs-text-muted text-sm sm:text-base">www.cssolution.com.br</p>
          </div>
          
          <div className="text-left">
            <div className="flex items-center space-x-3 mb-4">
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-cs-primary" />
              <h3 className="text-lg sm:text-xl font-semibold text-cs-text">Instagram</h3>
            </div>
            <p className="text-cs-text-muted text-sm sm:text-base">@cssolutionsgroup</p>
          </div>
          
          <div className="text-left sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-cs-primary" />
              <h3 className="text-lg sm:text-xl font-semibold text-cs-text">Endereço</h3>
            </div>
            <p className="text-cs-text-muted text-sm sm:text-base">
              Rua elvino silva, 285<br />
              Campinas - SP
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12 sm:mt-16">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-cs-primary/20 rounded-full flex items-center justify-center mx-auto">
            <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-cs-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
