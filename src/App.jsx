import Header from './components/Header';
import AnimatedHero from './components/AnimatedHero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Eligibility from './components/Eligibility';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <AnimatedHero />
      <Services />
      <HowItWorks />
      <Eligibility />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
