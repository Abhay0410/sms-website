import { Routes, Route } from "react-router-dom";
import AcademicStructure from "../../components/modules/AcademicManagement";

export default function AcademicManagementRoutes() {
  return (
    <Routes>
      {/* <Route
        path="/academic"
        element={<AcademicManagement />}
      /> */}

     <Route
  path="/academic-structure"
  element={<AcademicStructure />}
/>
    </Routes>
  );
}