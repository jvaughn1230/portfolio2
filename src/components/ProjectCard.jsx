import React from 'react';

function ProjectCard({project}) {
  const {title, subTitle } = project;
  return (
    <div>
      <div>{title}</div>
      <div>{subTitle}</div>
    </div>
  )
}

export default ProjectCard;