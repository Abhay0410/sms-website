import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Pricing from './components/Pricing';
import RegisterSchool from './components/RegisterSchool';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import AcademicStructure from "./components/modules/AcademicManagement";
import AllModules from "./components/modules/AllModules";
import StudentManagement from "./components/modules/StudentManagement";
import Features from "./pages/Features";

const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Timeout ensures the new DOM is fully painted before we attempt to scroll
    setTimeout(() => {
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        window.scrollTo(0, 0);
      }
    }, 50); // 50ms delay to prevent React render race conditions
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/register" element={<RegisterSchool />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/modules" element={<AllModules />} />
            <Route path="/academic-structure" element={<AcademicStructure />} />
            <Route path="/student-management" element={<StudentManagement />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
