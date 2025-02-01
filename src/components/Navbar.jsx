import { NavLink, Link } from "react-router-dom"
import { useState } from "react"
import './Navbar.css'

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
      <nav>
        <Link to ="/" className="title">Website</Link>
        <div 
            className="menu"
            onClick={() => {
                setMenuOpen(!menuOpen);
            }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li>
                <NavLink to="/me">Me</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/projects">Projects</NavLink>
            </li>
        </ul>
      </nav>
    )
}
