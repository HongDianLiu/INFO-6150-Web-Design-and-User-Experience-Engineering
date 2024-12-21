import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainArea from './components/MainArea';
import GlobalNav from './components/GlobalNav';
import Home from './pages/Home';
import About from './pages/About';
import Cards from './pages/Cards';
import './styles/main.css';

function App() {
  const [page, setPage] = useState('#home');
  const [lastSubmittedValue, setLastSubmittedValue] = useState('');

  function navToHash(eventOrHash) {
    const hash = eventOrHash.preventDefault ? eventOrHash.target.hash : eventOrHash;
    setPage(hash);
  }

  function handleModalSubmit(value) {
    setLastSubmittedValue(value); 
    console.log("Submitted Value:", value);
  }

  return (
    <>
      <Header>
        <GlobalNav navToHash={navToHash} />
      </Header>

      <MainArea>
        {page === '#home' && <Home />}
        {page === '#cards' && <Cards navToHash={navToHash} onModalSubmit={handleModalSubmit} lastSubmittedValue={lastSubmittedValue} />}
        {page === '#about' && <About />}
      </MainArea>

      <Footer />
    </>
  );
}

export default App;