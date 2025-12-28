import { useState } from 'react';
import '../styles/HiddenFeeNotice.css';

const HiddenFeeNotice = () => {
  const [showFees, setShowFees] = useState(false);
  const [addOns, setAddOns] = useState({
    insurance: true,
    priority: true,
    premium: false
  });

  return (
    <div className="hidden-fee-notice">
      <div className="payment-summary">
        <h3>Quick Payment</h3>
        <div className="summary-row">
          <span>Base Amount</span>
          <span>₹1,000</span>
        </div>
        
        <div className="add-ons">
          <label className="add-on-item pre-checked">
            <input 
              type="checkbox" 
              checked={addOns.insurance}
              onChange={(e) => setAddOns({...addOns, insurance: e.target.checked})}
            />
            <div>
              <span className="add-on-name">Transaction Insurance</span>
              <span className="add-on-price">₹15</span>
            </div>
          </label>
          
          <label className="add-on-item pre-checked">
            <input 
              type="checkbox" 
              checked={addOns.priority}
              onChange={(e) => setAddOns({...addOns, priority: e.target.checked})}
            />
            <div>
              <span className="add-on-name">Priority Processing</span>
              <span className="add-on-price">₹25</span>
            </div>
          </label>
          
          <label className="add-on-item">
            <input 
              type="checkbox" 
              checked={addOns.premium}
              onChange={(e) => setAddOns({...addOns, premium: e.target.checked})}
            />
            <div>
              <span className="add-on-name">Premium Rewards Boost</span>
              <span className="add-on-price">₹50</span>
            </div>
          </label>
        </div>

        <div className="fee-toggle" onClick={() => setShowFees(!showFees)}>
          <span>Additional charges</span>
          <span className="toggle-icon">{showFees ? '▲' : '▼'}</span>
        </div>

        {showFees && (
          <div className="fee-breakdown">
            <div className="fee-row">
              <span>Service Fee</span>
              <span>₹18</span>
            </div>
            <div className="fee-row">
              <span>Platform Fee</span>
              <span>₹12</span>
            </div>
            <div className="fee-row">
              <span>GST (18%)</span>
              <span>₹23</span>
            </div>
          </div>
        )}

        <div className="total-row">
          <span>Total Amount</span>
          <span className="total-amount">₹1,143</span>
        </div>

        <button className="proceed-btn">Proceed to Pay</button>
        
        <p className="disclaimer">
          By proceeding, you agree to our Terms of Service and accept all applicable charges. 
          Late payment fees may apply after due date.
        </p>
      </div>
    </div>
  );
};

export default HiddenFeeNotice;
