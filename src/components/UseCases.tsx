import React from 'react';
import { MessageCircle, Mail, Database, BarChart3 } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      icon: MessageCircle,
      title: "Chatbot inteligente",
      description: "Atención al cliente 24/7 y onboarding automático. Resuelve consultas frecuentes y deriva casos complejos al equipo humano.",
      benefits: "Reduce 80% de consultas repetitivas"
    },
    {
      icon: Mail,
      title: "Agente para emails",
      description: "Clasifica, responde y gestiona automáticamente correos y mensajes. Nunca más pierdas una oportunidad comercial.",
      benefits: "Respuesta en menos de 2 minutos"
    },
    {
      icon: Database,
      title: "Base de datos consultable",
      description: "Preguntá en lenguaje natural y obtené respuestas inmediatas de toda tu información empresarial.",
      benefits: "Búsquedas 10x más rápidas"
    },
    {
      icon: BarChart3,
      title: "Pipelines ETL de datos",
      description: "Conectamos todas tus fuentes de datos y generamos reportes automáticos para decisiones estratégicas.",
      benefits: "Reportes en tiempo real"
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Casos de uso que <span className="text-teal-400">funcionan</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soluciones probadas que están transformando empresas en Neuquén y toda la región
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
              <useCase.icon className="h-12 w-12 text-teal-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">{useCase.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{useCase.description}</p>
              <div className="bg-teal-500/20 rounded-lg p-3">
                <p className="text-teal-400 font-semibold text-sm">{useCase.benefits}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;