import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { myProjects } from '../constant/index';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { SparklesText } from '../components/SparklesText';
import { fadeInFramer } from '../helper/fadeInFramer';

const Project = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  const [preview, setPreview] = useState(null);

  return (
    <section
      className="relative c-space section-spacing"
      onMouseMove={handleMouseMove}
      id="Project"
    >
      <SparklesText>
        <h2 className="text-heading">My Selected Project</h2>
      </SparklesText>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => {
        let index = 0;
        return (
          <motion.div
            variants={fadeInFramer('up', index + 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <ProjectCard
              key={project.id}
              {...project}
              setPreview={setPreview}
            />
          </motion.div>
        );
      })}
      {preview && (
        <motion.img
          src={preview}
          className="hidden md:block fixed top-0 left-0 z-50 object-cover h-50 rounded-lg shadow-lg pointer-events-none w-80"
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Project;
