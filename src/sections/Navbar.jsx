import { useState } from 'react';

function Navigation() {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#Home">
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#Home">
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#Home">
          Work
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#Home">
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex justify-between items-center py-2">
          <a className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">
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
        <div className="block overflow-hidden text-center sm:hidden ">
          <nav className="pb-5">
            <Navigation />
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
