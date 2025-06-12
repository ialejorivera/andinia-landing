import React from 'react';
import { Search, Cog, Rocket } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Estudiamos tu negocio",
      description: "Hacemos un diagnóstico profundo de tus procesos, clientes y casos de uso para identificar las mejores oportunidades de automatización"
    },
    {
      icon: Cog,
      number: "02", 
      title: "Automatizamos con IA",
      description: "Desarrollamos e implementamos soluciones personalizadas que se integran perfectamente con tus sistemas existentes"
    },
    {
      icon: Rocket,
      number: "03",
      title: "Innovamos juntos",
      description: "Te acompañamos en el crecimiento, optimizando continuamente y agregando nuevas funcionalidades según tus necesidades"
    }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-6">
            Cómo lo hacemos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un proceso probado que garantiza resultados desde el primer día
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Línea conectora */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-teal-400 to-blue-400 transform translate-x-6"></div>
                )}
                
                {/* Número del paso */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold text-xl rounded-full mb-6 relative z-10">
                  {step.number}
                </div>
                
                {/* Ícono */}
                <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                  <step.icon className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;