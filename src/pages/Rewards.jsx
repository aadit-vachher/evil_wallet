import '../styles/SectionPages.css';

const rewards = [
  {
    title: 'Pending Cashback',
    amount: '₹1,480',
    detail: 'Will be credited after your next transaction',
    tag: 'Pending'
  },
  {
    title: 'Streak Bonus',
    amount: '₹220',
    detail: 'Maintain daily usage for 3 more days to double this',
    tag: 'Streak'
  },
  {
    title: 'Reward Boost',
    amount: '₹540',
    detail: 'Boost unlocked for subscriptions users',
    tag: 'Boosted'
  }
];

const Rewards = () => {
  return (
    <div className="section-page">
      <h1>Rewards</h1>
      <p className="section-sub">Collect, boost, and never miss a payout.</p>
      <div className="card-grid">
        {rewards.map((reward, idx) => (
          <div key={idx} className="info-card reward-card">
            <div className="card-tag">{reward.tag}</div>
            <h3>{reward.title}</h3>
            <div className="reward-amount">{reward.amount}</div>
            <p>{reward.detail}</p>
            <button className="secondary-link">View details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rewards;
