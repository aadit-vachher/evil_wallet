import { useState, useEffect } from 'react';
import '../styles/OfferHero.css';

const OfferHero = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 14, seconds: 32 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="offer-hero">
      <div className="hero-card primary-offer">
        <div className="offer-content">
          <h2>Cashback Available</h2>
          <div className="amount">₹1,480</div>
          <p className="offer-subtitle">Use now before it expires</p>
          <div className="timer">
            <span className="timer-label">Benefits expiring in</span>
            <div className="timer-display">
              <span className="time-unit">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="separator">:</span>
              <span className="time-unit">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="separator">:</span>
              <span className="time-unit">{String(timeLeft.seconds).padStart(2, '0')}</span>
            </div>
          </div>
          <button className="claim-btn">Claim Now</button>
        </div>
      </div>
    </div>
  );
};

export default OfferHero;
