import Hero from "../section/Hero";
import ResumeSection from "../section/ResumeSection";
import About from "../section/About";
import Education from "../section/Education";
import Skills from "../section/Skills";
import Projects from "../section/Projects";
import Contact from "../section/Contact";

const Home = () => {
  return (
    <div>
      <Hero name="Monika Choudhary" />
      <About />
      <Education/>
      <Skills />
      <Projects/>
      <Contact/>
      <ResumeSection />
    </div>
  );
};

export default Home;
