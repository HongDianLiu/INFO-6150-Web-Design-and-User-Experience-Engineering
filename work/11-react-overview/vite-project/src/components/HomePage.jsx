import { useState } from 'react';
import logo from '/images/logo.jpg';

function HomePage({ navigateToProfile, profileData }) {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible((prev) => !prev); 
    };

    return (
        <div className="page">
            <header className="homepage-header">
                <img
                    src={logo}
                    alt="Logo"
                    className="homepage-logo"
                    onClick={() => window.location.href = '/'} 
                />
                <div className="profile-container">
                    <img
                        src={profileData.profilePic}
                        alt="Profile"
                        className="profile-pic"
                        onClick={toggleDropdown} 
                        aria-haspopup="true"
                        aria-expanded={isDropdownVisible} 
                    />
                    {isDropdownVisible && ( 
                        <div className="dropdown">
                            <div className={profileData.isDogFree ? 'fabulous' : ''}>
                                {profileData.username}
                            </div>
                            <button
                                onClick={() => {
                                    setIsDropdownVisible(false);
                                    navigateToProfile(); 
                                }}
                            >
                                Profile Settings
                            </button>
                        </div>
                    )}
                </div>
            </header>
            <main>
                <h1>Welcome to the Home Page</h1>
                <p>
                    Explore our amazing features and learn how we can help you achieve your goals.
                    Discover a wide range of resources tailored to your needs.
                </p>
            </main>
        </div>
    );
}

export default HomePage;