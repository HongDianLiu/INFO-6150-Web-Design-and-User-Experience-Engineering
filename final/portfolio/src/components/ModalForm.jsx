import { useRef, useEffect } from "react";
import "../styles/ModalForm.css";

function ModalForm({ content, isOpen, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen]);

  function handleKeyDown(event) {
    if (event.key === "Escape") {
      onClose();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      onKeyDown={handleKeyDown}
    >
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <div className="modal-content">
        {content === "phone" && <p>Phone: +1 857-498-1674</p>}
        {content === "email" && <p>Email: liu.hongd@northeastern.edu</p>}
        {content === "linkedin" && (
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/hongdian-liu-rs6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              hongdian-liu
            </a>
          </p>
        )}
      </div>
    </dialog>
  );
}

export default ModalForm;