import { HomeSectionsTitle } from '../HomeSectionsTitle/HomeSectionsTitle';
import { FormContact } from './FormContact/FormContact';

export const Contact = () => {
  return (
    <section
      id="Contact"
      className="flex flex-col items-center max-w-[1400px] mx-auto py-[200px] pb-[50px] text-[22px] leading-[1.6]"
      aria-label="Ces compétences"
    >
      <HomeSectionsTitle section="contact" />
      <div className="relative w-[80%] h-[2px] mb-36 my-20 mx-auto rounded bg-gradient-to-r from-highlight to-bgDark" />
      <FormContact />
    </section>
  );
};
