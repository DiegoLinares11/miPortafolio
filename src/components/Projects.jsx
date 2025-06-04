const projects = [
  {
    icon: "🛍️",
    title: "Lab 2: Administración de servidores remotos",
    description: "LOGS DE SSH, CURL, HTTP y más.",
    tags: ["Linux", "SSH", "Curlo", "HTTP"],
    demo: "https://221256.devng.online/lab2/respuestas.txt",
    code: "https://github.com/DiegoLinares11/Lab-2-Administracion-de-servidores-remotos"
  },
  {
    icon: "🌐",
    title: "HTML ONLY",
    description: "Página web simple con HTML, Es una historia interactiva utilizando etiquetas como HREF, UL y ARTICLE.",
    tags: ["HTML", "HREF", "UL", "ARTICLE"],
    demo: "https://221256.devng.online/lab3/",
    code: "https://github.com/DiegoLinares11/lab3-HTML"
  },
  {
    icon: "CSS🎨",
    title: "CSS ONLY",
    description: "Página web simple con CSS, es interactiva, y tiene bonitos diseños.",
    tags: ["Clases", "ID", "tags", "Selectores universales"],
    demo: "https://221256.devng.online/lab4/",
    code: "https://github.com/DiegoLinares11/Lab4-CSS"
  },
  {
    icon: "JS🟨",
    title: "JS ONLY",
    description: " realizar un chat que se conecte al servidor https://chat.devng.online/chats Enlaces a un sitio externo. (Haciendo POST a esa ruta se escriben los chats y haciendo GET a esa ruta se leen los chats).",
    tags: ["JS", "document....", "async", "await", "function"],
    demo: "https://devng.online/221256/lab05JS/",
    code: "https://github.com/DiegoLinares11/lab5-JS-Only"
  },
  {
    icon: "GO🐹",
    title: "Lab 6: Backend only - Parte 1",
    description: "Desarrollar un backend que proporcione ciertos endpoints obligatorios",
    tags: ["GET", "POST", "PUT", "DELETE", "DOCKER"],
    demo: "https://221256.devng.online/lab4/",
    code: "https://github.com/DiegoLinares11/Lab-6-Backend-only"
  },

  {
    icon: "GO🐹",
    title: "Lab 6: Backend only - Parte 2",
    description: "Desarrollar un backend que proporcione ciertos endpoints obligatorios este se agregaron nuevos endpoints y se mejoró la estructura del proyecto.",
    tags: ["GET", "POST", "PUT", "DELETE", "DOCKER"],
    demo: "https://221256.devng.online/lab4/",
    code: "https://github.com/DiegoLinares11/Lab-6-Backend-only"
  },

  {
    icon: "⚛️",
    title: "Lab 7: React",
    description: "Juego de memoria con React, donde se deben encontrar pares de cartas.",
    tags: ["useEffect", "Function", "React.DOM", "Render"],
    demo: "https://lab6-react-three.vercel.app/",
    code: "https://github.com/DiegoLinares11/Lab6-React"
  },

  {
    icon: "🧮",
    title: "Proyecto Calculadora",
    description: "Diseño de aplicaciones en base a componentes, temas alrededor de testing y buenas prácticas. Se utilizo React.",
    tags: ["React", "Componentes", "Tests", "stories"],
    demo: "https://proyecto-calculadora-eta.vercel.app/",
    code: "https://github.com/DiegoLinares11/Proyecto-Calculadora"
  }
];


const Projects = () => {
  return (
    <section id="proyectos" className="section">
      <h2>Proyectos Realizados Durante el Curso de Sistemas y Tecnologias Web!!</h2>
      <div className="projects-grid">
        {projects.map(({ icon, title, description, tags, demo, code }, idx) => (
          <div className="project-card fade-in" key={idx}>
            <div className="project-image">{icon}</div>
            <div className="project-content">
              <h3 className="project-title">{title}</h3>
              <p className="project-description">{description}</p>
              <div className="project-tags">
                {tags.map(tag => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={demo} className="project-link" target="_blank" rel="noopener noreferrer">
                  Ver Demo
                </a>
                <a href={code} className="project-link" target="_blank" rel="noopener noreferrer">
                  Código
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
