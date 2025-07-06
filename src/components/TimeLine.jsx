import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { SparklesText } from '../components/SparklesText';
import { Confetti } from '../components/Confetti';
import { HeroVideoDialog } from '../components/HeroVideoDialog';
import { fadeInFramer, slideInLeft } from '../helper/fadeInFramer';
import { Lens } from '../components/Lens';

function reseachScienceImageRendering() {
  return (
    <img
      src="/assets/timeline/nckh.png"
      alt="Giấy chứng nhận"
      width={500}
      height={500}
      className="w-full h-full rounded-lg object-cover border-4 border-white shadow-inner"
    />
  );
}

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  const confettiRef = useRef(null);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      <SparklesText>
        <h2 className="text-heading">My Work Experience</h2>
      </SparklesText>
      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky z-40 flex flex-col items-center self-start max-w-xs md:flex-row top-40 lg:max-w-sm md:w-full">
              <div className="absolute flex items-center justify-center w-10 h-10 rounded-full -left-[15px] bg-midnight">
                <div className="w-4 h-4 p-2 border rounded-full bg-neutral-800 border-neutral-700" />
              </div>
              <div className="flex-col hidden gap-2 text-xl font-bold md:flex md:pl-20 md:text-4xl text-neutral-300">
                <h3>{item.date}</h3>
                <h3 className="text-3xl text-neutral-400">{item.title}</h3>
                <h3 className="text-3xl text-neutral-500">{item.job}</h3>
              </div>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <div className="block mb-4 text-2xl font-bold text-left text-neutral-300 md:hidden ">
                <h3>{item.date}</h3>
                <h3>{item.job}</h3>
              </div>

              {item.images.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {item.images.map((image) => {
                    let index = 0;
                    return (
                      <motion.div
                        variants={fadeInFramer('up', index + 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.5 }}
                      >
                        <Lens>
                          <img
                            src={image}
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60 hover-animation"
                          />
                        </Lens>
                      </motion.div>
                    );
                  })}
                </div>
              )}

              {item.contents.map((content, index) => (
                <motion.p
                  className="mb-3 font-normal text-neutral-400"
                  key={index}
                  variants={slideInLeft(0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  {content}
                </motion.p>
              ))}

              {item.videoUrl && (
                <div className="relative mt-8">
                  <HeroVideoDialog
                    className="hidden dark:block"
                    animationStyle="from-center"
                    videoSrc={`https://www.youtube.com/embed/${item.videoUrl}`}
                    thumbnailSrc={item.thumbnailSrc}
                    thumbnailAlt="Hero Video"
                  />
                </div>
              )}

              {item.certificate && item.certificate == 'rs' && (
                <>
                  <h2 className="headtext">Certificate: </h2>
                  <div className="p-2 border-2 border-white border-dashed rounded-xl shadow-xl">
                    <Confetti
                      ref={confettiRef}
                      className="absolute left-0 top-0 z-0 size-full"
                      onMouseEnter={() => {
                        confettiRef.current?.fire({});
                      }}
                    />
                    {reseachScienceImageRendering()}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + 'px',
          }}
          className="absolute md:left-1 left-1 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-lavender/50 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
