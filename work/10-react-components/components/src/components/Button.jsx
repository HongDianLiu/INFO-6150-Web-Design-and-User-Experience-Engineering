import '../styles/Button.css';

function Button({ 
  children, 
  className,
  onClick, 
  type="button",
  visual="button",
}) { 
  let buttonClass = "button";
  if (visual === "link") { 
    buttonClass = "button-link";
  }
  return (
    <button 
      className={`${buttonClass} ${className}`}
      disabled={disabled} type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;