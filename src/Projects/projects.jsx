import { FaCodepen, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Static Pages",
    platform: "CodePen",
    link: "https://codepen.io/abel5173",
    icon: <FaCodepen size={30} />,
    description: "A collection of static pages showcasing HTML, CSS, and JavaScript skills.",
  },
  {
    title: "Web App Project",
    platform: "GitHub",
    link: "https://github.com/TsionTegene/InternshipManagementSystem",
    icon: <FaGithub size={30} />,
    description: "A frontend  web application built with Next.js",
  },
  {
    title: "Web App Project",
    platform: "GitHub",
    link: "https://github.com/bereket21-12/Web-Based-Internship-Management-System/tree/master",
    icon: <FaGithub size={30} />,
    description: "A backend web application built with Nest.js.",
  },
  {
    title: "Mobile Application",
    platform: "GitHub",
    link: "https://github.com/Abel5173/Mobile_App",
    icon: <FaGithub size={30} />,
    description: "A mobile application developed using React Native.",
  },
];

const PortfolioSection = () => {
  return (
    <section id="projects" className="bg-gray-900 py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-8">
          My Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-4 text-green-800">
                {project.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-green-800">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-800 hover:text-green-600 font-medium"
              >
                View on {project.platform}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
