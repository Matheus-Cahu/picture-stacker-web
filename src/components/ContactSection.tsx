import { Phone, Mail, Instagram, Globe, MapPin } from "lucide-react";
import MapBackground from "./MapBackground";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 relative overflow-hidden">
      {/* Map background */}
      <MapBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cs-text mb-4">CONTATO</h2>
          <div className="flex gap-12 mb-4 justify-center">
            <div className="w-2 h-2 bg-cs-primary rounded-full"></div>
            <div className="w-2 h-2 bg-cs-primary rounded-full"></div>
            <div className="w-2 h-2 bg-cs-primary rounded-full"></div>
            <div className="w-2 h-2 bg-cs-primary rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <Phone className="w-6 h-6 text-cs-primary" />
              <h3 className="text-xl font-semibold text-cs-text">WhatsApp</h3>
            </div>
            <p className="text-cs-text-muted">(12) 99684-5888</p>
          </div>
          
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <Mail className="w-6 h-6 text-cs-primary" />
              <h3 className="text-xl font-semibold text-cs-text">E-mail</h3>
            </div>
            <p className="text-cs-text-muted">contato@cssolution.com.br</p>
          </div>
          
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <Instagram className="w-6 h-6 text-cs-primary" />
              <h3 className="text-xl font-semibold text-cs-text">Instagram</h3>
            </div>
            <p className="text-cs-text-muted">@cssolutionsgroup</p>
          </div>
          
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <Globe className="w-6 h-6 text-cs-primary" />
              <h3 className="text-xl font-semibold text-cs-text">Site</h3>
            </div>
            <p className="text-cs-text-muted">www.cssolution.com.br</p>
          </div>
          
          <div className="text-center md:text-left md:col-span-2">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <MapPin className="w-6 h-6 text-cs-primary" />
              <h3 className="text-xl font-semibold text-cs-text">Endereço</h3>
            </div>
            <p className="text-cs-text-muted">
              Rua elvino silva, 285<br />
              Campinas - SP
            </p>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="w-16 h-16 bg-cs-primary/20 rounded-full flex items-center justify-center mx-auto">
            <MapPin className="w-8 h-8 text-cs-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;