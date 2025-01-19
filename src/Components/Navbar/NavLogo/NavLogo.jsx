import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '/assets/Logo/LogoPortfolio.webp';

export const NavLogo = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <div onClick={handleClick} className="cursor-pointer group inline-block">
      <img
        src={Logo}
        alt="Logo"
        className="h-36 w-auto transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-6"
      />
    </div>
  );
};
