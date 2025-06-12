import React, { useState, useEffect } from 'react';
import { TrendingUp, Clock, Users, DollarSign, Bot, Zap } from 'lucide-react';

const StatsSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: Users,
      stat: "80%",
      text: "de los casos de atención al cliente con nuestro AI Chatbot",
      highlight: "Resolvemos hasta un"
    },
    {
      icon: Clock,
      stat: "60 horas",
      text: "semanales automatizando tareas repetitivas",
      highlight: "Ahorrás hasta"
    },
    {
      icon: TrendingUp,
      stat: "10 veces",
      text: "más simples con bases de datos inteligentes",
      highlight: "Búsquedas"
    },
    {
      icon: Bot,
      stat: "24/7",
      text: "atención al cliente automática que nunca duerme",
      highlight: "Servicio"
    },
    {
      icon: Zap,
      stat: "cientos de horas",
      text: "moviendo datos entre planillas",
      highlight: "Te ahorramos"
    },
    {
      icon: Zap,
      stat: "tiempo a tus empleados",
      text: "explicándole al nuevo con un chatbot interno",
      highlight: "Ahorrale"
    }
  ]; 

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-10 max-w-2xl mx-auto">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <div className="flex items-center justify-center space-x-4">
                <slide.icon className="h-8 w-8 text-teal-400 flex-shrink-0" />
                <p className="text-lg md:text-xl font-semibold text-center">
                  {slide.highlight} <span className="text-teal-400 font-bold text-2xl">{slide.stat}</span> {slide.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Indicadores */}
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-teal-400 w-6' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsSlider;