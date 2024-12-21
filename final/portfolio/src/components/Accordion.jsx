import { useEffect, useRef } from "react";
import "../styles/Accordion.css";

function Accordion({ title, children, isOpen, onToggle }) {
    const accordionRef = useRef(null);

    useEffect(() => {
        if (isOpen && accordionRef.current) {
            accordionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, [isOpen]);

    return (
        <div ref={accordionRef} className={`accordion ${isOpen ? "open" : ""}`}>
            <button className="accordion-button" onClick={onToggle}>
                {title}
            </button>
            {isOpen && <div className="accordion-content">{children}</div>}
        </div>
    );
}

export default Accordion;