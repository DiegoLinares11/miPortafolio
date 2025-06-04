import SocialBar from "./SocialBar";

const About = () => {
  return (
    <section id="about" className="section about-section fade-in">
      <h2>Sobre Mí</h2>

      <div className="about-content">
            <p>
            Soy estudiante avanzado de Ingeniería en Ciencias de la Computación y Tecnologías de la Información,
            con una formación sólida en estructuras de datos, diseño de algoritmos, desarrollo web, y fundamentos de inteligencia artificial. 
            A lo largo de mi carrera he cursado y aprobado más de 40 asignaturas, incluyendo Sistemas Operativos, Compiladores, Minería de Datos, entre otras,
            lo que me ha permitido combinar un enfoque práctico con una base matemática rigurosa.
            <br /><br />
            Me especializo en el desarrollo full stack con React, Node.js, PostgreSQL y Go, pero también tengo experiencia con microcontroladores, plataformas móviles,
            lenguajes de programación de bajo nivel y diseño de sistemas distribuidos.
            <br /><br />
            Además de lo técnico, he desarrollado competencias en pensamiento crítico, liderazgo, comunicación efectiva y diseño centrado en el usuario.
            Actualmente me enfoco en proyectos que combinan tecnología, creatividad y resolución de problemas reales.
            </p>


        <SocialBar />
      </div>
    </section>
  );
};

export default About;
