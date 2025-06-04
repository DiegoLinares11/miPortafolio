import ProgressBar from "./components/ProgressBar";
import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SocialBar from "./components/SocialBar";
import CursorEffects from "./components/CursorEffects";

import "./index.css";

const App = () => {
  return (
    <>
      <ProgressBar />
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <SocialBar />
      <CursorEffects />
    </>
  );
};

export default App;
