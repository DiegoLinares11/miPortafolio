import { useEffect, useState } from "react";
import perfil from "../assets/FotoDiego.jpg";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Diego Linares";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setText(fullText.substring(0, i));
      if (i >= fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);



  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <h1>
          Hola, soy <span className="highlight">{text}</span>
        </h1>
        <h2>Desarrollador Full Stack</h2>
        <p>
          Especializado en tecnologías web modernas como React, Next.js, Vue.js, Node.js y Go.
          Me apasiona crear experiencias digitales impactantes.
          También tengo experiencia en bases de datos como MongoDB, DynamoDB, PostgreSQL y Firebase.
          Portafolio poniendo a prueba mis habilidades en CSS y JavaScript, con un enfoque en la usabilidad y el rendimiento.
        </p>
        <a href="#proyectos" className="cta-button">Ver Mis Proyectos</a>
      </div>
      <div className="hero-photo">
        <img src={perfil} alt="Foto de Diego Linares" />
      </div>
    </section>
  );
};

export default Hero;
