import { useEffect } from 'react';
import { Footer } from '../Components/Footer/Footer';
import { Header } from '../Components/Header/Header';
import { HomeSections } from '../Components/HomeSections/HomeSections';
import { NavBar } from '../Components/Navbar/NavBar';
export const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Header />
      <NavBar />
      <HomeSections />
      <Footer />
    </>
  );
};
