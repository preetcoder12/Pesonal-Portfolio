import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects_Skils from "./components/Projects_Skils";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      {/* Navbar with Links for smooth scrolling */}
      <Navbar />

      {/* Hero Section */}
      <Hero id="heroSection" />

      {/* About Section */}
      <About id="aboutSection" />

      {/* Projects & Skills Section */}
      <Projects_Skils id="projectsSkillsSection" />

      {/* Skills Section */}
      <Skills id="skillsSection" />

      {/* Experience Section */}
      <Experience id="experienceSection" />

      {/* Contact Section */}
      <Contact id="contactSection" />

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default App;
