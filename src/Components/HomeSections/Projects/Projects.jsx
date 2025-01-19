import { HomeSectionsTitle } from '../HomeSectionsTitle/HomeSectionsTitle';
import { ProjectsCards } from './ProjectsCards/ProjectsCards';

export const Projects = () => {
  return (
    <section
      id="Projects"
      className="relative flex flex-col items-center max-w-[1400px] mx-auto py-[200px] pb-[50px] text-[22px] leading-[1.6]"
      aria-label="Présentation de Thibault"
    >
      <HomeSectionsTitle section="projets" />
      <div className="relative w-[80%] h-[2px] mb-36 my-20 mx-auto rounded bg-gradient-to-r from-highlight to-bgDark" />
      <ProjectsCards />
    </section>
  );
};
