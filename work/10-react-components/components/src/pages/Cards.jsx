import React, { useState, useRef } from 'react';
import Modal from '../components/Modal';
import FuryCatImage from '../images/fury-cat.jpg';
import GrayCatImage from '../images/gray-cat.jpg';
import OrangeCatImage from '../images/orange-cat.jpg';
import YellowCatImage from '../images/yellow-cat.jpg';
import ElegantCatImage from '../images/elegant-cat.jpg';
import GreyCatImage from '../images/grey-cat.jpg';

const Cards = ({ navToHash, onModalSubmit, lastSubmittedValue }) => {
  const [selectedCat, setSelectedCat] = useState(null);
  const modalRef = useRef(null);

  const openModal = (catName) => {
    setSelectedCat(catName);
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
    setSelectedCat(null);
  };

  const catData = [
    { name: "Fury Cat", description: "Fury Cat became famous for her perpetually grumpy expression.", img: FuryCatImage },
    { name: "Gray Cat", description: "This cat is a musical internet sensation.", img: GrayCatImage },
    { name: "Orange Cat", description: "Known for his striking color and laid-back attitude.", img: OrangeCatImage },
    { name: "Yellow Cat", description: "Captures hearts with inquisitive eyes.", img: YellowCatImage },
    { name: "Elegant Cat", description: "Elegant Cat shows feline grace.", img: ElegantCatImage },
    { name: "Go to Home", description: "Navigate to the Home page.", img: GreyCatImage, path: "#home" },
  ];

  return (
    <main id="main" className="main-content">
      {catData.map((cat) => (
        <div key={cat.name} className="cat-card">
          <h2>{cat.name}</h2>
          <img src={cat.img} alt={cat.name} />
          <p className="description">{cat.description}</p>
          {cat.path ? (
            <button
              className="subscribe-link"
              onClick={() => navToHash(cat.path)}
            >
              {cat.name} Page
            </button>
          ) : (
            <button className="subscribe-link" onClick={() => openModal(cat.name)}>Subscribe</button>
          )}
        </div>
      ))}

      <Modal 
        ref={modalRef} 
        catName={selectedCat} 
        onSubmit={onModalSubmit} 
        lastSubmittedValue={lastSubmittedValue}
        onClose={closeModal} 
      />
    </main>
  );
};

export default Cards;