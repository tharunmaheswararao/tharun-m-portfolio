import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import Fire from './components/Fire';
import About from './components/about';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App overflow-hidden">
		<Navbar />
		<Hero />
    {/* <Fire /> */}
    <About />
    <Skills />
    <Achievements />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
