import "../styles/ThemeToggle.css";

function ThemeToggle({ toggleTheme }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleTheme();
    }
  };

  return (
    <div
      className="theme-toggle"
      tabIndex="0"
      role="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      onKeyDown={handleKeyDown}
    >
      <span className="theme-icon" aria-hidden="true">
        {document.body.classList.contains("dark-mode") ? "🌙" : "☀️"}
      </span>
    </div>
  );
}

export default ThemeToggle;