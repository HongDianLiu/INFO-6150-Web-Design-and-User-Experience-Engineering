import "../styles/HamburgerMenu.css";

function HamburgerMenu() {
    function toggleMenu(event) {
        const menu = event.target.nextElementSibling;
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    }

    return (
        <nav className="hamburger-menu">
            <ul className="hamburger-list" style={{ display: "none" }}>
                <li><a href="#home">Home</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default HamburgerMenu;