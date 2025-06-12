import React from 'react';
import { ArrowRight } from 'lucide-react';
import StatsSlider from './StatsSlider';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 100;
      const elementPosition = contactSection.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-teal-700 text-white min-h-screen flex items-center pt-20"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(10, 31, 68, 0.95), rgba(15, 42, 68, 0.9), rgba(0, 150, 136, 0.85)), url('/51983707146_eba1c053c5_k.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Principal */}
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/Andinia-logo-wstroke.png" 
              alt="AndinIA Logo" 
              className="h-16 w-auto mr-4"
            />
            <h1 className="text-4xl md:text-5xl font-bold">AndinIA</h1>
          </div>
          
          {/* Titular Principal */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Automatizamos tus procesos,
            <span className="text-teal-400 block">innovamos tu negocio</span>
          </h2>
          
          {/* Subtítulo */}
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Contactanos ahora y empezá a <strong className="text-teal-400">ahorrar tiempo y dinero</strong>
          </p>
          
          {/* Slider de estadísticas */}
          <StatsSlider />
          
          {/* CTA Principal */}
          <button 
            onClick={scrollToContact}
            className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-8 py-4 rounded-full text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-teal-500/25 inline-flex items-center gap-3"
          >
            Agendá tu llamada gratuita
            <ArrowRight className="h-6 w-6" />
          </button>
          
          {/* Indicador local */}
          <p className="mt-6 text-sm text-gray-300">
            ✨ Soluciones hechas en Neuquén para empresas neuquinas
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;