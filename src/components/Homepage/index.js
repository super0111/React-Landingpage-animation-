import Header from './Header';
import AboutUs from './AboutUs';
import Arcade from './Arcade';
import Merch from './Merch';
import Roadmap from './Roadmap';
import TradingCards from './TradingCards';
import OurTeam from './OurTeam';
 
const Homepage = () => {
  return(
    <div style={{background: "#211751"}}>
      <Header />
      <AboutUs />
      <Arcade />
      <Merch />
      <Roadmap />
      <TradingCards />
      <OurTeam />
    </div>
  )
}
export default Homepage