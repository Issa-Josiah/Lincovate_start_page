import logo from "../assets/logo.png";

function Navbar({ toggleTheme, theme }) {
  return (
    <nav className="navbar">
      
      <div className="logo-container">
        <img src={logo} alt="Lincovate Logo" className="logo" />
        <h2 style={{ color: "#1F8A8A" }}>Lincovate</h2>
      </div>

      <button onClick={toggleTheme} className="theme-btn">
        {theme === "light" ? "🌙 Dark" : "☀ Light"}
      </button>

    </nav>
  );
}

export default Navbar;