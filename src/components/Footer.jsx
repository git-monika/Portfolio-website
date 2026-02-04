
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-auto">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} My Portfolio | Built with React & Tailwind
        </p>

       <div className="flex flex-wrap justify-center gap-4 mt-3">

          <a href="https://github.com" target="_blank" className="hover:text-cyan-400">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" className="hover:text-cyan-400">
            LinkedIn
          </a>
          <a href="mailto:your@email.com" className="hover:text-cyan-400">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
