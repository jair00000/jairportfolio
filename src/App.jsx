import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';

const App = () => {
  return (
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
  );
};

export default App;
