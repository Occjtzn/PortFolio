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
      icon: (
        <IoLogoHtml5 className="text-orange-500 text-5xl sm:text-4xl md:text-3xl" />
      ),
    },
    {
      name: 'CSS',
      value: 90,
      color: 'secondary',
      icon: (
        <IoLogoCss3 className="text-blue-500 text-5xl sm:text-4xl md:text-3xl" />
      ),
    },
    {
      name: 'React',
      value: 80,
      color: 'success',
      icon: (
        <IoLogoReact className="text-cyan-500 text-5xl sm:text-4xl md:text-3xl" />
      ),
    },
    {
      name: 'Tailwind CSS',
      value: 70,
      color: 'blue',
      icon: (
        <RiTailwindCssFill className="text-blue-400 text-5xl sm:text-4xl md:text-3xl" />
      ),
    },
    {
      name: 'JavaScript',
      value: 65,
      color: 'warning',
      icon: (
        <IoLogoJavascript className="text-yellow-500 text-5xl sm:text-4xl md:text-3xl" />
      ),
    },
    {
      name: 'Node.js',
      value: 60,
      color: 'default',
      icon: (
        <IoLogoNodejs className="text-green-500 text-5xl sm:text-4xl md:text-3xl" />
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 w-full max-w-5xl mx-auto bg-gradient-to-r from-gray-100 via-white to-gray-100 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-lg sm:shadow-xl md:shadow-2xl">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex items-center gap-6 sm:gap-8 md:gap-10 p-4 sm:p-6 md:p-8 bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg md:shadow-2xl hover:shadow-lg md:hover:shadow-2xl transition-transform transform hover:scale-105"
        >
          <div className="flex items-center justify-center w-20 h-20 sm:w-16 sm:h-16 md:w-14 md:h-14 bg-gray-200 rounded-full">
            {skill.icon}
          </div>
          <div className="flex flex-col flex-1">
            <div className="flex justify-between items-center mb-2 sm:mb-3 md:mb-4">
              <span
                className="text-xl sm:text-lg md:text-base font-bold"
                style={{ fontFamily: 'Fira Code, monospace' }}
              >
                {skill.name}
              </span>
              <span className="text-md sm:text-sm md:text-xs font-medium text-gray-500">
                {skill.value}%
              </span>
            </div>
            <Progress
              aria-label={`${skill.name} progress`}
              color={skill.color}
              value={skill.value}
              className="h-3 sm:h-2 md:h-1.5"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
