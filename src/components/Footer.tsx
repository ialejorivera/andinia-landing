import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/Andinia-logo-wstroke.png" 
                alt="AndinIA Logo" 
                className="h-8 w-auto mr-3"
              />
              <h3 className="text-2xl font-bold">AndinIA</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Consultora de automatización e inteligencia artificial radicada en Neuquén. 
              Transformamos empresas con soluciones IA innovadoras y efectivas.
            </p>
            <p className="text-teal-400 font-semibold">
              Soluciones hechas en Neuquén para el mundo
            </p>
          </div>
          
          {/* Servicios */}
          <div>
            <h4 className="text-xl font-bold mb-6">Nuestros Servicios</h4>
            <ul className="space-y-3 text-gray-300">
              <li>• Chatbots inteligentes</li>
              <li>• Automatización de emails</li>
              <li>• Bases de datos consultables</li>
              <li>• Pipelines ETL de datos</li>
              <li>• Consultoría en IA</li>
              <li>• Integración de sistemas</li>
            </ul>
          </div>
          
          {/* Contacto */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 text-teal-400 mr-3 flex-shrink-0" />
                <p>Neuquén Capital, Argentina</p>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 text-teal-400 mr-3 flex-shrink-0" />
                <p>+54 9 299 XXX-XXXX</p>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 text-teal-400 mr-3 flex-shrink-0" />
                <p>hola@andinia.com.ar</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* SEO Local y Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center md:text-left md:flex md:justify-between md:items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                Automatización Neuquén • IA Neuquén • Consultora IA Neuquén • Inteligencia Artificial Patagonia
              </p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} AndinIA. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;