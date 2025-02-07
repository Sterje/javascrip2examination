import { NavLink, Link } from "react-router-dom"; 
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice"; // Importerar toggleTheme från themeSlice för att byta tema
import './Navbar.css';
import lightImage from "../assets/day.png"; // Importerar bild för ljust tema
import darkImage from "../assets/night.png"; // Importerar bild för mörkt tema

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false); // useState används för menyn i mobilläge, förvalt läge är false, alltså stängd.
    const dispatch = useDispatch(); // Hämtar dispatch funktion från Redux
    const theme = useSelector((state) => state.theme.theme); // Hämtar tema från Redux store

    const handleLinkClick = () => { // funktion för att hantera "hamburgermenyn"
        setMenuOpen(false); // Stänger menyn vid klick
    };

    return (
        <nav className={theme}>
            <Link to="/" className="title">STERJE</Link>
            {/* Hamburgermenyn i mobilläge: */}
            <div 
                className="menu"
                onClick={() => setMenuOpen(!menuOpen)}  // Växlar mellan öppen och stängd meny
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            {/* Sätter className open om menyn är öppen */}
            <ul className={menuOpen ? "open" : ""}> 
                {/* Navigeringslänkar för att hålla koll på vilken sida man är på, sätter klassen .active */}
                <li><NavLink to="/contact" onClick={handleLinkClick}>Contact</NavLink></li>
                <li><NavLink to="/about" onClick={handleLinkClick}>About</NavLink></li>
                <li><NavLink to="/projects" onClick={handleLinkClick}>Projects</NavLink></li>
                <img
                //Ikonen växlar beroende på vilket tema som är valt.
                src={theme === "light" ? darkImage : lightImage}
                alt="Theme Toggle"
                className="theme-toggle"
                onClick={() => {
                    handleLinkClick(); // Kör handleLinkClick, alltså stänger menyn vid klick.
                    dispatch(toggleTheme()); // Byter tema med Redux
                  }}
                 
            />
            </ul>
        </nav>
    );
}

export default Navbar;
