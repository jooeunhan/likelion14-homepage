import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "../src/layout/RootLayout.jsx";
import MembersPage from "../src/pages/MembersPage.jsx";
import Project from "../src/pages/Project.jsx";
import Recruit from "../src/pages/Recruit.jsx";
import Login from "../src/pages/Login.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<MembersPage />} />
          <Route path="/members" element={<MembersPage />} />
          <Route path="/project" element={<Project />} />
          <Route path="/recruit" element={<Recruit />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;