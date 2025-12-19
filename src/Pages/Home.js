import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Background from "../components/Background";



export default function Home() {
  return (
    <main className="text-text bg-background body-font">
      <Navbar />
      
      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
        </section>
      
      
    </main>
  );
}
//<Background />