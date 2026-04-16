import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";

import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
