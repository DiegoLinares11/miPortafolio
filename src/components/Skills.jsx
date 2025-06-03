import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
  }, []);

  return (
    <section id="skills" className="section">
      <h2>Tecnologías & Habilidades</h2>
      <div className="skills-grid">
        {[
          { icon: "⚛️", title: "Frontend", text: "React, Next.js, Vue.js, Vite, HTML5, CSS3, JavaScript ES6+, TypeScript" },
          { icon: "🔧", title: "Backend", text: "Node.js, Express, Go, REST APIs, GraphQL, Microservicios" },
          { icon: "🗄️", title: "Base de Datos", text: "MongoDB, PostgreSQL, MySQL, Redis, Firebase" },
          { icon: "☁️", title: "DevOps & Cloud", text: "Docker, AWS, Vercel, Netlify, CI/CD, Nginx" }
        ].map(({ icon, title, text }) => (
          <div className="skill-card fade-in" key={title}>
            <div className="skill-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
