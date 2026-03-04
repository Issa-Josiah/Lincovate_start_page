import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Lincovate Logo" className="footer-logo" />
      <p>© 2026 Lincovate. All rights reserved.</p>
    </footer>
  );
}

export default Footer;