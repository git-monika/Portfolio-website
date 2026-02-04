const ResumeSection = () => {
  return (
    <section id="resume" className="bg-gray-950 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto border border-gray-700 p-8 rounded-lg font-mono text-sm bg-black shadow-lg">
        
        
        <h2 className="text-cyan-400 text-2xl mb-4">// resume.txt</h2>
        <hr className="border-gray-700 mb-4" />

        <pre className="whitespace-pre-wrap text-gray-300 leading-relaxed">
{`// ------------------------------
// PERSONAL DETAILS
// ------------------------------

Name   : Your Name
Role   : Frontend Developer
Email  : your@email.com
Phone  : +91-XXXXXXXXXX
Location: Your City, India


// ------------------------------
// ABOUT ME
// ------------------------------

I am a passionate Frontend Developer with experience in building modern,
responsive, and user-friendly web applications using React and Tailwind CSS.
I love writing clean, maintainable, and scalable code.


// ------------------------------
// SKILLS
// ------------------------------

Frontend:
- React.js
- JavaScript (ES6+)
- HTML5, CSS3
- Tailwind CSS
- React Router

Tools & Others:
- Git & GitHub
- VS Code
- REST APIs
- Responsive Design


// ------------------------------
// PROJECTS
// ------------------------------

1. Portfolio Website
   - Built using React + Tailwind
   - Fully responsive
   - Smooth animations
   - Clean component structure

2. E-commerce App
   - Product listing & filtering
   - Cart functionality
   - Responsive UI

3. Task Manager App
   - Add, edit, delete tasks
   - Local storage integration
   - User-friendly UI


// ------------------------------
// EDUCATION
// ------------------------------

- B.Tech in Computer Science
  (Your College Name)


// ------------------------------
// SOCIAL LINKS
// ------------------------------

GitHub   : https://github.com/yourusername
LinkedIn : https://linkedin.com/in/yourusername
`}
        </pre>
      </div>
    </section>
  );
};

export default ResumeSection;
