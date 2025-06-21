import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Stethoscope, Plane, Home, Car } from 'lucide-react';

interface UseCase {
  id: string;
  title: string;
  summary: string;
  description: string;
  benefits: string[];
  value: string;
}

interface Industry {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  useCases: UseCase[];
}

const IndustryUseCases = () => {
  const [expandedIndustry, setExpandedIndustry] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const industries: Industry[] = [
    {
      id: 'clinicas',
      name: 'Clínicas y Centros Médicos',
      icon: Stethoscope,
      color: 'from-green-500 to-emerald-600',
      useCases: [
        {
          id: 'facturacion-medica',
          title: 'IA Facturadora Médica',
          summary: 'Automatiza la codificación médica y facturación, eliminando errores humanos',
          description: 'Convierte órdenes médicas en facturas listas para enviar automáticamente. A partir del texto de la orden médica, sugiere códigos de facturación (CIE-10, nomencladores), completa formularios y genera PDFs listos para obras sociales.',
          benefits: [
            'Elimina errores de codificación médica',
            'Reduce rechazos de obras sociales en 80%',
            'Acelera el proceso de facturación 10x'
          ],
          value: 'Ahorra hasta 20 horas semanales del personal administrativo'
        },
        {
          id: 'asistente-virtual-clinica',
          title: 'Recepción IA',
          summary: 'Atiende consultas de pacientes 24/7 sin saturar la línea telefónica',
          description: 'Asistente virtual que responde consultas frecuentes, informa disponibilidad de turnos, explica procesos y deriva casos complejos a recepción con resumen completo del motivo.',
          benefits: [
            'Reduce llamadas telefónicas en 70%',
            'Respuesta instantánea a pacientes',
            'Mejora la experiencia del paciente'
          ],
          value: 'Libera a tu equipo de recepción para tareas más importantes'
        }
      ]
    },
    {
      id: 'turismo',
      name: 'Empresas de Turismo',
      icon: Plane,
      color: 'from-blue-500 to-cyan-600',
      useCases: [
        {
          id: 'recomendaciones-turismo',
          title: 'Tu Viaje Ideal con IA',
          summary: 'Motor de recomendaciones que personaliza tours según el perfil del cliente',
          description: 'Sistema inteligente que mediante una conversación guiada identifica preferencias del cliente y recomienda 2-3 tours perfectos para su perfil, aumentando las chances de venta cruzada.',
          benefits: [
            'Aumenta tasa de conversión en 40%',
            'Reduce indecisión del cliente',
            'Potencia el upselling automático'
          ],
          value: 'Diseña la experiencia perfecta para cada viajero en menos de 60 segundos'
        },
        {
          id: 'contenido-redes-turismo',
          title: 'Posteá Sin Pensar',
          summary: 'Genera contenido automático para redes sociales y plataformas de venta',
          description: 'A partir de fotos y descripción del tour, genera textos para Instagram, respuestas a comentarios y descripciones para portales como Despegar, manteniendo un tono natural y atractivo.',
          benefits: [
            'Ahorra 15 horas semanales de marketing',
            'Mejora calidad del contenido',
            'Mantiene consistencia en la marca'
          ],
          value: 'Publicaciones listas para vender, sin escribir ni una línea'
        }
      ]
    },
    {
      id: 'inmobiliarias',
      name: 'Inmobiliarias',
      icon: Home,
      color: 'from-orange-500 to-red-600',
      useCases: [
        {
          id: 'smart-agent-inmobiliario',
          title: 'Smart Agent Inmobiliario',
          summary: 'Asistente conversacional que califica leads y recomienda propiedades',
          description: 'Chatbot omnicanal que perfila clientes, sugiere propiedades compatibles, agenda visitas y hace seguimiento automático. Convierte cada consulta en un lead calificado.',
          benefits: [
            'Cero leads fríos',
            'Respuesta instantánea 24/7',
            'Mayor información para vendedores'
          ],
          value: 'Aumenta las chances de cierre con leads mejor calificados'
        },
        {
          id: 'descriptobot',
          title: 'DescriptoBot',
          summary: 'Genera descripciones atractivas y únicas para cada propiedad',
          description: 'A partir de datos básicos y fotos, crea textos únicos y atractivos adaptados a cada canal (formal para portales, dinámico para redes), incluyendo títulos y hashtags.',
          benefits: [
            'Descripciones únicas para cada propiedad',
            'Adaptado a diferentes canales',
            'Genera títulos y hashtags automáticamente'
          ],
          value: 'Decile chau a las descripciones genéricas'
        },
        {
          id: 'buscador-inteligente',
          title: 'Buscador Inteligente',
          summary: 'Búsqueda semántica que entiende lo que realmente busca el cliente',
          description: 'Sistema que permite buscar propiedades con texto libre como "algo en zona sur con patio y cochera, hasta 100 mil dólares", devolviendo las mejores coincidencias.',
          benefits: [
            'Facilita el trabajo del vendedor',
            'Cliente se siente entendido',
            'Encuentra propiedades que filtros tradicionales no detectan'
          ],
          value: 'Búsquedas más intuitivas y resultados más precisos'
        }
      ]
    },
    {
      id: 'concesionarias',
      name: 'Concesionarias',
      icon: Car,
      color: 'from-purple-500 to-indigo-600',
      useCases: [
        {
          id: 'smart-auto-agent',
          title: 'Smart Auto Agent',
          summary: 'Asistente de ventas omnicanal especializado en vehículos',
          description: 'Chatbot que atiende consultas sobre modelos, financiamiento y promociones, sugiere vehículos según preferencias y agenda test drives automáticamente.',
          benefits: [
            'Conversaciones 24/7',
            'Leads mejor cualificados',
            'Reduce carga del equipo de ventas'
          ],
          value: 'Engancha al cliente desde el primer contacto'
        },
        {
          id: 'postventa-automatica',
          title: 'Postventa Inteligente',
          summary: 'Automatiza recordatorios de service y seguimiento de clientes',
          description: 'Sistema automático para recordatorios de service, vencimiento de seguros, cambio de neumáticos, con integración al CRM y seguimiento personalizado.',
          benefits: [
            'Nunca más se olvida un service',
            'Mejora retención de clientes',
            'Aumenta ingresos por postventa'
          ],
          value: 'Mantiene a tus clientes siempre conectados con tu concesionaria'
        },
        {
          id: 'analisis-satisfaccion',
          title: 'Análisis de Satisfacción IA',
          summary: 'Mide y analiza la satisfacción del cliente con inteligencia artificial',
          description: 'Envía encuestas tras test drives y servicios, analiza texto libre con IA y mide NPS para detectar fallas en la experiencia del cliente.',
          benefits: [
            'Detecta problemas antes que se agraven',
            'Insights directos para mejorar',
            'Mide satisfacción automáticamente'
          ],
          value: 'Mejora continua basada en datos reales de tus clientes'
        }
      ]
    }
  ];

  const toggleIndustry = (industryId: string) => {
    setExpandedIndustry(expandedIndustry === industryId ? null : industryId);
  };

  return (
    <section id="use-cases" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-6">
            Casos de uso por <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">industria</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones específicas diseñadas para los desafíos únicos de cada sector
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          {industries.map((industry) => (
            <div key={industry.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              {/* Header de la industria */}
              <button
                onClick={() => toggleIndustry(industry.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${industry.color}`}>
                    <industry.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900">{industry.name}</h3>
                </div>
                {expandedIndustry === industry.id ? (
                  <ChevronUp className="h-6 w-6 text-gray-400" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-gray-400" />
                )}
              </button>

              {/* Contenido desplegable */}
              {expandedIndustry === industry.id && (
                <div className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industry.useCases.map((useCase) => (
                      <div
                        key={useCase.id}
                        className={`bg-gray-50 rounded-xl p-6 cursor-pointer transition-all duration-300 transform ${
                          hoveredCard === useCase.id 
                            ? 'scale-105 shadow-xl bg-white border-2 border-teal-200 z-10' 
                            : 'hover:shadow-lg'
                        }`}
                        onMouseEnter={() => setHoveredCard(useCase.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <h4 className="text-xl font-bold text-navy-900 mb-3">{useCase.title}</h4>
                        
                        {hoveredCard === useCase.id ? (
                          // Vista expandida
                          <div className="space-y-4">
                            <p className="text-gray-700 leading-relaxed">{useCase.description}</p>
                            <div>
                              <h5 className="font-semibold text-navy-900 mb-2">Beneficios:</h5>
                              <ul className="space-y-1">
                                {useCase.benefits.map((benefit, index) => (
                                  <li key={index} className="text-sm text-gray-600 flex items-start">
                                    <span className="text-teal-500 mr-2">•</span>
                                    {benefit}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-teal-50 rounded-lg p-3">
                              <p className="text-teal-700 font-semibold text-sm">{useCase.value}</p>
                            </div>
                          </div>
                        ) : (
                          // Vista resumida
                          <div>
                            <p className="text-gray-600 mb-4">{useCase.summary}</p>
                            <div className="bg-teal-50 rounded-lg p-3">
                              <p className="text-teal-700 font-semibold text-sm">{useCase.value}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA al final */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Tu industria no está en la lista?</h3>
            <p className="text-xl mb-6">Contanos sobre tu negocio y diseñamos una solución personalizada</p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  const offset = 100;
                  const elementPosition = contactSection.offsetTop - offset;
                  window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="bg-white text-teal-600 font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              Hablemos de tu proyecto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryUseCases;