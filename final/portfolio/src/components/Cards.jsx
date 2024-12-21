import "../styles/Cards.css";

function Cards({ title, description, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
        </div>
    );
}

export default Cards;