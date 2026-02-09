import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
// import FlowerImage from "../../assets/image/FlowerImage.png"

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Flower Website",
      category: "React",
      description:
        "A responsive website showcasing different types of flowers with gallery, details page, and contact form.",
      tech: "React, Tailwind, CSS",
      image: "../../assets/image/FlowerImage.png",
      liveLink: "https://your-flower-website-link.com",
      githubLink: "https://github.com/yourusername/flower-website",
    },
    {
      id: 2,
      title: "E-Commerce App",
      category: "React",
      description:
        "Online shopping platform with product listing, cart, checkout, and user authentication.",
      tech: "React, API, MySQL",
      image: "/assets/images/projects/ecommerce.jpg",
      liveLink: "https://your-ecommerce-link.com",
      githubLink: "https://github.com/yourusername/ecommerce-app",
    },
    {
      id: 3,
      title: "Bakery Website",
      category: "React",
      description:
        "A beautiful bakery website with menu, order form, and image gallery.",
      tech: "HTML, CSS, JavaScript, React",
      image: "/assets/images/projects/bakery.jpg",
      liveLink: "https://your-bakery-link.com",
      githubLink: "https://github.com/yourusername/bakery-website",
    },
    {
      id: 4,
      title: "Library Management System",
      category: "Java",
      description:
        "System to manage books, students, and transactions with admin panel.",
      tech: "Java, Spring Boot, MySQL, React",
      image: "/assets/images/projects/library.jpg",
      liveLink: "https://your-library-link.com",
      githubLink: "https://github.com/yourusername/library-management",
    },
    {
      id: 5,
      title: "Portfolio Website",
      category: "React",
      description:
        "Personal developer portfolio showcasing skills, projects, and resume.",
      tech: "React, Tailwind, React Router",
      image: "/assets/images/projects/portfolio.jpg",
      liveLink: "https://your-portfolio-link.com",
      githubLink: "https://github.com/yourusername/portfolio",
    },
    {
      id: 6,
      title: "Movie Search (IMDB)",
      category: "React",
      description:
        "Movie search app using IMDB API with search, filter, and movie details page.",
      tech: "React, API, Tailwind",
      image: "/assets/images/projects/movie.jpg",
      liveLink: "https://your-movie-app-link.com",
      githubLink: "https://github.com/yourusername/movie-search-app",
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-cyan-400 text-xl text-center">My Work</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-center mt-2">
          Featured Projects
        </h1>

        <div className="flex flex-wrap justify-center gap-2 mt-6 px-2">
          {["All", "React", "Java", "Full Stack"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-4 sm:px-5 py-2 text-sm sm:text-base rounded-full border border-cyan-400 font-semibold transition ${
                filter === item
                  ? "bg-cyan-500 text-black"
                  : "text-cyan-400 hover:bg-cyan-500 hover:text-black"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-950 border border-gray-700 rounded-lg overflow-hidden hover:border-cyan-400 transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-48 md:h-52 object-cover"
              />

              <div className="p-4 sm:p-6">
                <h3 className="text-cyan-400 text-lg sm:text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-300 mt-2 text-sm sm:text-base">
                  {project.description}
                </p>

                <p className="text-gray-400 mt-2 text-xs sm:text-sm">
                  <span className="font-semibold">Tech:</span> {project.tech}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-500 text-black px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md font-semibold hover:bg-cyan-400 flex items-center gap-2"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-cyan-400 text-cyan-400 px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md font-semibold hover:bg-cyan-400 hover:text-black flex items-center gap-2"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
