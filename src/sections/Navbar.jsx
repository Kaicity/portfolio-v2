import { useState } from 'react';
import { motion } from 'motion/react';
import { Link as ScrollLink } from 'react-scroll';

function Navigation() {
  const navItems = [
    'Home',
    'About',
    'Experience',
    'Project',
    'Feedback',
    'Contact',
  ];

  return (
    <ul className="nav-ul space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:items-center">
      {navItems.map((item) => (
        <li key={item} className="nav-li">
          <ScrollLink
            to={item}
            smooth={true}
            duration={500}
            offset={-70}
            className="nav-link cursor-pointer text-neutral-400 hover:text-white transition-colors"
            activeClass="text-white font-semibold"
            spy={true}
          >
            {item}
          </ScrollLink>
        </li>
      ))}
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex justify-between items-center py-2">
          <a
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white cursor-pointer"
            href="/"
          >
            Nguyễn Minh Thông
          </a>
          <button
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={isOpen ? '/assets/close.svg' : '/assets/menu.svg'}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: '100vh' }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-5">
            <Navigation />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
