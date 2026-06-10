import { BackgroundVideo } from './components/BackgroundVideo';
import { NoiseFilters } from './components/shared/NoiseFilters';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PlayerShowcase } from './components/PlayerShowcase';
import { PainCards } from './components/PainCards';
import { FeatureBenefits } from './components/FeatureBenefits';
import { Testimonials } from './components/Testimonials';
import { Guarantee } from './components/Guarantee';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyCTA } from './components/StickyCTA';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white">
      <BackgroundVideo />
      <NoiseFilters />
      <Navbar />
      <Hero />
      <PlayerShowcase />
      <PainCards />
      <FeatureBenefits />
      <Testimonials />
      <Guarantee />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
