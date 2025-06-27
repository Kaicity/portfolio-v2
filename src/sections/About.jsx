import { useRef } from 'react';
import Card from '../components/Card';

const About = () => {
  const grid2Container = useRef();

  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-6 md:auto-rows-[18rem]">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            alt="card-coding"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Coding With Me</p>
            <p className="subtext">
              "Technology is not just code—it's creativity, connection, and the
              power to reshape the world."
            </p>
          </div>
        </div>

        {/* Grid 2 */}
        <div ref={grid2Container} className="grid-2 grid-default-color">
          <div className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-gray-500 text-5xl">
              Code is My Life
            </p>
            <Card
              styles={{ rotate: '75deg', top: '30%', left: '20%' }}
              text="Experience"
              containerRef={grid2Container}
            />
            <Card
              styles={{ rotate: '-30deg', top: '60%', left: '45%' }}
              text="Challenge"
              containerRef={grid2Container}
            />
            <Card
              styles={{ rotate: '-45deg', top: '55%', left: '0%' }}
              text="Coding"
              containerRef={grid2Container}
            />
            <Card
              styles={{ rotate: '90deg', top: '30%', left: '70%' }}
              text="Effort"
              containerRef={grid2Container}
            />
            <Card
              styles={{ rotate: '20deg', top: '10%', left: '38%' }}
              text="Happy"
              containerRef={grid2Container}
            />
            <Card
              styles={{ rotate: '-45deg', top: '70%', left: '70%' }}
              image="assets/logos/react.png"
              containerRef={grid2Container}
            />
            <Card
              styles={{ rotate: '-45deg', top: '70%', left: '25%' }}
              image="assets/logos/nodejs.png"
              containerRef={grid2Container}
            />
            <Card
              styles={{ rotate: '-45deg', top: '5%', left: '10%' }}
              image="assets/logos/angular.png"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-3 grid-black-color"></div>

        {/* Grid 4 */}
        <div className="grid-4 grid-special-color"></div>

        {/* Grid 5 */}
        <div className="grid-5 grid-default-color"></div>
      </div>
    </section>
  );
};

export default About;
