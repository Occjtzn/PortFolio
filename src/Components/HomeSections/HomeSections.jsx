import { About } from './About/About';
import { Contact } from './Contact/Contact';
import { Projects } from './Projects/Projects';
import { Skills } from './Skills/Skills';

export const HomeSections = () => {
  return (
    <>
      <section id="About" className="px-4 sm:px-0">
        <About />
      </section>
      <section id="Projects" className="px-4 sm:px-0">
        <Projects />
      </section>
      <section id="Skills" className="px-4 sm:px-0">
        <Skills />
      </section>
      <section id="Contact" className="px-4 sm:px-0">
        <Contact />
      </section>
    </>
  );
};
