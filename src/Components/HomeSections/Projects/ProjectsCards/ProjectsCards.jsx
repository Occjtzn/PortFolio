import { useState } from "react";
import projects from "../../../../Datas/projects.json";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoJavascript,
  IoLogoSass,
} from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiLighthouse } from "react-icons/si";
import { ProjectModal } from "../ProjectModal/ProjectModal"; // Import du modal

export const ProjectsCards = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const iconMap = {
    IoLogoHtml5: <IoLogoHtml5 className="text-html text-4xl" title="HTML5" />,
    IoLogoCss3: <IoLogoCss3 className="text-css text-4xl" title="CSS3" />,
    IoLogoReact: <IoLogoReact className="text-react text-4xl" title="React" />,
    IoLogoSass: <IoLogoSass className="text-sass text-4xl" title="Sass" />,
    IoLogoJavascript: <IoLogoJavascript className="text-javascript text-4xl" title="JavaScript" />,
    SiLighthouse: <SiLighthouse className="text-red-500 text-4xl" title="Lighthouse" />,
    RiTailwindCssFill: <RiTailwindCssFill className="text-tailwind text-5xl" />,
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
      {projects.map((project) => (
        <div
          key={project.id}
          className="relative w-full max-w-[700px] mx-auto h-auto overflow-hidden rounded-xl shadow-xl bg-bgLight border border-gray-300 hover:shadow-2xl transition-transform duration-300"
        >
          <div className="relative group w-full h-[300px] overflow-hidden shadow-large rounded-t-lg bg-gray-100">
            <img
              src={project.imgSrc}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              width="100%"
              height="300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-center mb-10 px-6 py-4 bg-textDarker bg-opacity-80 rounded-lg shadow-lg leading-relaxed text-lg">
                {project.title}
              </p>

              <div className="flex space-x-6">
                <a
                  href={project.gitLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-highlight text-textDarker font-semibold text-lg rounded-lg shadow-md hover:bg-opacity-90 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                >
                  GitHub
                </a>
                {project.site && (
                  <a
                    href={project.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-highlight text-textDarker font-semibold text-lg rounded-lg shadow-md hover:bg-opacity-90 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
                  >
                    Site
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 py-6">
            {project.technologies.map((tech, index) =>
              iconMap[tech] ? <span key={index}>{iconMap[tech]}</span> : null
            )}
          </div>
          <div className="text-center pb-6">
            <button
              onClick={() => setSelectedProject(project)}
              className="px-6 py-3 bg-highlight text-textDarker font-semibold text-lg rounded-lg shadow-md hover:bg-opacity-90 hover:shadow-lg transition duration-300 ease-in-out"
            >
              A propos
            </button>
          </div>
        </div>
      ))}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};
