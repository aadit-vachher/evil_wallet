import '../styles/ActionZone.css';

const ActionZone = () => {
  const actions = [
    { id: 1, label: 'Pay Now', primary: true },
    { id: 2, label: 'Scan & Pay', primary: true },
    { id: 3, label: 'One-Tap Recharge', primary: false },
    { id: 4, label: 'Buy Digital Gold', primary: false }
  ];

  return (
    <div className="action-zone">
      <div className="primary-actions">
        {actions.filter(a => a.primary).map(action => (
          <button key={action.id} className="action-btn primary">
            {action.label}
          </button>
        ))}
      </div>
      <div className="secondary-actions">
        {actions.filter(a => !a.primary).map(action => (
          <button key={action.id} className="action-btn secondary">
            {action.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ActionZone;
