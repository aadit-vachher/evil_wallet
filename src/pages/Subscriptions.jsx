import '../styles/SectionPages.css';

const plans = [
  {
    name: 'Premium Plus',
    price: '₹199 / month',
    status: 'Active',
    renewal: 'Renews on Jan 15, 2026',
    perks: ['5% extra cashback', 'Priority support', 'Zero transaction fees']
  },
  {
    name: 'Gold Saver',
    price: '₹299 / month',
    status: 'Active',
    renewal: 'Renews on Jan 22, 2026',
    perks: ['Daily gold rewards', 'Investment insights', 'Free withdrawals']
  },
  {
    name: 'Flex Trial',
    price: '₹0 for 7 days',
    status: 'Trial',
    renewal: 'Auto-renews unless canceled',
    perks: ['1% bonus on utilities', 'Reduced late fees']
  }
];

const Subscriptions = () => {
  return (
    <div className="section-page">
      <h1>Subscriptions</h1>
      <p className="section-sub">Auto-renew keeps your benefits uninterrupted.</p>
      <div className="card-grid">
        {plans.map((plan, idx) => (
          <div key={idx} className="info-card sub-card">
            <div className="card-top">
              <div>
                <h3>{plan.name}</h3>
                <div className="sub-price">{plan.price}</div>
              </div>
              <span className={`status-pill ${plan.status === 'Active' ? 'active' : 'trial'}`}>
                {plan.status}
              </span>
            </div>
            <div className="sub-renewal">{plan.renewal}</div>
            <ul className="perk-list">
              {plan.perks.map((perk, pIdx) => (
                <li key={pIdx}>{perk}</li>
              ))}
            </ul>
            <button className="primary-link">Manage</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscriptions;
