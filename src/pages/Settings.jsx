import '../styles/Settings.css';

const Settings = ({ onShowBalance }) => {
  return (
    <div className="settings-page">
      <h1>Settings</h1>
      
      <div className="settings-section">
        <h2>Profile</h2>
        <div className="setting-item">
          <span>Name</span>
          <span className="setting-value">John Doe</span>
        </div>
        <div className="setting-item">
          <span>Email</span>
          <span className="setting-value">john.doe@example.com</span>
        </div>
        <div className="setting-item">
          <span>Phone</span>
          <span className="setting-value">+91 98765 43210</span>
        </div>
      </div>

      <div className="settings-section">
        <h2>Notifications</h2>
        <div className="setting-item">
          <span>Promotional Offers</span>
          <label className="toggle-switch">
            <input type="checkbox" defaultChecked />
            <span className="toggle-slider"></span>
          </label>
        </div>
        <div className="setting-item">
          <span>Transaction Alerts</span>
          <label className="toggle-switch">
            <input type="checkbox" defaultChecked />
            <span className="toggle-slider"></span>
          </label>
        </div>
        <div className="setting-item">
          <span>Reward Updates</span>
          <label className="toggle-switch">
            <input type="checkbox" defaultChecked />
            <span className="toggle-slider"></span>
          </label>
        </div>
      </div>

      <div className="settings-section">
        <h2>Account</h2>
        <div className="bank-card">
          <div className="bank-card-header">
            <div>
              <div className="bank-name">Primary Bank • **** 4821</div>
              <div className="bank-sub">Auto-pay enabled · Default method</div>
            </div>
            <span className="arrow">→</span>
          </div>
          <div className="bank-balance-label">Available balance</div>
          <div className="bank-balance-value">₹24,500</div>
          <div className="bank-fine-print">Balance updated periodically. Tap to manage.</div>
        </div>
        <div className="setting-item clickable">
          <span>Payment Methods</span>
          <span className="arrow">→</span>
        </div>
        <div className="setting-item clickable">
          <span>Subscriptions</span>
          <span className="arrow">→</span>
        </div>
        <div className="setting-item clickable" onClick={onShowBalance}>
          <span>Account Balance</span>
          <span className="arrow">→</span>
        </div>
      </div>

      <div className="settings-section">
        <h2>Security</h2>
        <div className="setting-item clickable">
          <span>Change Password</span>
          <span className="arrow">→</span>
        </div>
        <div className="setting-item clickable">
          <span>Two-Factor Authentication</span>
          <span className="arrow">→</span>
        </div>
      </div>

      <div className="settings-section">
        <h2>About</h2>
        <div className="setting-item">
          <span>Version</span>
          <span className="setting-value">2.4.1</span>
        </div>
        <div className="setting-item clickable">
          <span>Terms of Service</span>
          <span className="arrow">→</span>
        </div>
        <div className="setting-item clickable">
          <span>Privacy Policy</span>
          <span className="arrow">→</span>
        </div>
      </div>

      <button className="logout-btn">Logout</button>
    </div>
  );
};

export default Settings;
