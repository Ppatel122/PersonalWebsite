
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Home from './pages';
import Education from './pages/education';
import Experience from './pages/experience';
import Projects from './pages/projects';

function App() {
  return (
    <Router>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/education' element={<Education/>} />
            <Route path='/experience' element={<Experience/>} />
            <Route path='/projects' element={<Projects/>} />
        </Routes>
    </Router>
  );
}

export default App;
