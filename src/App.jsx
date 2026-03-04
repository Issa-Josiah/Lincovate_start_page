import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import LinkCard from "./components/LinkCard";
import Footer from "./components/Footer";
import instagram from './assets/instagram.png'; 
import linkedin from './assets/linkedin.png'; 
import tiktok from './assets/tiktok.png'; 
import facebook from './assets/facebook.png'; 
import gmail from './assets/gmail.png'; 
 

function App() {
   const [theme, setTheme] = useState("light");
   // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Apply theme to body + save it
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="app">
      <Navbar toggleTheme={toggleTheme} theme={theme} />

      <div className="center-container">
        <h1>Connect With Me</h1>
        <h4>Find me on social media or get in touch</h4>

        <LinkCard icon={instagram} title="Instagram" link="https://example.com" />
        <LinkCard icon={tiktok} title="Tiktok" link="https://github.com" />
        <LinkCard icon={facebook} title="Facebook" link="https://portfolio.com" />
         <LinkCard icon={linkedin} title="LinkedIn" link="https://portfolio.com" />
          <LinkCard icon={gmail} title="Email" link="mailto:info@lincovate.com" />
      <h3 >Coming Live Soon</h3>    
      </div>
      
      

      <Footer />
    </div>
  );
}

export default App;