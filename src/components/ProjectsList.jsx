import React from 'react';

import ProjectCard from './ProjectCard';
import projectsData from '../data/projectsData';

function newProjectCard(project){
  return(
    <div>
       <ProjectCard 
        key={project.id}
        title={project.title}
        subTitle={project.subTitle}
        />
    </div>
    
  );
 
}

function ProjectsList() {
  return (
    <div className='flex md:flex-row flex-col justify-between border-solid border-red-600 border-6 w-full'>
        {projectsData.map(newProjectCard)}
    </div>
  )
}

export default ProjectsList;