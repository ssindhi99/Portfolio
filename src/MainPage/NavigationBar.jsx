import { IoMenu } from "react-icons/io5"; 
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import FooterPage from "./FooterPage";

function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header>
        <nav>
          <div className="nav-head">
            <div className="nav-logo">
              <img src="https://i.ibb.co/N60J034/Screenshot-2024-11-10-184859-transformed.png" alt="Screenshot-2024-11-10-184859-transformed" border="0"/>
              <IoMenu onClick={toggleMenu} className="menu-icon" />
            </div>

            <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/About" onClick={closeMenu}>About Me</Link></li>
              <li><Link to="/curriculum" onClick={closeMenu}>Curriculum Vitae</Link></li>
              <li><Link to="/Portfolio" onClick={closeMenu}>Projects</Link></li>
              <li><Link to="/Contact" onClick={closeMenu}>Contact Me</Link></li>
              <li><Link to="/ContactMessage" onClick={closeMenu}>Contact Messages</Link></li>
            </ul>
          </div>
        </nav>
      </header>
      <Outlet />
      <FooterPage />
    </>
  );
}

export default NavigationBar;
