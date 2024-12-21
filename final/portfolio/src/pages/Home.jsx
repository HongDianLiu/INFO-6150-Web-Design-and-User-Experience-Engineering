import "../styles/Home.css";
import pic1 from '../images/pic1.jpg';

function Home({ onNavigate }) {
    return (
        <div className="home">
            <div className="home-content">
                <h1>Hello, I'm HongDian Liu</h1>
                <p>A passionate front-end developer.</p>
                <button
                    onClick={() => onNavigate("contact")}
                    className="home-button"
                >
                    Contact Me
                </button>
            </div>
            <div className="home-image">
                <img src={pic1} alt="HongDian Liu" />
            </div>
        </div>
    );
}

export default Home;