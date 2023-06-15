import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import About from './components/About';
import Achievements from './components/Achievements';


function App() {
  return (

   <h1>
   <Home />
    <Navbar/>
    <About/>
    <Projects />
    <Skills />
    <Achievements/>
    <Contact />
    </h1>
  
  );
}

export default App;
