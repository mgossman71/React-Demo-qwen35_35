import Header from './components/Header';
import SplitHero from './components/SplitHero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Eligibility from './components/Eligibility';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollAnimations from './components/ScrollAnimations';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <SplitHero />
      <Services />
      <HowItWorks />
      <Eligibility />
      <Contact />
      <Footer />
      <ScrollAnimations />
    </div>
  );
}

export default App;
