import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NHF from './pages/NHF.jsx';
import SystemDesign from './pages/systemDesign.jsx';
import MobileApp from './pages/mobileApp.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="bg-white">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Projects />
              <Clients />
              <Contact />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/nhf" element={<NHF />} />
        <Route path="/system-design" element={<SystemDesign />} />
        <Route path="/mobile-app" element={<MobileApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
