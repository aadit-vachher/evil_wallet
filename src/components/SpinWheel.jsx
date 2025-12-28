import { useState } from 'react';
import '../styles/SpinWheel.css';

const SpinWheel = ({ compact = false }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState(null);
  const [canSpin, setCanSpin] = useState(true);

  const prizes = [
    { name: 'iPhone', color: '#ffd700', icon: '📱' },
    { name: '₹500 ', color: '#ffed4e', icon: '🎁' },
    { name: 'Bonus', color: '#ffd700', icon: '💰' },
    { name: '₹1000', color: '#ffed4e', icon: '🎫' },
    { name: '2xRewards', color: '#ffd700', icon: '⭐' },
    { name: '₹100 ', color: '#ffed4e', icon: '💵' },
    { name: 'VIP', color: '#ffd700', icon: '👑' },
    { name: '₹200', color: '#ffed4e', icon: '💸' }
  ];

  const handleClaimReward = () => {
    setResult(null);
  };

  const handleSpin = () => {
    if (!canSpin || isSpinning) return;

    setIsSpinning(true);
    setResult(null);
    setCanSpin(false);

    // Random spins between 5-8 full rotations plus random segment
    const minSpins = 5;
    const maxSpins = 8;
    const spins = Math.floor(Math.random() * (maxSpins - minSpins + 1)) + minSpins;
    const segmentAngle = 360 / prizes.length;
    const randomSegment = Math.floor(Math.random() * prizes.length);
    const finalRotation = spins * 360 + randomSegment * segmentAngle;

    setRotation(rotation + finalRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setResult(prizes[randomSegment]);
      
      // Allow spin again after 3 seconds
      setTimeout(() => {
        setCanSpin(true);
      }, 3000);
    }, 4000);
  };

  return (
    <div className={`spin-wheel-container ${compact ? 'compact' : ''}`}>
      {!compact && (
        <>
          <h3 className="wheel-title">Lucky Spin</h3>
          <p className="wheel-subtitle">Spin now for exclusive rewards</p>
        </>
      )}
      
      <div className="wheel-wrapper">
        <div className="wheel-pointer">▼</div>
        <div 
          className="wheel"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning ? 'transform 4s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'none'
          }}
        >
          {prizes.map((prize, index) => {
            const angle = (360 / prizes.length) * index;
            return (
              <div
                key={index}
                className="wheel-segment"
                style={{
                  transform: `rotate(${angle}deg)`,
                  background: prize.color
                }}
              >
                <div className="segment-content">
                  <span className="prize-icon">{prize.icon}</span>
                  <span className="prize-name">{prize.name}</span>
                </div>
              </div>
            );
          })}
          <div className="wheel-center">
            <div className="wheel-center-inner">SPIN</div>
          </div>
        </div>
      </div>

      <button 
        className={`spin-button ${!canSpin ? 'disabled' : ''}`}
        onClick={handleSpin}
        disabled={!canSpin || isSpinning}
      >
        {isSpinning ? 'Spinning...' : canSpin ? 'Spin the Wheel' : 'Wait...'}
      </button>

      {result && (
        <div className="result-popup">
          <div className="result-icon">{result.icon}</div>
          <div className="result-text">You won!</div>
          <div className="result-prize">{result.name}</div>
          <button className="claim-result-btn" onClick={handleClaimReward}>Claim Reward</button>
        </div>
      )}

      {!compact && (
        <div className="spin-info">
          <div className="spin-count">1 free spin available</div>
          <div className="spin-hint">Complete transactions to earn more spins</div>
        </div>
      )}
    </div>
  );
};

export default SpinWheel;
