import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Background from "../components/Background";



export default function App() {
  return (
    <main className="text-gray-400 bg-slate-800 body-font">
      <Navbar />
      <Background />
      <About />
      <Projects />
      <Skills />
      <Contact />

      
    </main>
  );
}