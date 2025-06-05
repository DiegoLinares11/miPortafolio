import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../index.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link =>
      link.addEventListener("click", function (e) {
        e.preventDefault();
        document
          .querySelector(this.getAttribute("href"))
          .scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      })
    );
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Diego Linares</div>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#about">Sobre Mí</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
