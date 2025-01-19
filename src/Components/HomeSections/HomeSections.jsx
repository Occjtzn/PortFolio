import { About } from './About/About';
import { Contact } from './Contact/Contact';
import { Projects } from './Projects/Projects';
import { Skills } from './Skills/Skills';

export const HomeSections = () => {
  return (
    <>
      <section id="About">
        <About />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </>
  );
};
