import OfferHero from '../components/OfferHero';
import UrgencyCards from '../components/UrgencyCards';
import ActionZone from '../components/ActionZone';
import SubscriptionTrap from '../components/SubscriptionTrap';
import HiddenFeeNotice from '../components/HiddenFeeNotice';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <ActionZone />
      <OfferHero />
      <UrgencyCards />
      <div className="dual-column">
        <SubscriptionTrap />
        <HiddenFeeNotice />
      </div>
    </div>
  );
};

export default Home;
