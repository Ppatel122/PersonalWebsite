
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import Home from './pages';
import Education from './pages/education';
import Experience from './pages/experience';
import Projects from './pages/projects';

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
