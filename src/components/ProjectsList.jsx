import React from 'react';

import ProjectCard from './ProjectCard';
import projectsData from '../data/projectsData';

console.log(projectsData);

function newProjectCard(project){
  return(
     <ProjectCard 
    key={project.id}
    title={project.title}
    subTitle={project.subTitle}
    />
  );
 
}

function ProjectsList() {
  return (
    <div className='flex'>
        {projectsData.map(newProjectCard)}
    </div>
  )
}

export default ProjectsList;