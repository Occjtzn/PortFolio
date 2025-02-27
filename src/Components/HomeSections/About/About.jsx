import { HomeSectionsTitle } from '../HomeSectionsTitle/HomeSectionsTitle';

export const About = () => (
  <section
    id="About"
    className="flex flex-col items-center max-w-[1400px] mx-auto py-[180px] pb-[50px] text-[22px] leading-[1.6] relative overflow-hidden"
    aria-label="Présentation de Thibault"
  >
    <HomeSectionsTitle section="presentation" className="mb-12" />

    <div className="w-[80%] h-[2px] my-16 rounded bg-gradient-to-r from-highlight to-bgDark" />

    <p className="text-text text-center max-w-[900px] leading-relaxed font-body font-light text-2xl space-y-6">
      Passionné par le développement web et l'IT, je conçois des solutions
      modernes et performantes. Avec des technologies comme{' '}
      <strong className="font-code text-highlight font-medium">
        JavaScript, TypeScript, React, HTML5, CSS3, TailwindCSS
      </strong>
      , je crée des interfaces intuitives et centrées sur l'utilisateur.
    </p>

    <p className="text-text text-center max-w-[900px] leading-relaxed font-body font-light text-2xl space-y-6">
      En back-end, je m'appuie sur{' '}
      <strong className="font-code text-highlight font-medium">Node.js</strong>
      pour développer des systèmes robustes et garantir une communication fluide
      entre les différentes parties d'une application.
    </p>

    <p className="text-text text-center max-w-[900px] leading-relaxed font-body font-light text-2xl space-y-6">
      Grâce à mon expertise en{' '}
      <strong className="font-code text-highlight font-medium">
        élaboration de cahiers des charges
      </strong>
      , je structure efficacement les projets en définissant des objectifs
      clairs et en assurant une coordination optimale.
    </p>
  </section>
);
