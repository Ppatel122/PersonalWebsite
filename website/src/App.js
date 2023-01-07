import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Particle from './components/Home/particle';
import Home from './components/Home';
import Education from './components/Education/education';
import Skills from './components/Skills/skills'
import Experience from './components/Experience/experience';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact'

function App() {
  return (
    <Router>
        <NavBar/>
        <Particle/>
        <Home/>
        <Education/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
    </Router>
  );
}

export default App;
