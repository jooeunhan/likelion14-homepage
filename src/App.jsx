import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "../src/layout/RootLayout.jsx";
import MembersPage from "../src/pages/MembersPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<MembersPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;