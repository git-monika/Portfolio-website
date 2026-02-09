import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PortfolioImage from "../../assets/image/PortfolioImage.png";



function Hero({ name }) {
  const [text, setText] = useState("");
  const fullText = "Frontend Developer | React Enthusiast";

  useEffect(() => {
    let index = 0;

    const typingEffect = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(typingEffect);
      }
    }, 100);

    return () => clearInterval(typingEffect);
  }, []);

  return (
    <section className="bg-gray-900 text-white min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-xl text-cyan-400">Hi, I am</h2>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">{name}</h1>
          <p className="text-xl mt-4 text-gray-300 h-8">{text}</p>

          <p className="mt-4 text-gray-400">
            I build modern and responsive web applications using React and
            Tailwind CSS.
          </p>

          <div className="mt-6 space-x-4 flex flex-wrap gap-3">
            <Link to="/projects">
              <button className="bg-cyan-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-cyan-400">
                View Projects
              </button>
            </Link>

            <a href="#resume">
              <button className="border border-cyan-400 text-cyan-400 px-6 py-2 rounded-md font-semibold hover:bg-cyan-400 hover:text-black">
                View Text Resume
              </button>
            </a>

            <a href="/resume/resume.pdf" download="My_Resume.pdf">
              <button className="bg-gray-900 border border-cyan-400 text-cyan-400 px-6 py-2 rounded-md font-semibold hover:bg-cyan-400 hover:text-black">
                Download PDF
              </button>
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-64 h-64 bg-cyan-500 rounded-full opacity-80 blur-3xl absolute"></div>
          <img
            src={PortfolioImage}
            alt="Profile"
            className="w-64 h-64 rounded-full border-4 border-cyan-400 relative" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
