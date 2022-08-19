import React from 'react';

function ProjectCard(props) {
  // const {title, subTitle } = project;
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.subTitle}</div>
    </div>
  )
}

export default ProjectCard;