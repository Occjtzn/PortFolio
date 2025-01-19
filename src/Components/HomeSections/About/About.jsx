import { HomeSectionsTitle } from '../HomeSectionsTitle/HomeSectionsTitle';

export const About = () => (
  <section
    id="About"
    className="flex flex-col items-center max-w-[1400px] mx-auto py-[200px] pb-[50px] text-[22px] leading-[1.6] relative overflow-hidden"
    aria-label="Présentation de Thibault"
  >
    <HomeSectionsTitle section="presentation" className="mb-10" />

    <div className="relative w-[80%] h-[2px] mb-36 my-20 mx-auto rounded bg-gradient-to-r from-highlight to-bgDark"></div>

    <p className="mb-[20px] text-text text-center max-w-[900px] leading-relaxed font-body font-light text-2xl">
      Passionné par le développement web, je conçois des solutions modernes et
      performantes. Avec des technologies comme{' '}
      <strong className="font-code text-highlight font-medium">
        JavaScript, React, HTML5 et CSS3,
      </strong>{' '}
      je crée des interfaces intuitives et centrées sur l'utilisateur.
      <br />
      En back-end, je m'appuie sur{' '}
      <strong className="font-code text-highlight font-medium">
        Node.js
      </strong>{' '}
      pour développer des systèmes robustes et garantir une communication fluide
      entre les différentes parties d'une application.
      <br />
      Grâce à mon expertise en{' '}
      <strong className="font-code text-highlight font-medium">
        élaboration de cahiers des charges,
      </strong>{' '}
      je structure efficacement les projets en définissant des objectifs clairs
      et en assurant une coordination optimale.
    </p>
  </section>
);
