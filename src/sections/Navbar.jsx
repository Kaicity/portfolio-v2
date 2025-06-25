import ToggleLogo from '../assets/react.svg';

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex justify-between items-center py-2">
          <a className="text-xl font-bold transition-colors text-neutral-400 hover:text-white">
            Thongular
          </a>
          <button className="">
            <img src={ToggleLogo} alt="toggle" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
