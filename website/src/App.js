import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Home from './components/Home';
import Education from './components/Education/education';
import Experience from './components/Experience/experience';
import Projects from './components/Projects/projects';

function App() {
  return (
    <Router>
        <NavBar/>
        <Home/>
        <Education/>
        <Experience/>
        <Projects/>
    </Router>
  );
}

export default App;
