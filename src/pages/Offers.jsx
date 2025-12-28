import '../styles/SectionPages.css';

const offers = [
  {
    title: 'Weekend Rush Cashback',
    subtitle: 'Flat 5% back on all payments over ₹499 today',
    tag: 'Limited • 4h left'
  },
  {
    title: 'Metro Card Auto-Reload',
    subtitle: 'Extra ₹75 bonus on enabling auto-reload now',
    tag: 'Bonus'
  },
  {
    title: 'Gold Boost',
    subtitle: 'Get 3% instant gold rewards on purchases above ₹1,000',
    tag: 'Popular'
  },
  {
    title: 'Partner Flash Deals',
    subtitle: 'Up to ₹250 instant off on select merchants',
    tag: 'Expiring soon'
  }
];

const Offers = () => {
  return (
    <div className="section-page">
      <h1>Offers</h1>
      <p className="section-sub">Unlock bonuses before they expire.</p>
      <div className="card-grid">
        {offers.map((offer, idx) => (
          <div key={idx} className="info-card">
            <div className="card-tag">{offer.tag}</div>
            <h3>{offer.title}</h3>
            <p>{offer.subtitle}</p>
            <button className="primary-link">Activate</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
