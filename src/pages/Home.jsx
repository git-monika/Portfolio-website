import Hero from "../components/section/Hero";

import About from "../components/section/About";
import Education from "../components/section/Education";
import Skills from "../components/section/Skills";
import Projects from "../components/section/Projects";
import Contact from "../components/section/Contact";

const Home = () => {
  return (
    <div>
      <Hero name="Monika Choudhary" />
      <About />
      <Education/>
      <Skills />
      <Projects/>
      <Contact/>
      
    </div>
  );
};

export default Home;
