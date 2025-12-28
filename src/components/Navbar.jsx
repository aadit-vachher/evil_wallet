import { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'pay', label: 'Pay' },
    { id: 'offers', label: 'Offers' },
    { id: 'rewards', label: 'Rewards' },
    { id: 'subscriptions', label: 'Subscriptions' },
    { id: 'settings', label: 'Settings' }
  ];

  const handleNavClick = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>Evil Wallet</h2>
      </div>
      <button 
        className="hamburger" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <li 
            key={item.id}
            className={currentPage === item.id ? 'active' : ''}
            onClick={() => handleNavClick(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
