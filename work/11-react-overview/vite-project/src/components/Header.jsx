function Header({ setPage }) {
    function navigateTo(e, path) {
        e.preventDefault();
        window.history.pushState(null, '', path);
        setPage(path);
    }
  
    return (
        <header>
            <a href="/" onClick={(e) => navigateTo(e, '/')}>Home</a>
            <a href="/profile" onClick={(e) => navigateTo(e, '/profile')}>Profile</a>
        </header>
    );
}
  
export default Header;