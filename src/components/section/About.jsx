import { Link } from "react-router-dom";
import { 
  SiHtml5, SiJavascript, SiReact, SiTailwindcss, 
  SiSpringboot, SiMysql, SiPostgresql 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image / Illustration */}
        <div className="flex justify-center">
          <img
            src="/assets/images/profile.jpg"
            alt="Profile"
            className="w-72 h-72 rounded-lg border-2 border-cyan-400 shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div>
          <h2 className="text-cyan-400 text-xl">About Me</h2>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">
            I am a Full Stack Developer
          </h1>

          <p className="mt-4 text-gray-300 leading-relaxed">
            I am a passionate Full Stack Developer specializing in building scalable,
            high-performance, and user-friendly web applications. I work with
            <span className="text-cyan-400 font-semibold"> Java </span> on the backend
            and <span className="text-cyan-400 font-semibold">React</span> on the frontend.
          </p>

          <p className="mt-4 text-gray-300 leading-relaxed">
            I enjoy solving real-world problems through clean, maintainable, and
            efficient code. My goal is to create applications that are not only functional
            but also intuitive and visually appealing.
          </p>

          {/* Skills Summary WITH ICONS */}
          <div className="mt-6 grid grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="text-cyan-400 font-semibold mb-2">Frontend</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <SiHtml5 className="text-orange-500 text-lg" /> HTML, CSS
                </li>
                <li className="flex items-center gap-2">
                  <SiJavascript className="text-yellow-400 text-lg" /> JavaScript (ES6+)
                </li>
                <li className="flex items-center gap-2">
                  <SiReact className="text-cyan-400 text-lg" /> React.js
                </li>
                <li className="flex items-center gap-2">
                  <SiTailwindcss className="text-teal-400 text-lg" /> Tailwind CSS
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-cyan-400 font-semibold mb-2">Backend</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <FaJava className="text-red-500 text-lg" /> Java
                </li>
                <li className="flex items-center gap-2">
                  <SiSpringboot className="text-green-500 text-lg" /> Spring Boot
                </li>
                <li className="flex items-center gap-2">
                  <SiMysql className="text-indigo-400 text-lg" /> MySQL
                </li>
                <li className="flex items-center gap-2">
                  <SiPostgresql className="text-blue-500 text-lg" /> PostgreSQL
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Buttons WITH ROUTING */}
          <div className="mt-6 flex gap-4">
            <Link to="/projects">
              <button className="bg-cyan-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-cyan-400">
                View Projects
              </button>
            </Link>

            <Link to="/contact">
              <button className="border border-cyan-400 text-cyan-400 px-6 py-2 rounded-md font-semibold hover:bg-cyan-400 hover:text-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
