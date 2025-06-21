import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import UseCases from './components/UseCases';
import IndustryUseCases from './components/IndustryUseCases';
import Team from './components/Team';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Navigation />
      <Hero />
      <About />
      <Process />
      <UseCases />
      <IndustryUseCases />
      <Team />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;