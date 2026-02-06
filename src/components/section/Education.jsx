const Education = () => {
  const educationData = [
      {
      id: 1,
      title: "Full Stack Developer (Java & React)",
      institution: "SkyySkills Acedemy",
      year: "2025 june - Present",
      percentage: "Certified",
      description:
        "Completed professional training in Full Stack Development using Java, Spring Boot, React, and MySQL with hands-on projects and industry-based learning.",
    },
    {
      id: 2,
      title: "B.Tech (Electronic and Communication Engineering)",
      institution: "Uttrakhand Technical University",
      year: "2019 - 2023",
      percentage: " 80.1%",
      description:
        "Completed Bachelor of Technology in Computer Science with a strong foundation in programming, data structures, and software development.",
    },
    {
      id: 3,
      title: "Senior Secondary (12th)",
      institution: "AD Sarswati Vidya Mandir Bhagalpur, Bihar",
      year: "2016 - 2018",
      percentage: "75%",
      description:
        "Completed Senior Secondary Education with specialization in PCM (Physics, Chemistry, Mathematics).",
    },
    {
      id: 4,
      title: "Higher Secondary (10th)",
      institution: "RS Sarswati Vidya Mandir Jogbani, Bihar",
      year: "2014 - 2016",
      percentage: "10 CGPA",
      description:
        "Completed Higher Secondary Education with a strong academic performance in core subjects.",
    },
  ];

  return (
    <section id="education" className="bg-gray-950 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-cyan-400 text-xl text-center">Education</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-center mt-2">
          My Academic Background
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="bg-gray-900 border border-gray-700 p-6 rounded-lg hover:border-cyan-400 transition"
            >
              <h3 className="text-cyan-400 text-xl font-semibold">
                {edu.title}
              </h3>
              <p className="text-gray-300 mt-2">
                <span className="font-semibold">Institution:</span>{" "}
                {edu.institution}
              </p>
              <p className="text-gray-300 mt-1">
                <span className="font-semibold">Year:</span> {edu.year}
              </p>
              <p className="text-gray-300 mt-1">
                <span className="font-semibold">Percentage:</span>{" "}
                {edu.percentage}
              </p>
              <p className="text-gray-400 mt-3 text-sm">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
