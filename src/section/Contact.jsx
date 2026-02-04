import { FaPhoneAlt, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-cyan-400 text-xl">Get In Touch</h2>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">Contact Me</h1>

          <p className="mt-4 text-gray-300">
            Feel free to reach out to me for collaborations, job opportunities,
            or any project-related discussions.
          </p>

          <div className="mt-6 space-y-4">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 text-gray-300 hover:text-cyan-400"
            >
              <FaPhoneAlt className="text-cyan-400 text-lg" />
              +91 7**48$%974
            </a>

            <a
              href="mailto:your@email.com"
              className="flex items-center gap-3 text-gray-300 hover:text-cyan-400"
            >
              <FaEnvelope className="text-cyan-400 text-lg" />
              choudharymonika0212@email.com
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-cyan-400"
            >
              <FaGithub className="text-cyan-400 text-lg" />
              github.com/yourusername
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-cyan-400"
            >
              <FaLinkedin className="text-cyan-400 text-lg" />
              linkedin.com/in/yourusername
            </a>
          </div>
        </div>
        <div className="bg-gray-950 p-6 rounded-lg border border-gray-700">
          <h3 className="text-cyan-400 text-xl font-semibold mb-4">
            Send a Message
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:border-cyan-400"
            />

            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:border-cyan-400"
            ></textarea>

            <button
              type="submit"
              className="bg-cyan-500 text-black px-6 py-2 rounded-md font-semibold hover:bg-cyan-400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
