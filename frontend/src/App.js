import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import About from './components/About';
import Achievements from './components/Achievements';

function App() {
  return (

   <h1 className="text-3xl font-bold underline">
    AARAMBIKALAMA !
    <Home />
    <Projects />
    <Skills />
    <About/>
    <Achievements/>
    <Contact />
    </h1>
  
  );
}

export default App;
