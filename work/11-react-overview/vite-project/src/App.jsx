import { useState, useEffect } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';

function App() {
  const [page, setPage] = useState(document.location.pathname); 
  const [profileData, setProfileData] = useState({
    username: 'Danny',
    actualName: 'Danny',
    profilePic: '/images/pic1.png',
    isDogFree: true,
  });

  useEffect(() => {
    function handlePageLoad() {
      setPage(document.location.pathname);
    }

    window.addEventListener('popstate', handlePageLoad);

    return () => {
      window.removeEventListener('popstate', handlePageLoad);
    };
  }, []);

  function renderPage() {
    if (page === '/') {
      return <HomePage profileData={profileData} navigateToProfile={() => setPage('/profile')} />;
    } else if (page === '/profile') {
      return <ProfilePage profileData={profileData} setProfileData={setProfileData} />;
    } else {
      return <div>404 - Page Not Found</div>;
    }
  }

  return (
    <div>
      <Header
        setPage={setPage}
        profileData={profileData}
      />
      {renderPage()}
    </div>
  );
}

export default App;