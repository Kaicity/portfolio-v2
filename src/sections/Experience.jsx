import { useRef } from 'react';
import { SparklesText } from '../components/SparklesText';
import { Timeline } from '../components/TimeLine';
import { Confetti } from '../components/Confetti';

const Experience = () => {
  const confettiRef = useRef(null);

  return (
    <section className="c-space section-spacing">
      <SparklesText>
        <h2 className="text-heading">Summary</h2>
      </SparklesText>

      <div className="relative w-full overflow-clip">
        <Timeline
          data={[
            {
              title: '2020 - 2025',
              content: (
                <div>
                  <div className="mb-4 space-y-4">
                    <h2 className="text-heading">Education</h2>
                    <h2 className="text-xl text-neutral-400">
                      {'University of Saigon Information Technology & Software Engineering'.toUpperCase()}
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <img
                      src="/assets/timeline/dhsg_1.webp"
                      alt="hero template"
                      width={500}
                      height={500}
                      className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                    <img
                      src="/assets/timeline/dhsg_2.webp"
                      alt="feature template"
                      width={500}
                      height={500}
                      className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                  </div>

                  <ul className="list-disc pl-5 text-md text-neutral-700 dark:text-neutral-300 space-y-4">
                    <li>
                      Solid foundation in programming, software development
                      processes, and system analysis and design.
                    </li>
                    <li>
                      <strong>2021:</strong> Acquired fundamental knowledge in C
                      programming, algorithms, operating systems, and system
                      analysis and design.
                    </li>
                    <li>
                      <strong>2022:</strong> Participated in the TIKI Hackathon
                      competition and achieved Top 30 recognition.
                    </li>
                    <li>
                      <strong>2023:</strong> Developed an e-commerce website
                      project for a clothing store.
                    </li>
                    <li>
                      <strong>2024:</strong> Completed a graduation internship
                      at Cozwork.
                    </li>
                    <li>
                      <strong>2025:</strong> Developed an ILC website system
                      about Institute of Legal Science and Corporate
                      Development.
                    </li>
                  </ul>
                </div>
              ),
            },
            {
              title: '2023 – Present',
              content: (
                <div>
                  <div className="mb-8 space-y-4">
                    <h2 className="text-heading">Professional Experience</h2>
                    <h2 className="text-xl text-neutral-400">
                      {'Front-end Developer Fresher / Junior'.toUpperCase()}
                    </h2>
                  </div>

                  <ul className="list-disc pl-5 text-md text-neutral-700 dark:text-neutral-300 space-y-4">
                    <li>
                      Developed SB Shuttle Tini App using JavaScript and custom
                      frameworks Tini Developer.
                    </li>
                    <li>
                      Built Windows Forms Hotel Management Application with C#
                      and Entity Framework.
                    </li>
                    <li>
                      Build an e-commerce website for a clothing store use
                      Microservices Architecture.
                    </li>
                    <li>
                      Interned as Frontend Developer for NG-WORD / CHAT-BOX at
                      Cozwork Company.
                    </li>
                    <li>
                      Participate in research on developing an online sales
                      system using distributed database technology.
                    </li>
                    <li>
                      Freelancer Project: Outsourcing Human Resource System
                      Managament in prosecutor's office ILC{' '}
                      <strong>{'(03/2025 - 05/2025)'}</strong>
                    </li>
                  </ul>
                </div>
              ),
            },
            {
              title: '2024 – 2025',
              content: (
                <div>
                  <div className="mb-8 space-y-4">
                    <h2 className="text-heading">RESEARCH SCIENCE</h2>
                    <h2 className="text-xl text-neutral-400">
                      {'Conducted at University of Saigon.'.toUpperCase()}
                    </h2>
                  </div>

                  <ul className="list-disc pl-5 text-md text-neutral-700 dark:text-neutral-300 space-y-4 mb-3">
                    <li>
                      Scientific Research Project: Distributed Data Management
                      and Query Optimization on SQL Server
                    </li>
                    <li>
                      Applied advanced query optimization techniques to enhance
                      performance in distributed environments, including
                      indexing strategies, query rewriting, and partitioning.
                    </li>
                    <li>
                      <strong>Certificate:</strong>
                    </li>
                  </ul>

                  <div className="p-2 border-2 border-white border-dashed rounded-xl shadow-xl">
                    <Confetti
                      ref={confettiRef}
                      className="absolute left-0 top-0 z-0 size-full"
                      onMouseEnter={() => {
                        confettiRef.current?.fire({});
                      }}
                    />
                    <img
                      src="/assets/timeline/nckh.png"
                      alt="Giấy chứng nhận"
                      width={500}
                      height={500}
                      className="w-full rounded-lg object-cover border-4 border-white shadow-inner"
                    />
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Experience;
