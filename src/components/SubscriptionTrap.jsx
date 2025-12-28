import { useState } from 'react';
import '../styles/SubscriptionTrap.css';

const SubscriptionTrap = () => {
  const [showExitModal, setShowExitModal] = useState(false);
  const [autoRenew, setAutoRenew] = useState(true);

  const subscriptions = [
    {
      id: 1,
      name: 'Premium Plus',
      benefits: ['5% extra cashback', 'Priority support', 'Zero transaction fees'],
      price: '₹199/month',
      status: 'Active',
      renewal: 'Jan 15, 2026'
    },
    {
      id: 2,
      name: 'Gold Saver',
      benefits: ['Daily gold rewards', 'Investment insights', 'Free withdrawals'],
      price: '₹299/month',
      status: 'Active',
      renewal: 'Jan 22, 2026'
    }
  ];

  const handleCancelAttempt = () => {
    setShowExitModal(true);
  };

  return (
    <div className="subscription-trap">
      <h2>Your Active Plans</h2>
      <div className="subscriptions-list">
        {subscriptions.map(sub => (
          <div key={sub.id} className="subscription-card">
            <div className="sub-header">
              <h3>{sub.name}</h3>
              <span className="status-badge">{sub.status}</span>
            </div>
            <ul className="benefits-list">
              {sub.benefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
            <div className="sub-footer">
              <div className="price-info">
                <span className="price">{sub.price}</span>
                <span className="renewal-text">Renews on {sub.renewal}</span>
              </div>
              <button className="manage-btn" onClick={handleCancelAttempt}>
                Manage
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="auto-renew-section">
        <div className="auto-renew-content">
          <div>
            <h4>Auto-Renewal</h4>
            <p>Never miss your benefits</p>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={autoRenew}
              onChange={(e) => setAutoRenew(e.target.checked)}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>
        <p className="fine-print">
          Your subscriptions will automatically renew. Manage anytime in Settings &gt; Account &gt; Subscriptions
        </p>
      </div>

      {showExitModal && (
        <div className="modal-overlay" onClick={() => setShowExitModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Are you sure?</h3>
            <p className="warning-text">
              Canceling will permanently remove all your premium benefits including:
            </p>
            <ul className="loss-list">
              <li>Extra cashback rewards</li>
              <li>Priority customer support</li>
              <li>Zero transaction fees</li>
              <li>Accumulated gold points</li>
            </ul>
            <div className="modal-actions">
              <button className="keep-btn" onClick={() => setShowExitModal(false)}>
                Keep My Benefits
              </button>
              <button className="cancel-sub-btn">
                Continue Without Saving
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscriptionTrap;
