import { useState } from "react";
import "../styles/Navbar.css";

function Navbar({ onNavigate }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigation = (target) => {
        onNavigate(target);
        setIsMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="navbar-left">
                <h1>HD Liu</h1>
            </div>
            <button
                className="hamburger-button"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? "✕" : "☰"}
            </button>
            <nav className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
                <ul className="nav-list">
                    <li>
                        <a href="#home" onClick={() => handleNavigation("home")}>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#gallery" onClick={() => handleNavigation("gallery")}>
                            Gallery
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={() => handleNavigation("contact")}>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;