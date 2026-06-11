import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pricing from './components/Pricing';
import RegisterSchool from './components/RegisterSchool';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AcademicStructure from "./components/modules/AcademicManagement";
import AllModules from "./components/modules/AllModules";
import StudentManagement from "./components/modules/StudentManagement";
import Features from "./pages/Features";
import TeacherManagement from "./components/modules/TeacherManagement";
import FeeManagement from "./components/modules/FeeManagement";
import AdmissionAndEnquiry from "./components/modules/Admission&Enquiry";
import ResultManagement from "./components/modules/ResultManagement";
import HRPayroll from "./components/modules/HR & Payroll";
import LibraryManagement from "./components/modules/LibraryManagement";
import TransportManagement from "./components/modules/TransportManagement";
import Communication from "./components/modules/Communication";
import StaffManagement from "./components/modules/StaffManagement";
import ChildManagement from "./components/modules/ChildManagement";
import BulkImport from "./components/modules/BulkImport";
import InventoryManagement from "./components/modules/Inventory&Assets";
import FinancialLedger from "./components/modules/FinancialLedger";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/register" element={<RegisterSchool />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/modules" element={<AllModules />} />
            <Route path="/academic-structure" element={<AcademicStructure />} />
            <Route path="/student-management" element={<StudentManagement />} />
            <Route path="/teacher-management" element={<TeacherManagement />} />
            <Route path="/fee-management" element={<FeeManagement />} />
            <Route path="/admission-and-enquiry" element={<AdmissionAndEnquiry />} />
            <Route path="/result-management" element={<ResultManagement />} />
            <Route path="/hr-payroll" element={<HRPayroll />} />
            <Route path="/library-management" element={<LibraryManagement />} />
            <Route path="/transport-management" element={<TransportManagement />} />
            <Route path="/communication" element={<Communication />} />
            <Route path="/staff-management" element={<StaffManagement />} />
            <Route path="/child-management" element={<ChildManagement />} />
            <Route path="/bulk-import" element={<BulkImport />} />
            <Route path="/inventory-management" element={<InventoryManagement />} />
            <Route path="/financial-ledger" element={<FinancialLedger />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
