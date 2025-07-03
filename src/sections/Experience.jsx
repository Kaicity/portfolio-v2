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
                    <h2 className="text-lg text-neutral-400">
                      {'University of Saigon Information Technology & Software Engineering'.toUpperCase()}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <img
                      src="/assets/timeline/dhsg_1.webp"
                      alt="hero template"
                      width={500}
                      height={500}
                      className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                    <img
                      src="/assets/timeline/dhsg_2.webp"
                      alt="feature template"
                      width={500}
                      height={500}
                      className="h-40 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                  </div>

                  <ul className="text-md list-disc pl-5 text-neutral-300 space-y-4">
                    <li>
                      <strong>
                        University of Technology (SAI GON) — Bachelor of
                        Information Technology
                      </strong>
                      <br />
                      <span className="text-sm text-neutral-400">
                        2021 – 2025
                      </span>
                      <br />
                      Built a strong academic foundation in Technical Software,
                      with a focus on software development, systems engineering,
                      and programming principles. Completed intensive coursework
                      in C programming, algorithms and data structures,
                      object-oriented design, databases, computer networks, and
                      operating systems, Data Model, Framework other.
                      <br />
                      <br />
                      Gained hands-on experience through various academic and
                      extracurricular projects, including:
                      <ul className="list-disc pl-5 mt-2 space-y-2">
                        <li>
                          Developed multiple full-stack web applications using
                          ReactJS, Node.js, and Firebase.
                        </li>
                        <li>
                          Participated in the TIKI Hackathon 2022 and achieved
                          Top 30 out of 500+ teams.
                        </li>
                        <li>
                          Completed a final-year internship at Cozwork,
                          contributing to real-world development workflows in an
                          agile team.
                        </li>
                        <li>
                          Built and deployed an institutional website for the
                          Institute of Legal Science and Corporate Development
                          (ILC).
                        </li>
                      </ul>
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

                  <div className="mb-4 space-y-2">
                    <div className="flex items-center gap-2 text-md dark:text-neutral-300">
                      ✅Scientific Research Project: Distributed Data Management
                      and Query Optimization on SQL Server
                    </div>
                    <div className="flex items-center gap-2 text-md dark:text-neutral-300">
                      ✅Applied advanced query optimization techniques to
                      enhance performance in distributed environments, including
                      indexing strategies, query rewriting, and partitioning.
                    </div>
                  </div>

                  <ul className="list-disc pl-5 text-md text-neutral-700 dark:text-neutral-300 space-y-4 mb-3">
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
