import '../styles/FlashBanner.css';

const FlashBanner = ({ compact = false }) => {
  return (
    <div className={`flash-banner ${compact ? 'compact' : ''}`}>
      <div className="banner-bg">
        <div className="sparkle sparkle-1">✨</div>
        <div className="sparkle sparkle-2">⭐</div>
        <div className="sparkle sparkle-3">✨</div>
        <div className="sparkle sparkle-4">⭐</div>
        
        <div className="banner-content">
          <div className="banner-badge">Limited Time</div>
          <h2 className="banner-title">
            <span className="neon-text">Year End</span>
            <span className="neon-text glow">MEGA SALE</span>
          </h2>
          <p className="banner-subtitle">Up to 50% cashback on all transactions</p>
          <button className="banner-cta">Grab Deals Now</button>
        </div>
      </div>
    </div>
  );
};

export default FlashBanner;
