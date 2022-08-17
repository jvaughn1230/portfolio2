import React from 'react';

import ProjectCard from './ProjectCard';
import projectsData from '../data/projectsData';

console.log(projectsData);

function newProjectCard(project){
  <ProjectCard 
    key={project.id}
    title={project.title}
    subTitle={project.subTitle}
  />
}

function ProjectsList() {
  return (
    <div>
        {projectsData.map(newProjectCard)}
    </div>
  )
}

export default ProjectsList;