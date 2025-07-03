import React, { useState } from 'react';
import ProjectDetail from './ProjectDetail';

const ProjectCard = ({
  title,
  description,
  subDescription,
  href,
  logo,
  image,
  tags,
  setPreview,
  duration,
  demoHref,
}) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div
        className="flex-wrap items-center py-10 justify-between space-y-14 sm:flex sm:space-y-0"
        onMouseMove={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <h4 className="subtext mb-2">{duration}</h4>
          <p className="text-2xl">{title}</p>
          <div className="flex flex-wrap gap-x-3 md:flex gap-5 mt-2 text-sand">
            {tags.map((tag) => (
              <span key={tag.name}>{tag.name}</span>
            ))}
          </div>

          {demoHref && (
            <div className="flex gap-3 items-center mt-2">
              <h4 className="text-amber-50">View site:</h4>
              <a
                href={demoHref}
                className="text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>{demoHref}</i>
              </a>
            </div>
          )}
        </div>
        <button
          className="flex items-center gap-1 cursor-pointer hover-animation"
          onClick={() => setOpenModal(true)}
        >
          Read More
          <img src="assets/arrow-right.svg" alt="" className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {openModal && (
        <ProjectDetail
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setOpenModal(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;
