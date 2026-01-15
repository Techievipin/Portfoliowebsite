import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Military from './components/Military';
import Skills from './components/Skills';
import Work from './components/Work';
import School from './components/School';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import LocationMap from './components/LocationMap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Military />
      <Skills />
      <Work />
      <School />
      <CallToAction />
      <Contact />
      <LocationMap />
      <Footer />
    </div>
  );
}

export default App;