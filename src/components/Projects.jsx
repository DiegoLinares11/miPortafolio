const projects = [
  {
    icon: "🛍️",
    title: "E-Commerce Platform",
    description: "Plataforma completa de comercio electrónico con carrito de compras, pagos y panel de administración.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    icon: "📱",
    title: "App de Gestión de Tareas",
    description: "Aplicación web para gestión de proyectos y tareas con colaboración en tiempo real.",
    tags: ["Vue.js", "Socket.io", "Express", "PostgreSQL"]
  },
  {
    icon: "🌐",
    title: "API RESTful con Go",
    description: "API escalable desarrollada con Go, implementando mejores prácticas y arquitectura limpia.",
    tags: ["Go", "Gin", "PostgreSQL", "Docker"]
  }
];

const Projects = () => {
  return (
    <section id="proyectos" className="section">
      <h2>Proyectos Destacados</h2>
      <div className="projects-grid">
        {projects.map(({ icon, title, description, tags }, idx) => (
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
                <a href="#" className="project-link">Ver Demo</a>
                <a href="#" className="project-link">Código</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
