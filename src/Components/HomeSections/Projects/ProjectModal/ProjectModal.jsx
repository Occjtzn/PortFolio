import { IoClose } from "react-icons/io5";

const highlightKeywords = (text) => {
  if (!text) return "";

  const keywords = ["React", "Tailwind CSS", "Framer Motion", "Sass"];
  const regex = new RegExp(`\\b(${keywords.join("|")})\\b`, "gi");

  return text.split(regex).map((part, index) =>
    keywords.includes(part) ? (
      <span key={index} className="text-highlight font-bold">{part}</span>
    ) : (
      part
    )
  );
};

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white mt-24 w-full max-w-5xl p-8 rounded-xl shadow-2xl relative max-h-[80vh] overflow-hidden">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-600 hover:text-gray-900">
          <IoClose className="text-3xl" />
        </button>

        <h2 className="text-3xl font-bold text-gray-800 mb-4 self-start">{project.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <img
            src={project.imgSrc}
            alt={project.title}
            className="w-full h-50 object-contain rounded-lg"
          />

          <div className="flex flex-col justify-between space-y-2">
            <p className="text-textDarker text-lg font-medium leading-relaxed border-l-4 border-highlight pl-4">
              {project.description}
            </p>

            {project.context && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Contexte</h3>
                <p className="text-gray-600 text-base leading-relaxed">{highlightKeywords(project.context)}</p>
              </div>
            )}

            {project.problematic && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Problématique</h3>
                <p className="text-gray-600 text-base leading-relaxed">{highlightKeywords(project.problematic)}</p>
              </div>
            )}

            {project.solution && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Solution</h3>
                <p className="text-gray-600 text-base leading-relaxed">{highlightKeywords(project.solution)}</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end space-x-4 mt-4">
          {project.gitLink && (
            <a
              href={project.gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-highlight text-textDarker font-semibold text-lg rounded-lg shadow-md hover:bg-opacity-90 hover:shadow-lg transition duration-300 ease-in-out"
            >
              GitHub
            </a>
          )}
          {project.site && (
            <a
              href={project.site}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-highlight text-textDarker font-semibold text-lg rounded-lg shadow-md hover:bg-opacity-90 hover:shadow-lg transition duration-300 ease-in-out"
            >
              Voir le site
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
