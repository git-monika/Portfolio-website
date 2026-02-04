import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          MyPortfolio
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-cyan-400">
            Home
          </Link>
          <Link to="/projects" className="hover:text-cyan-400">
            Projects
          </Link>
          <Link to="/about" className="hover:text-cyan-400">
            About
          </Link>
          <Link to="/education" className="hover:text-cyan-400">
            Education
          </Link>
          <Link to="/skills" className="hover:text-cyan-400">
            Skills
          </Link>
          <Link to="/contact" className="hover:text-cyan-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
