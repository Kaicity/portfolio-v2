import { useEffect, useState } from 'react';

const Scrollable = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 1500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center space-y-4">
      <button
        onClick={scrollToTop}
        href="#"
        className={`flex items-center justify-center w-11 h-11 bg-royal text-white rounded-full shadow-md hover:bg-lavender focus:ring-2 transition cursor-pointer ${
          isVisible ? 'flex' : 'hidden'
        } `}
        title="Lên đầu trang"
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Scrollable;
