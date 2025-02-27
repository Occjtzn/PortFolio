import { HomeSectionsTitle } from '../HomeSectionsTitle/HomeSectionsTitle';
import { FormContact } from './FormContact/FormContact';

export const Contact = () => (
  <section
    id="Contact"
    className="flex flex-col items-center max-w-[1400px] mx-auto py-[180px] pb-[50px] text-[22px] leading-[1.6]"
    aria-label="Me contacter"
  >
    <HomeSectionsTitle section="contact" />
    <div className="w-[80%] h-[2px] my-16 rounded bg-gradient-to-r from-highlight to-bgDark" />
    <FormContact />
  </section>
);
