export default function MyExpertise() {
  const expertise = [
    {
      title: "Frontend Dev",
      technologies: "React, NextJS",
      description:
        "Passionate about UI/UX. Over 2 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
      color: "#4CAF50",
    },
    {
      title: "Backend Dev",
      technologies: "RestAPI's, mySQL",
      description:
        "Backend developer experienced in building REST APIs, working with databases, Node.js, and developing reliable server-side solutions.",
      color: "#2196F3",
    },
    {
      title: "Web Design",
      technologies: "Figma",
      description:
        "Experience in UI/UX design, Figma and creating modern, intuitive website interfaces with a strong focus on usability and visual quality.",
      color: "#E88D14",
    },
  ];

  return (
    <section id="expertise" className="pt-[100px]">
      <div className="max-w-7xl mx-auto px-5 md:px-10 w-full">
        <h2 className="text-6xl font-bold text-white mb-8 sm:mb-12 text-center">
          My Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="bg-[#2A3B44] border border-gray-700 p-6 hover:border-gray-600 transition-colors"
            >
              <h3
                className="text-2xl font-bold text-white  relative z-10 expertise-title"
                style={{ "--underline-color": item.color }}
              >
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{item.technologies}</p>
              <div className="flex gap-2">
                <div className="flex items-center justify-center flex-col place-content-between text-gray-500">
                  <span className="text-xs">&lt;p&gt;</span>
                  <span className="bg-gray-500 h-[calc(100%+20px)] w-[2px]"></span>
                  <span className="text-xs">&lt;/p&gt;</span>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
