import React, { useState } from 'react';
import { Calendar, CheckCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset después de 3 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', company: '', email: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-navy-900 mb-4">¡Listo!</h2>
            <p className="text-xl text-gray-600 mb-6">
              Recibimos tu solicitud. Te contactaremos en las próximas 24 horas para coordinar tu llamada gratuita.
            </p>
            <p className="text-gray-500">
              Mientras tanto, preparate para contarnos sobre los desafíos de tu empresa.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 mb-6">
              Empezá a automatizar hoy
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Agendá una llamada gratuita de 30 minutos y descubrí cómo podemos transformar tu negocio
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Beneficios de la llamada */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">En esta llamada vas a obtener:</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-teal-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Diagnóstico gratuito de tus procesos actuales</p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-teal-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Plan personalizado de automatización para tu empresa</p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-teal-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Estimación de ahorro de tiempo y costos</p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-teal-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Roadmap de implementación sin compromiso</p>
                </div>
              </div>
            </div>
            
            {/* Formulario */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tu nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    placeholder="Juan Pérez"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tu empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    placeholder="Mi Empresa SRL"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors"
                    placeholder="juan@miempresa.com"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
                >
                  <Calendar className="h-6 w-6" />
                  <span>Agendá tu llamada gratuita</span>
                </button>
                
                <p className="text-xs text-gray-500 text-center">
                  Sin compromiso. Llamada de 30 minutos máximo.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;