import { Progress } from '@nextui-org/react';
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoJavascript,
  IoLogoNodejs,
} from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';

export const ProgressBar = () => {
  const skills = [
    {
      name: 'HTML',
      value: 95,
      color: 'primary',
      icon: <IoLogoHtml5 className="text-orange-500 text-6xl" />,
    },
    {
      name: 'CSS',
      value: 90,
      color: 'secondary',
      icon: <IoLogoCss3 className="text-blue-500 text-6xl" />,
    },
    {
      name: 'React',
      value: 80,
      color: 'success',
      icon: <IoLogoReact className="text-cyan-500 text-6xl" />,
    },
    {
      name: 'Tailwind CSS',
      value: 70,
      color: 'blue',
      icon: <RiTailwindCssFill className="text-blue-400 text-6xl" />,
    },
    {
      name: 'JavaScript',
      value: 65,
      color: 'warning',
      icon: <IoLogoJavascript className="text-yellow-500 text-6xl" />,
    },
    {
      name: 'Node.js',
      value: 60,
      color: 'default',
      icon: <IoLogoNodejs className="text-green-500 text-6xl" />,
    },
  ];

  return (
    <div className="flex flex-col gap-12 w-full max-w-5xl mx-auto bg-gradient-to-r from-gray-100 via-white to-gray-100 p-10 rounded-3xl shadow-2xl">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex items-center gap-10 p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
        >
          {/* Icône */}
          <div className="flex items-center justify-center w-24 h-24 bg-gray-200 rounded-full">
            {skill.icon}
          </div>
          {/* Texte et barre */}
          <div className="flex flex-col flex-1">
            <div className="flex justify-between items-center mb-4">
              <span
                className="text-2xl font-bold"
                style={{ fontFamily: 'Fira Code, monospace' }}
              >
                {skill.name}
              </span>
              <span className="text-lg font-medium text-gray-500">
                {skill.value}%
              </span>
            </div>
            <Progress
              aria-label={`${skill.name} progress`}
              color={skill.color}
              value={skill.value}
              className="h-5"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
