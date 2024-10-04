import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Orchids from "./components/Orchids/Orchids";
import Details from "./components/Orchids/DetailsOrchid/DetailsOrchid.js";
import Contact from "./components/Contact/Contact";
import Special from "./components/Orchids/SpecialOrchid";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light-theme");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light-theme" ? "dark-theme" : "light-theme"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Router>
      <ScrollToTop />
      <div className={`App ${theme}`}>
        <Header toggleTheme={toggleTheme} currentTheme={theme} />
        <Routes>
          <Route path="/" element={<Orchids />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/special" element={<Special />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
