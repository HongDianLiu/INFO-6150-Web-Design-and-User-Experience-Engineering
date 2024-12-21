import { useState } from "react";
import "../styles/Contact.css";
import ModalForm from "../components/ModalForm";

function Contact() {
  const [modalContent, setModalContent] = useState(null);

  function openModal(content) {
    setModalContent(content);
  }

  function closeModal() {
    setModalContent(null);
  }

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Click on the buttons below to see my contact details!</p>
      <div className="contact-buttons">
        <button onClick={() => openModal("phone")} className="open-modal-button">
          Phone
        </button>
        <button onClick={() => openModal("email")} className="open-modal-button">
          Email
        </button>
        <button
          onClick={() => openModal("linkedin")}
          className="open-modal-button"
        >
          LinkedIn
        </button>
      </div>
      <ModalForm
        content={modalContent}
        isOpen={modalContent !== null}
        onClose={closeModal}
      />
    </div>
  );
}

export default Contact;