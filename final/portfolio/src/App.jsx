import { useState } from "react";
import Navbar from "./components/Navbar";
import HamburgerMenu from "./components/HamburgerMenu";
import ThemeToggle from "./components/ThemeToggle";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import "./app.css";

function App() {
    const [theme, setTheme] = useState("light");
    const [currentPage, setCurrentPage] = useState("home");

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
        document.body.className = theme === "light" ? "dark-mode" : "";
    }

    function navigateTo(page) {
        setCurrentPage(page);
    }

    return (
        <div className={`app ${theme}`}>
            <header>
                <button
                    className="skip-link"
                    onClick={() => navigateTo("home")}
                >
                    Skip to Home Page
                </button>
                <Navbar onNavigate={navigateTo} />
                <HamburgerMenu onNavigate={navigateTo} />
                <ThemeToggle toggleTheme={toggleTheme} />
            </header>
            <main id="content">
                {currentPage === "home" && <Home onNavigate={navigateTo} />}
                {currentPage === "gallery" && <Gallery />}
                {currentPage === "contact" && <Contact />}
            </main>
            <footer>
                <p>&copy; 2024 My Portfolio</p>
            </footer>
        </div>
    );
}

export default App;