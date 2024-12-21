import { useState } from 'react';
import menu from './menu';
import '../styles/GlobalNav.css';

function GlobalNav({ navToHash, className }) {
  const [showMenu, setShowMenu] = useState(false);

  const list = menu.map((item) => (
    <li key={item.name} className="global-nav__item">
      <button
        className="global-nav__link"
        onClick={(e) => {
          navToHash(item.path); 
          setShowMenu(false);   
        }}
      >
        {item.name}
      </button>
    </li>
  ));

  return (
    <nav className={`global-nav ${className}`}>
      <button
        className="global-nav__hamburger"
        onClick={() => setShowMenu(!showMenu)}
        aria-label="Toggle navigation"
      >
        {showMenu ? "✖" : "☰"}
      </button>
      <ul className={`global-nav__list ${showMenu ? 'global-nav__list--open' : 'global-nav__list--closed'}`}>
        {list}
      </ul>
    </nav>
  );
}

export default GlobalNav;