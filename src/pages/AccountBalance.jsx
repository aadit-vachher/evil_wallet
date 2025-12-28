// import { useState } from 'react';
import '../styles/AccountBalance.css';

const AccountBalance = ({ onBack }) => {
  return (
    <div className="account-balance-page">
      <div className="balance-header">
        <button className="back-btn" onClick={onBack}>← Back</button>
        <h2>Account Balance</h2>
      </div>

      <div className="balance-container">
        <div className="balance-card-detail">
          <span className="balance-label">Current Balance</span>
          <span className="balance-amount">₹24,500</span>
          <span className="last-updated">Last updated: 2 hours ago</span>
        </div>

        <div className="balance-card-detail">
          <span className="balance-label">Total Savings (This Month)</span>
          <span className="balance-amount savings">₹2,340</span>
          <span className="last-updated">Includes all cashback & rewards</span>
        </div>

        <div className="balance-card-detail">
          <span className="balance-label">Pending Cashback</span>
          <span className="balance-amount pending">₹1,480</span>
          <span className="last-updated">Will be credited within 24 hours</span>
        </div>
      </div>

      <div className="transaction-history">
        <h3>Recent Activity</h3>
        <div className="transaction-item">
          <div>
            <div className="transaction-name">Mobile Recharge</div>
            <div className="transaction-date">27 Dec 2025</div>
          </div>
          <div className="transaction-amount debit">-₹299</div>
        </div>
        <div className="transaction-item">
          <div>
            <div className="transaction-name">Cashback Credited</div>
            <div className="transaction-date">27 Dec 2025</div>
          </div>
          <div className="transaction-amount credit">+₹45</div>
        </div>
        <div className="transaction-item">
          <div>
            <div className="transaction-name">Gold Purchase</div>
            <div className="transaction-date">26 Dec 2025</div>
          </div>
          <div className="transaction-amount debit">-₹500</div>
        </div>
      </div>
    </div>
  );
};

export default AccountBalance;
