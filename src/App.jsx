import {BrowserRouter, Routes, Route} from "react-router-dom";
import RootLayout from "../src/layout/RootLayout.jsx";
import TopSection from "../src/pages/TopSection.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<TopSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;