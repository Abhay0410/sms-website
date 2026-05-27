import FeatureWalkthrough from '../components/FeatureWalkthrough';
import HeroSection from '../components/HeroSection';
import Testimonials from '../components/Testimonials';
import CtaBanner from '../components/CtaBanner';

const Home = () => (
  <div className="flex flex-col items-center w-full overflow-hidden">
    <HeroSection />
    <FeatureWalkthrough />
    <Testimonials />
    <CtaBanner />
  </div>
);

export default Home;
