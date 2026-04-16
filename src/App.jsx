import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Onboarding from "./pages/Onboarding";
import Auth from "./pages/Auth";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
