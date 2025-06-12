import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: "Alejo Rivera",
      role: "Co-fundador y Especialista en Producto",
      description: "Aporta una visión creativa y una profunda pasión por la innovación al equipo de AndinIA. Con una trayectoria que abarca desde la creación de comunidades digitales hasta la venta de productos en línea. Después de finalizada su tecnicatura hizo una especialización en desarrollo de interfaces y gestión de productos. \n Lo que lo llevó a desarrollar soluciones para diferentes emprendimientos y hacer proyectos junto a Matías. Alejo se asegura de que cada solución de IA no solo sea tecnológicamente avanzada, sino también intuitiva y centrada en las necesidades del usuario, garantizando una adopción fluida y resultados tangibles para su negocio",
      image: "https://i.ibb.co/XrwRP63D/1706900022566.jpg"
    },
    {
      name: "Matías Apablaza", 
      role: "Co-fundador y Experto en IA",
      description: "Es la fuerza técnica detrás de las soluciones de vanguardia de AndinIA. Su pasión por la tecnología y la innovación lo ha llevado a destacarse en concursos internacionales (Google Science Fair e Intel ISEF) y a especializarse en inteligencia artificial y automatización de procesos en su formación como ingeniero informático. \n Su experiencia reciente en MercadoPago, donde desarrolló agentes conversacionales que resuelven el 80% de los casos de soporte, demuestra su capacidad para implementar soluciones de IA de alto impacto que optimizan operaciones y generan valor real para las empresas.",
      image: "https://i.ibb.co/Z6xQm661/1721315684336.jpg"
    }
  ];
 {/* todo: Separar los parrafos */}
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-6">
            El equipo detrás de la innovación
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Profesionales neuquinos comprometidos con el éxito de tu empresa
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-navy-900 mb-2">{member.name}</h3>
                <p className="text-teal-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{member.description}</p>
                <div className="flex space-x-4">
                  <button className="p-2 bg-gray-100 hover:bg-teal-500 hover:text-white rounded-full transition-colors duration-300">
                    <Linkedin className="h-5 w-5" />
                  </button>
                  <button className="p-2 bg-gray-100 hover:bg-navy-900 hover:text-white rounded-full transition-colors duration-300">
                    <Github className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;