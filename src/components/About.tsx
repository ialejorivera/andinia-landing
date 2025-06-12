import React from 'react';
import { Cpu, Zap, Target, Brain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Elementos decorativos tecnológicos */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-teal-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-blue-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-teal-400 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 border border-blue-400 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full mb-6">
            <Cpu className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-6">
            Qué es <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">AndinIA</span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Texto principal */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              <strong className="text-navy-900">AndinIA</strong> es una consultora de automatización e inteligencia artificial nacida en Neuquén, con la pasión de innovar y transformar la forma en que las empresas interactúan con sus datos y clientes.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Somos <span className="text-teal-600 font-semibold">pioneros en la región</span>, ofreciendo la infraestructura y el conocimiento técnico para desarrollar agentes y automatizar procesos con Inteligencia artificial, algo único en el mercado local.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              Nuestra <span className="text-blue-600 font-semibold">visión a largo plazo</span> es acompañar a las empresas neuquinas en la adopción de tecnologías que están cambiando el mundo, asegurando que puedan competir y prosperar en un entorno cada vez más digitalizado. No queremos que se queden atrás, sino que adquieran las ventajas que les permitirán competir con cualquier otra empresa que ya cuente con estas herramientas.
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Detrás de AndinIA, somos <span className="text-teal-600 font-semibold">dos neuquinos</span>, con una larga trayectoria de proyectos en conjunto. Queremos expandir nuestras raíces y transformar hacia el futuro una ciudad con tanto potencial como la nuestra.
            </p>
          </div>

          {/* Elementos destacados */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Pioneros</h3>
              <p className="text-gray-600">Únicos en la región con infraestructura y conocimiento técnico</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">Visión</h3>
              <p className="text-gray-600">Transformar empresas neuquinas hacia el futuro digital</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">IA Avanzada</h3>
              <p className="text-gray-600">Agentes inteligentes que revolucionan tu negocio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;