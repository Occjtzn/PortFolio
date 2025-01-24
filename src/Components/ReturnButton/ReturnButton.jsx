import { useNavigate } from 'react-router-dom';
import { IoIosReturnLeft } from 'react-icons/io';

export const ReturnButton = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center mt-10">
      <button
        onClick={() => navigate('/')}
        className="hidden lg:flex px-8 py-4 bg-gradient-to-r from-highlight to-highlight/70 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-highlight focus:ring-opacity-50"
      >
        Retour à l'accueil
      </button>
      <button
        onClick={() => navigate('/')}
        className="lg:hidden  flex items-center justify-center w-12 h-12 bg-highlight text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-highlight focus:ring-opacity-50"
      >
        <IoIosReturnLeft size={24} />
      </button>
    </div>
  );
};
