import React from 'react';

function ProjectCard(props) {
  
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.subTitle}</div>
    </div>
  )
}

export default ProjectCard;