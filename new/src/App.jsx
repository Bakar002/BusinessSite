import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";

function App() {
  return (

    <>
        <div className="overflow-x-hidden">

      <Hero />
      <Services />
      <Projects />
      <Clients />
      <Contact />
      </div>
    </>
  );
}

export default App;
