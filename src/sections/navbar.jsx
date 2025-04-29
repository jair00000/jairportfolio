import { useState } from 'react';

const navLinks = [
  { id: 'home', name: 'Home', href: '#home' },
  { id: 'about', name: 'About Me', href: '#about' },
  { id: 'projects', name: 'Projects', href: '#projects' },
  { id: 'contact', name: 'Contact', href: '#contact' }
];

const NavItems = ({ onClick = () => {} }) => (
  <ul className="flex gap-8">
    {navLinks.map((item) => (
      <li key={item.id}>
        <a 
          href={item.href} 
          className="text-[#666666] hover:text-[#0066FF] transition-colors text-base"
          onClick={onClick}
        >
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center py-6 px-8">
          <a href="/" className="text-[#1a1a1a] font-semibold text-2xl">
            Jair
          </a>

          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-[#0066FF] focus:outline-none md:hidden flex"
            aria-label="Toggle menu"
          >
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="md:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col p-8">
          <div className="flex justify-between items-center mb-8">
            <span className="text-[#1a1a1a] font-semibold text-2xl">Menu</span>
            <button onClick={closeMenu} className="text-gray-600 hover:text-[#0066FF]">
              <img src="assets/close.svg" alt="close" className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            <NavItems onClick={closeMenu} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
