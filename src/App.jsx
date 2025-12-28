import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Offers from './pages/Offers';
import Rewards from './pages/Rewards';
import Subscriptions from './pages/Subscriptions';
import Settings from './pages/Settings';
import AccountBalance from './pages/AccountBalance';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showBalancePage, setShowBalancePage] = useState(false);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    setShowBalancePage(false);
  };

  const handleShowBalance = () => {
    setShowBalancePage(true);
  };

  const handleBackFromBalance = () => {
    setShowBalancePage(false);
  };

  return (
    <div className="app">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="main-content">
        {showBalancePage ? (
          <AccountBalance onBack={handleBackFromBalance} />
        ) : (
          <>
            {currentPage === 'home' && <Home />}
            {currentPage === 'offers' && <Offers />}
            {currentPage === 'rewards' && <Rewards />}
            {currentPage === 'subscriptions' && <Subscriptions />}
            {currentPage === 'settings' && <Settings onShowBalance={handleShowBalance} />}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
