import { motion } from 'motion/react';
import { useRef } from 'react';
import { BackgroundBeamsWithCollision } from '../components/BackgroundBeamsWithCollision';
import Card from '../components/Card';
import { SkillBar } from '../components/SkillBar';
import { SparklesText } from '../components/SparklesText';
import { slideInLeft, slideInRight } from '../helper/fadeInFramer';

const About = () => {
  const grid2Container = useRef();

  return (
    <section className="c-space section-spacing" id="About">
      <SparklesText>
        <h2 className="text-heading">About Me</h2>
      </SparklesText>
      <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-6 md:auto-rows-[18rem]">
        {/* Grid 1 */}

        <BackgroundBeamsWithCollision className="flex flex-col justify-start gap-6 items-start p-6 grid-default-color grid-1">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="assets/avatar/avatar.png"
              alt="Nguyen Minh Thong"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <div>
              <h3 className="text-2xl font-bold">Nguyen Minh Thong</h3>
              <p className="text-gray-500">Front-end Web Developer</p>
            </div>
          </div>

          <p className="italic subtext text-gray-700 mb-4">
            "Technology is not just code—it's creativity, connection, and the
            power to reshape the world."
          </p>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <div className="font-semibold text-gray-500 text-md">
                Birthdate:
              </div>
              <div>01/06/2002</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="font-semibold text-gray-500 text-md">Github:</div>
              <a
                href="https://github.com/Kaicity"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline"
              >
                https://github.com/Kaicity
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="font-semibold text-gray-500 text-md">Phone:</div>
              <div>+84 703 338 458</div>
            </div>

            <div className="flex items-start gap-4">
              <div className="font-semibold text-gray-500 text-md">
                Location:
              </div>
              <div>
                317A Nguyen Van Luong, Phu Lam Ward, Ho Chi Minh City, Viet Nam
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="font-semibold text-gray-500 text-md">Age:</div>
              <div>23</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="font-semibold text-gray-500 text-md">Level:</div>
              <div>Junior Web Developer</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="font-semibold text-gray-500 text-md">Email:</div>
              <a
                href="mailto:nguyenminhthongtimix@gmail.com"
                className="text-blue-400 underline"
              >
                nguyenminhthongtimix@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="font-semibold text-gray-500 text-md">
                Freelance:
              </div>
              <div>Available</div>
            </div>
          </div>
        </BackgroundBeamsWithCollision>

        {/* Grid 2 */}
        <motion.div
          ref={grid2Container}
          className="grid-2 grid-default-color"
          variants={slideInRight(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
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
              image="assets/logos/react.svg"
              containerRef={grid2Container}
            />
            <Card
              styles={{ rotate: '-45deg', top: '70%', left: '25%' }}
              image="assets/logos/tailwindcss.svg"
              containerRef={grid2Container}
            />
            <Card
              styles={{ rotate: '-45deg', top: '5%', left: '10%' }}
              image="assets/logos/angular.png"
              containerRef={grid2Container}
            />
          </div>
        </motion.div>

        {/* Grid 3 */}
        <motion.div
          className="grid-3 grid-black-color"
          variants={slideInRight(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="z-10 w-full">
            <p className="headtext">My Work</p>
            <p className="subtext">
              I am a highly motivated and detail-oriented full-stack developer
              with hands-on experience in designing, building, and deploying
              real-world web applications. My projects span across e-commerce
              platforms, logistics apps, and enterprise-level management
              systems.
            </p>
          </div>
        </motion.div>

        {/* Grid 4 */}
        <motion.div
          className="grid-4 grid-default-color"
          variants={slideInLeft(0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src="assets/coding-pov.png"
            alt="card-coding"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Coding With Me</p>
          </div>
        </motion.div>

        {/* Grid 5 */}
        <motion.div
          className="grid-5 grid-default-color"
          variants={slideInRight(0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="w-full">
            <p className="text-3xl font-bold text-white mb-6">My Skills</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
              {/* Frontend Skills */}
              <div>
                <p className="text-xl font-semibold mb-4">Frontend</p>
                <SkillBar skill="React" percentage={90} />
                <SkillBar skill="Next.js" percentage={65} />
                <SkillBar skill="TypeScript" percentage={70} />
                <SkillBar skill="HTML/CSS" percentage={90} />
              </div>

              {/* Backend Skills */}
              <div>
                <p className="text-xl font-semibold mb-4">Backend</p>
                <SkillBar skill="Node.js" percentage={65} />
                <SkillBar skill="Express.js" percentage={60} />
                <SkillBar skill="MongoDB" percentage={70} />
                <SkillBar skill="Firebase" percentage={80} />
              </div>

              {/* Tools & Platforms */}
              <div>
                <p className="text-xl font-semibold mb-4">Tools & Platforms</p>
                <SkillBar skill="Git / GitHub" percentage={100} />
                <SkillBar skill="Docker" percentage={60} />
                <SkillBar skill="Postman" percentage={80} />
                <SkillBar skill="Figma" percentage={90} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
