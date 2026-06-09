import FeatureWalkthrough from '../components/FeatureWalkthrough';
import HeroSection from '../components/HeroSection';
import Testimonials from '../components/Testimonials';

const Home = () => (
  <div className="flex flex-col items-center w-full overflow-hidden">
    <HeroSection />
    <FeatureWalkthrough />
    <Testimonials />
  </div>
);

export default Home;
