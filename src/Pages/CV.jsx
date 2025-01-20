import { useEffect } from 'react';
import { CVFrame } from '../Components/CVFrame/CVFrame';
import { MiroFrame } from '../Components/MiroFrame/MiroFrame';
import { ReturnButton } from '../Components/ReturnButton/ReturnButton';
import { Footer } from '../Components/Footer/Footer';

export const CV = () => {
  const cvUrl = '/public/assets/CV/CV.pdf';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <div className="fixed w-full z-[1000] flex items-center px-4 py-2">
        <div className="ml-auto mr-8">
          <ReturnButton />
        </div>
      </div>

      <div className="pt-28">
        <CVFrame cvUrl={cvUrl} />
        <MiroFrame />
        <Footer />
      </div>
    </div>
  );
};
