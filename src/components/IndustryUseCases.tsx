import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Stethoscope, Plane, Home, Car, X, ArrowRight } from 'lucide-react';

interface UseCase {
  id: string;
  title: string;
  summary: string;
  fullDescription: string;
  benefits: string[];
  value: string;
  whatItDoes: string[];
  whatItDoesnt: string[];
  requirements: string[];
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
  const [selectedUseCase, setSelectedUseCase] = useState<UseCase | null>(null);

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
          summary: 'Automatiza la codificación médica y facturación, eliminando errores humanos y acelerando el proceso de facturación.',
          fullDescription: 'Evita errores humanos al cargar códigos médicos. Acelera el proceso de facturación y minimiza rechazos de obras sociales.',
          benefits: [
            'Elimina errores de codificación médica',
            'Reduce rechazos de obras sociales',
            'Acelera el proceso de facturación',
            'Ahorro de tiempo del personal administrativo'
          ],
          value: 'Ahorra muchas horas semanales del personal administrativo',
          whatItDoes: [
            'A partir del texto de la orden médica o formulario cargado, sugiere automáticamente los códigos de facturación (ej. CIE-10, nomencladores de prácticas)',
            'Completa formularios de facturación en sistemas internos o externos',
            'Puede generar PDF o enviar por email'
          ],
          whatItDoesnt: [
            'No aprueba o rechaza prácticas',
            'No envía a obras sociales directamente, salvo integración específica'
          ],
          requirements: [
            'Base de datos con nomencladores (proveídos por la clínica o disponibles públicamente)',
            'Documentos de ejemplo para entrenar el sistema'
          ]
        },
        {
          id: 'asistente-virtual-clinica',
          title: 'Recepción IA',
          summary: 'Asistente virtual para clínicas que atiende consultas 24/7, reduce llamadas y mejora la experiencia del paciente.',
          fullDescription: 'Reduce las llamadas, demoras y errores en la atención al paciente antes del turno. Permite canalizar las preguntas típicas que suelen saturar la línea telefónica.',
          benefits: [
            'Reducción de llamadas y carga operativa',
            'Mejora de experiencia del paciente (respuesta instantánea)',
            'Trazabilidad de preguntas frecuentes para mejorar servicios'
          ],
          value: 'Resuelve gran parte de las consultas sin intervención humana',
          whatItDoes: [
            'Atiende consultas frecuentes: horarios, ubicación, coberturas aceptadas, formas de pago',
            'Informa disponibilidad y guía al paciente para sacar turnos',
            'Explica procesos: "¿Cómo saco un turno con un cardiólogo?", "¿Qué estudios necesito para una cirugía?"',
            'Deriva automáticamente consultas más complejas a recepción con resumen del motivo',
            'Turnero mediante chat'
          ],
          whatItDoesnt: [
            'No interpreta síntomas ni recomienda médicos específicos',
            'No accede al historial del paciente'
          ],
          requirements: [
            'Entrenamiento en el funcionamiento interno de la clínica (FAQ + flujos típicos)',
            'Canales: WhatsApp, Web, Email'
          ]
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
          summary: 'Motor de recomendaciones personalizado que evita que el cliente se sienta abrumado y aumenta las ventas cruzadas.',
          fullDescription: 'Evita que el cliente se sienta abrumado por opciones. Ofrece propuestas que suenan personalizadas y aumentan las chances de venta cruzada.',
          benefits: [
            'Aumenta tasa de conversión',
            'Reduce indecisión',
            'Potencial para upselling ("Ya que te gustó el rafting, ¿te interesaría canopy al día siguiente?")'
          ],
          value: 'Diseña la experiencia perfecta para cada viajero en menos de 60 segundos',
          whatItDoes: [
            'Presenta al cliente una pequeña encuesta o conversación guiada (WhatsApp, web, mail)',
            'Pregunta edad, cantidad de personas, presupuesto, intereses (naturaleza, aventura, relax)',
            'Pregunta preferencias (auto propio, caminatas, hotel o cabaña...)',
            'A partir de eso, recomienda 2 o 3 tours ajustados al perfil, con links y fotos',
            'Siempre que se requiera va a poder contactar un represante humano para cerrar la conversión'
          ],
          whatItDoesnt: [
            'No genera rutas GPS ni itinerarios automáticos (aunque se podría escalar a eso)',
            'No integra motores de reserva si no se solicita'
          ],
          requirements: [
            'Un catálogo de productos/tours bien estructurado',
            'Configuración de lógica de recomendación simple (tipo árbol de decisión + IA generativa para redacción personalizada)'
          ]
        },
        {
          id: 'contenido-redes-turismo',
          title: 'Posteá Sin Pensar',
          summary: 'Generador de contenido IA para redes sociales que ahorra tiempo al equipo de marketing y mejora la calidad del texto.',
          fullDescription: 'Muchas empresas no tienen un equipo de marketing para mantener actualizadas sus redes, por eso facilitamos el proceso de creación de contenido.',
          benefits: [
            'Ahorra tiempo al equipo de marketing',
            'Mejora la calidad del texto',
            'Mantiene el tono humano y natural'
          ],
          value: 'Publicaciones listas para vender, sin escribir ni una línea',
          whatItDoes: [
            'Toma la descripción del tour, fechas, fotos y genera textos para Instagram',
            'Genera respuestas a comentarios',
            'Crea descripciones breves para publicar en Despegar o sitios de terceros'
          ],
          whatItDoesnt: [
            'No maneja la publicación automática (requiere revisión humana)',
            'No genera imágenes, solo texto'
          ],
          requirements: [
            'Catálogo de tours con descripciones básicas',
            'Ejemplos del tono de comunicación deseado'
          ]
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
          summary: 'Chatbot omnicanal que perfila clientes, sugiere propiedades compatibles, agenda visitas y hace seguimiento automático. Convierte cada consulta en un lead calificado.',
          fullDescription: 'Asistente Conversacional Inmobiliario con lead intake + scoring + recomendador que transforma cada interacción en una oportunidad de venta.',
          benefits: [
            'Cero leads fríos',
            'Mayor engagement: responde instantáneamente, incluso fuera de horario',
            'Mejor información para vendedores = más chances de cerrar'
          ],
          value: 'Aumenta las chances de cierre con leads mejor calificados',
          whatItDoes: [
            'Recibe al usuario en WhatsApp, web o redes',
            'Le hace preguntas útiles para perfilarlo: qué busca, zona, presupuesto, urgencia, tipo de propiedad',
            'Guarda esa info ya procesada para el equipo comercial',
            'Mientras tanto, le sugiere propiedades compatibles (recomendador personalizado)',
            'Finalmente, agenda una llamada o una visita, y da seguimiento automático si no responde'
          ],
          whatItDoesnt: [
            'No reemplaza la visita presencial',
            'No cierra ventas automáticamente'
          ],
          requirements: [
            'Catálogo de propiedades actualizado',
            'Integración con calendarios (Google, Outlook)',
            'Opcional: integración con CRM para pasar leads en caliente'
          ]
        },
        {
          id: 'descriptobot',
          title: 'DescriptoBot',
          summary: 'Generador automático de descripciones que crea textos atractivos, únicos y adecuados al canal para cada propiedad.',
          fullDescription: 'Transforma datos básicos de propiedades en descripciones comerciales atractivas y únicas, adaptadas a cada canal de venta.',
          benefits: [
            'Descripciones únicas para cada propiedad',
            'Adaptado a diferentes canales (formal para portales, dinámico para redes)',
            'Genera títulos y hashtags automáticamente'
          ],
          value: 'Decile chau a las descripciones genéricas',
          whatItDoes: [
            'A partir de datos (ambientes, superficie, barrio, amenities) y fotos, genera textos atractivos',
            'Puede sugerir distintos estilos (comercial, narrativo, técnico)',
            'También genera títulos y hashtags para redes'
          ],
          whatItDoesnt: [
            'No toma fotos ni genera imágenes',
            'No publica automáticamente'
          ],
          requirements: [
            'Formulario de carga o integración con el sistema donde ya cargan propiedades',
            'IA generativa ajustada a tono y rubro'
          ]
        },
        {
          id: 'buscador-inteligente',
          title: 'Buscador Inteligente',
          summary: 'Búsqueda de propiedades usando lenguaje cotidiano en lugar de filtros tradicionales.',
          fullDescription: 'Sistema de búsqueda que entiende el lenguaje natural y encuentra propiedades que los filtros tradicionales no detectarían.',
          benefits: [
            'Facilita muchísimo el trabajo del vendedor',
            'Hace que el cliente se sienta entendido desde el minuto uno',
            'Encuentra coincidencias que filtros tradicionales no detectan'
          ],
          value: 'Búsquedas más intuitivas y resultados más precisos',
          whatItDoes: [
            'Permite buscar por texto libre: "Quiero algo en zona centro con patio y cochera, hasta 300 mil dólares"',
            'Puede estar embebido en el sitio o ser de uso interno para asesores comerciales',
            'Devuelve las mejores coincidencias'
          ],
          whatItDoesnt: [
            'No reemplaza tu sistema de búsquedas actual',
            'No reemplaza al agente inmobiliario, siempre va a existir la posibilidad de contactar a un humano'
          ],
          requirements: [
            'Se entrena un sistema RAG (retrieval augmented generation) con las propiedades disponibles',
            'Ideal si el listado está en Google Sheets, Notion, WordPress o CMS propio'
          ]
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
          summary: 'Asistente de ventas omnicanal disponible 24/7 que atiende consultas, sugiere vehículos y genera leads calificados.',
          fullDescription: 'Chatbot especializado en ventas automotrices que maneja todo el proceso desde la consulta inicial hasta el agendado del test drive.',
          benefits: [
            'Conversaciones 24/7, tus clientes se sacan dudas rápidamente',
            'Diferencia a tu empresa con las respuestas automáticas',
            'Reduce carga del equipo de ventas'
          ],
          value: 'Atrae y afianza al cliente desde el primer contacto',
          whatItDoes: [
            'Chatbot disponible en WhatsApp, web, Instagram, Facebook',
            'Atiende consultas: modelos disponibles, opciones de financiamiento, precios, promociones',
            'Sugiere vehículos según lo que pregunta el lead',
            'Captura datos clave (nombre, presupuesto, preferencia, urgencia)',
            'Integra con CRM y calendario para el turno de prueba o contacto físico'
          ],
          whatItDoesnt: [
            'No maneja transacciones financieras',
            'No cierra ventas ni reemplaza a tus mejores vendedores'
          ],
          requirements: [
            'Catálogo de vehículos actualizado',
            'Integración con CRM existente',
            'Sistema de calendario para test drives'
          ]
        },
        {
          id: 'postventa-automatica',
          title: 'Postventa Inteligente',
          summary: 'Automatización de postventa y recordatorios que mantiene a los clientes conectados con tu concesionaria.',
          fullDescription: 'Sistema automático que gestiona toda la comunicación post-venta para maximizar la retención y generar ingresos recurrentes.',
          benefits: [
            'Nunca más se olvida un service',
            'Mejora retención de clientes',
            'Aumenta ingresos por postventa',
            'Agenda turnos automáticamente'
          ],
          value: 'Mantiene a tus clientes siempre conectados con tu concesionaria',
          whatItDoes: [
            'Sistema automático para envío de recordatorios de service, vencimiento de seguro, cambio de neumáticos',
            'Turnero autommático por WhatsApp o Web Chat',
            'Integración con el chatbot para seguimiento de clientes o servicios'
          ],
          whatItDoesnt: [
            'No genera presupuestos automáticos',
            'No atiende consultas sobre problemas mecánicos'
          ],
          requirements: [
            'Base de datos de clientes con información de vehículos',
            'Integración con sistema de gestión existente'
          ]
        },
        {
          id: 'analisis-satisfaccion',
          title: 'Análisis de Satisfacción IA',
          summary: 'Mide y analiza la satisfacción del cliente con IA para detectar problemas y mejorar continuamente.',
          fullDescription: 'Sistema inteligente que recopila y analiza feedback de clientes para identificar oportunidades de mejora y prevenir problemas.',
          benefits: [
            'Detecta fallas en experiencia del cliente',
            'Da insights directos para mejorar procesos y calidad',
            'Previene problemas antes de que se agraven'
          ],
          value: 'Mejora continua basada en datos reales de tus clientes',
          whatItDoes: [
            'Envía encuestas tras test drives y servicios',
            'Usa IA para analizar texto libre ("¿Por qué no hiciste la compra?")',
            'Mide Net Promoter Score (calificación de recomendación) y segmenta insatisfacción'
          ],
          whatItDoesnt: [
            'No resuelve automáticamente los problemas detectados',
            'No contacta directamente a clientes insatisfechos'
          ],
          requirements: [
            'Sistema de envío de encuestas',
            'Base de datos de interacciones con clientes'
          ]
        }
      ]
    }
  ];

  const toggleIndustry = (industryId: string) => {
    setExpandedIndustry(expandedIndustry === industryId ? null : industryId);
  };

  const openModal = (useCase: UseCase) => {
    setSelectedUseCase(useCase);
  };

  const closeModal = () => {
    setSelectedUseCase(null);
  };

  return (
    <>
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
                          className="bg-gray-50 rounded-xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-white hover:border-2 hover:border-teal-200"
                          onClick={() => openModal(useCase)}
                        >
                          <h4 className="text-xl font-bold text-navy-900 mb-3">{useCase.title}</h4>
                          <p className="text-gray-700 leading-relaxed mb-4">{useCase.summary}</p>
                          
                          <div className="mb-4">
                            <h5 className="font-semibold text-navy-900 mb-2">Beneficios:</h5>
                            <ul className="space-y-1">
                              {useCase.benefits.slice(0, 3).map((benefit, index) => (
                                <li key={index} className="text-sm text-gray-600 flex items-start">
                                  <span className="text-teal-500 mr-2">•</span>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="bg-teal-50 rounded-lg p-3 mb-4">
                            <p className="text-teal-700 font-semibold text-sm">{useCase.value}</p>
                          </div>

                          <button className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                            <span>Ver detalles completos</span>
                            <ArrowRight className="h-4 w-4" />
                          </button>
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

      {/* Modal */}
      {selectedUseCase && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-navy-900">{selectedUseCase.title}</h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            
            <div className="p-6 space-y-6">
              {/* Descripción principal */}
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">¿Qué resuelve?</h3>
                <p className="text-gray-700 leading-relaxed">{selectedUseCase.fullDescription}</p>
              </div>

              {/* Qué hace */}
              <div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">¿Qué hace concretamente?</h3>
                <ul className="space-y-2">
                  {selectedUseCase.whatItDoes.map((item, index) => (
                    <li key={index} className="text-gray-700 flex items-start">
                      <span className="text-teal-500 mr-3 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Qué no hace */}
              {selectedUseCase.whatItDoesnt.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">¿Qué no hace?</h3>
                  <ul className="space-y-2">
                    {selectedUseCase.whatItDoesnt.map((item, index) => (
                      <li key={index} className="text-gray-700 flex items-start">
                        <span className="text-red-500 mr-3 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Requisitos */}
              {selectedUseCase.requirements.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">Requiere:</h3>
                  <ul className="space-y-2">
                    {selectedUseCase.requirements.map((item, index) => (
                      <li key={index} className="text-gray-700 flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Valor para la empresa */}
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-navy-900 mb-3">Valor para tu empresa:</h3>
                <div className="space-y-2">
                  {selectedUseCase.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <span className="text-teal-500 mr-3 mt-1">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-4 bg-white rounded-lg">
                  <p className="text-teal-700 font-bold text-lg">{selectedUseCase.value}</p>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center pt-6 border-t border-gray-200">
                <button 
                  onClick={() => {
                    closeModal();
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
                  className="bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold px-8 py-3 rounded-full hover:from-teal-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Quiero implementar esta solución
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IndustryUseCases;