import { useState } from "react";
import "../styles/Carousel.css";
import Cards from "./Cards";

function Carousel({ cardsData, onProjectClick }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    function nextSlide() {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    }

    function prevSlide() {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cardsData.length) % cardsData.length);
    }

    return (
        <div className="carousel">
            <button onClick={prevSlide} className="carousel-button left">
                &#8249;
            </button>
            <div className="carousel-wrapper">
                <div
                    className="carousel-items"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {cardsData.map((data, index) => (
                        <div
                            className="carousel-item"
                            key={index}
                            onClick={() => onProjectClick(data.id)} 
                        >
                            <Cards title={data.title} description={data.description} />
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={nextSlide} className="carousel-button right">
                &#8250;
            </button>
        </div>
    );
}

export default Carousel;