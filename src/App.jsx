import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
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
            {currentPage === 'pay' && <div className="page-placeholder">Pay Page</div>}
            {currentPage === 'offers' && <div className="page-placeholder">Offers Page</div>}
            {currentPage === 'rewards' && <div className="page-placeholder">Rewards Page</div>}
            {currentPage === 'subscriptions' && <div className="page-placeholder">Subscriptions Page</div>}
            {currentPage === 'settings' && <Settings onShowBalance={handleShowBalance} />}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
