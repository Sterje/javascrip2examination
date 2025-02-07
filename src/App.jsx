import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import userInfo from './components/userInfo'; // Importerar information från userInfo
import './App.css'; 

function App() {
    const theme = useSelector((state) => state.theme); // Hämta temat från Redux

    return (
        <section className={`app ${theme}`}>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                {/* Skicka userInfo som en prop till About */}
                <Route path="/about" element={<About user={userInfo} />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </section>
    );
}

export default App;
