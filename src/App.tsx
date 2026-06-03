import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import AgeGroups from './components/AgeGroups';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Registration from './components/Registration';
import Contact from './components/Contact';
import SocialMedia from './components/SocialMedia';
import Feedback from './components/Feedback';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="bg-black text-white overflow-hidden">
      <Header />
      <Hero />
      <Stats />
      <About />
      <AgeGroups />
      <Pricing />
      <Location />
      <Registration />
      <Contact />
      <SocialMedia />
      <Feedback />
      <Footer />
    </div>
  );
}
