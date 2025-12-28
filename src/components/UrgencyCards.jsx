import '../styles/UrgencyCards.css';

const UrgencyCards = () => {
  const urgencyItems = [
    {
      id: 1,
      title: '3 Rewards Ending Soon',
      subtitle: 'Complete actions to keep them active',
      timeLeft: '18 hours left',
      type: 'warning'
    },
    {
      id: 2,
      title: 'Missing Today\'s Cashback',
      subtitle: 'Make any transaction to unlock',
      cta: 'Unlock Now',
      type: 'opportunity'
    },
    {
      id: 3,
      title: 'Premium Benefits Waiting',
      subtitle: 'Subscribe to unlock exclusive rewards',
      cta: 'View Plans',
      type: 'premium'
    }
  ];

  return (
    <div className="urgency-cards">
      {urgencyItems.map(item => (
        <div key={item.id} className={`urgency-card ${item.type}`}>
          <div className="card-header">
            <h3>{item.title}</h3>
            {item.timeLeft && <span className="time-badge">{item.timeLeft}</span>}
          </div>
          <p className="card-subtitle">{item.subtitle}</p>
          {item.cta && <button className="urgency-cta">{item.cta}</button>}
        </div>
      ))}
    </div>
  );
};

export default UrgencyCards;
