import { useNavigate } from 'react-router-dom';

export const ReturnButton = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center mt-10">
      <button
        onClick={() => navigate('/')}
        className="px-8 py-4 bg-gradient-to-r from-highlight to-highlight/70 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-highlight focus:ring-opacity-50"
      >
        Retour à l'accueil
      </button>
    </div>
  );
};
