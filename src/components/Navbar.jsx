import { useEffect } from "react";
import SocialBar from "./SocialBar";

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link =>
      link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
      })
    );
  }, []);

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">Diego Linares</div>
        <ul className="nav-links">
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
