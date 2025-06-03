import { useEffect } from "react";

const AnimatedBackground = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const shapes = document.querySelectorAll(".floating-shape");
      shapes.forEach((shape, index) => {
        const speed = 0.5 + index * 0.1;
        shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="animated-bg">
      <div className="floating-shape"></div>
      <div className="floating-shape"></div>
      <div className="floating-shape"></div>
    </div>
  );
};

export default AnimatedBackground;
