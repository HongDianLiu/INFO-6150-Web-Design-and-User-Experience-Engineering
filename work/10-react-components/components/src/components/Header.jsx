import logo from '../images/logo.jpg';
import '../styles/Header.css';

function Header({ children }) {
  return (
    <header className="header">
      <img
        src={logo} 
        className="header__logo"
        alt="Feline Overlords Logo"
      />
      <h1 className="header__title">I welcome our Feline Overlords</h1>
      {children}
    </header>
  );
}

export default Header;
