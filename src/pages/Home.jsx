import FeatureWalkthrough from '../components/FeatureWalkthrough';
import Testimonials from '../components/Testimonials';
import HeroImg from '../assets/eduzagerhomehero.png';

const Home = () => (
  <div className="flex flex-col items-center w-full overflow-hidden">
    {/* Full-width Hero Image */}
    <section className="w-full bg-white">
      <img
        src={HeroImg}
        alt="EduZager School Management Platform"
        className="w-full h-auto"
      />
    </section>
    <FeatureWalkthrough />
    <Testimonials />
  </div>
);

export default Home;
