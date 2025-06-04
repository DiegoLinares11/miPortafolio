import { useEffect } from "react";
import "../index.css"; // asegúrate que los estilos estén aquí

const EnhancedCursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "cursor";
    cursor.id = "cursor";
    document.body.appendChild(cursor);

    const trails = [];
    const trailCount = 8;

    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement("div");
      trail.className = "cursor-trail";
      document.body.appendChild(trail);
      trails.push({ element: trail, x: 0, y: 0, opacity: 1 - i / trailCount });
    }

    let mouseX = 0;
    let mouseY = 0;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = `${mouseX - 10}px`;
      cursor.style.top = `${mouseY - 10}px`;
    };

    document.addEventListener("mousemove", onMove);
    const createWave = (e) => {
        const wave = document.createElement("div");
        wave.className = "wave-effect";
        wave.style.left = `${e.clientX - 25}px`;
        wave.style.top = `${e.clientY - 25}px`;
        wave.style.width = "50px";
        wave.style.height = "50px";
        document.body.appendChild(wave);

        setTimeout(() => wave.remove(), 1000);
        };

    document.addEventListener("click", createWave);


    const animateTrails = () => {
      trails.forEach((trail, i) => {
        if (i === 0) {
          trail.x = mouseX;
          trail.y = mouseY;
        } else {
          const prev = trails[i - 1];
          trail.x += (prev.x - trail.x) * 0.3;
          trail.y += (prev.y - trail.y) * 0.3;
        }

        trail.element.style.left = `${trail.x - 4}px`;
        trail.element.style.top = `${trail.y - 4}px`;
        trail.element.style.opacity = trail.opacity;
      });

      requestAnimationFrame(animateTrails);
    };

    animateTrails();

    // Hover effect on interactive elements
    document.querySelectorAll('a, button, .skill-card, .project-card').forEach(el => {
      el.addEventListener("mouseenter", () => {
        cursor.style.transform = "scale(2)";
        cursor.style.background = "var(--accent-blue)";
      });
      el.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)";
        cursor.style.background = "var(--primary-green)";
      });
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("click", createWave);
      document.body.removeChild(cursor);
      trails.forEach(t => document.body.removeChild(t.element));
    };  
  }, []);

  return null;
};

export default EnhancedCursor;
