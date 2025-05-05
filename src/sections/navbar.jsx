import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { id: 'home', name: 'Home', href: '#home' },
  { id: 'about', name: 'About Me', href: '#about' },
  { id: 'projects', name: 'Projects', href: '#projects' },
  { id: 'contact', name: 'Contact', href: '#contact' }
];

const scrollToSection = (hash) => {
  const el = document.querySelector(hash);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

const NavItems = ({ onClick = () => {}, onContactClick }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNav = (e, href) => {
    e.preventDefault();
    // Special case: If on NHF page and Contact is clicked, scroll to NHF contact
    if (location.pathname === '/nhf' && href === '#contact') {
      scrollToSection('#contact');
      onClick();
      return;
    }
    // Special case: If on System Design page and Contact is clicked, scroll to System Design contact
    if (location.pathname === '/system-design' && href === '#contact') {
      scrollToSection('#contact');
      onClick();
      return;
    }
    // Special case: If on Mobile App page and Contact is clicked, use the provided onContactClick
    if (location.pathname === '/mobile-app' && href === '#contact') {
      onContactClick?.();
      onClick();
      return;
    }
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(href), 100);
    } else {
      scrollToSection(href);
    }
    onClick();
  };

  return (
    <ul className="flex gap-8">
      {navLinks.map((item) => (
        <li key={item.id}>
          <Link
            to={location.pathname === '/' ? '#' : '/'}
            className="text-[#666666] hover:text-[#0066FF] transition-colors text-base"
            onClick={(e) => handleNav(e, item.href)}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Navbar = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center py-6 px-8">
          <Link to="/" className="text-[#1a1a1a] font-semibold text-2xl">
            Jair
          </Link>

          <button
            onClick={toggleMenu}
            className="relative w-10 h-10 flex items-center justify-center lg:hidden focus:outline-none group"
            aria-label="Toggle menu"
          >
            {/* Hamburger icon (animated to X) */}
            <span className="sr-only">Open main menu</span>
            <div className="w-6 h-6 flex flex-col justify-between items-center">
              <span
                className={`block h-0.5 w-full bg-gray-700 rounded transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2.5 bg-[#0066FF]' : ''}`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-gray-700 rounded transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-gray-700 rounded transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2.5 bg-[#0066FF]' : ''}`}
              ></span>
            </div>
          </button>

          <nav className="lg:flex hidden">
            <NavItems onContactClick={onContactClick} />
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <div className="flex flex-col p-8">
          <div className="flex justify-between items-center mb-8">
            <span className="text-[#1a1a1a] font-semibold text-2xl">Menu</span>
            <button onClick={closeMenu} className="text-gray-600 hover:text-[#0066FF]">
              <img src="assets/close.svg" alt="close" className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            <NavItems onClick={closeMenu} onContactClick={onContactClick} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
