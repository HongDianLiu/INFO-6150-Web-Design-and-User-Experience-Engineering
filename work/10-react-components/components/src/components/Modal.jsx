import { useState, forwardRef, useEffect } from 'react';
import '../styles/Modal.css';

const Modal = forwardRef(({ catName, lastSubmittedValue, onSubmit, onClose }, ref) => {
  const [inputValue, setInputValue] = useState(lastSubmittedValue || '');

  useEffect(() => {
    setInputValue(lastSubmittedValue || '');
  }, [lastSubmittedValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(inputValue);
    }
    onClose();
  };

  const handleClose = () => {
    setInputValue('');
    onClose();
  };

  return (
    <dialog ref={ref} className="modal">
      <h2>Subscribe to {catName}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Enter Your Name: </label>
        <input
          type="text"
          id="input"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type something..."
        />
        <div className="button-container">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleClose}>Close</button>
        </div>
      </form>
    </dialog>
  );
});

export default Modal;