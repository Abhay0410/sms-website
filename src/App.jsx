import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pricing from './components/Pricing';
import RegisterSchool from './components/RegisterSchool';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Modules from './pages/Modules';
import AcademicStructure from "./components/modules/AcademicManagement";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/register" element={<RegisterSchool />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/academic-structure" element={<AcademicStructure />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
