import { Progress } from '@nextui-org/react';
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoSass,
} from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';

export const ProgressBar = () => {
  const skills = [
    {
      name: 'HTML',
      value: 95,
      color: 'bg-html', // Utilisation de la couleur définie dans Tailwind
      icon: <IoLogoHtml5 className="text-html text-5xl" />,
    },
    {
      name: 'CSS',
      value: 90,
      color: 'bg-css',
      icon: <IoLogoCss3 className="text-css text-5xl" />,
    },
    {
      name: 'SASS',
      value: 85,
      color: 'bg-sass',
      icon: <IoLogoSass className="text-sass text-5xl" />,
    },
    {
      name: 'React',
      value: 80,
      color: 'bg-react',
      icon: <IoLogoReact className="text-react text-5xl" />,
    },
    {
      name: 'Tailwind CSS',
      value: 70,
      color: 'bg-tailwind',
      icon: <RiTailwindCssFill className="text-tailwind text-5xl" />,
    },
    {
      name: 'JavaScript',
      value: 65,
      color: 'bg-javascript',
      icon: <IoLogoJavascript className="text-javascript text-5xl" />,
    },
    {
      name: 'Node.js',
      value: 60,
      color: 'bg-nodejs',
      icon: <IoLogoNodejs className="text-nodejs text-5xl" />,
    },
  ];

  return (
    <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full max-w-5xl mx-auto bg-gradient-to-r from-gray-100 via-white to-gray-100 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl shadow-lg">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex items-center gap-6 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <div className="flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full">
            {skill.icon}
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xl font-bold font-code">{skill.name}</span>
              <span className="text-md font-medium text-gray-500">
                {skill.value}%
              </span>
            </div>
            <div className="w-full h-3 rounded-md overflow-hidden bg-gray-300">
              <div
                className={`h-full ${skill.color}`}
                style={{ width: `${skill.value}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
