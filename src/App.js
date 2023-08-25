import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Middle from './components/Middle/Middle';
import TechStacks from './components/TechStacks/TechStacks';
import Projects from './components/Projects/Projects';
import MBT from './components/MBT/MBT';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div id='aboutme'>
        <Middle />
      </div>
      <TechStacks />
      <div id='myprojects'>
        <Projects />
      </div>
      <div id='beyondtech'>
        <MBT />
      </div>
      <div id='contactme'>
        <Contact />
      </div>
    </div>
  );
}

export default App;
