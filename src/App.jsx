import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import './App.css'; // Se till att ha CSS för teman


function App() {
    const theme = useSelector((state) => state.theme); // Hämta temat från Redux

    return (
        <div className={`app ${theme}`}>
            <Navbar />
            

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </div>
    );
}

export default App;
