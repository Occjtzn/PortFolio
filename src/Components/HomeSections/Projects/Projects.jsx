import { HomeSectionsTitle } from '../HomeSectionsTitle/HomeSectionsTitle';
import { ProjectsCards } from './ProjectsCards/ProjectsCards';

export const Projects = () => {
  return (
    <section
      id="Projects"
      className="relative mx-auto flex max-w-[1400px] flex-col items-center py-[200px] pb-[50px] text-[22px] leading-[1.6]"
      aria-label="Présentation de Thibault"
    >
      <HomeSectionsTitle section="projets" />
      <div className="relative mx-auto my-20 mb-36 h-[2px] w-4/5 rounded bg-gradient-to-r from-highlight to-bgDark" />
      <ProjectsCards />
    </section>
  );
};
