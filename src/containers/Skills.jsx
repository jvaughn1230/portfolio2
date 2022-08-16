import React from 'react'

import SkillCard from '../components/SkillCard';
import skillData from '../data/skillsData';

console.log(skillData);

const createSkillCard = (skill) => {
  return <SkillCard
    key={skill.id} 
    name={skill.name}
    summary={skill.summary}
  />
}

const Skills = () => {
  <div>
    {skillData.map(createSkillCard)}
  </div>
}

export default Skills;
