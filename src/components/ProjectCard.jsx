import React from 'react';

function ProjectCard(props) {
  
  return (
    <div className='grow shrink basis-1/3'>
      <div>{props.title}</div>
      <div>{props.subTitle}</div>
    </div>
  )
}

export default ProjectCard;