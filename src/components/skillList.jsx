import React from 'react'

import SkillCard from './SkillCard';

import skillData from '../data/skillsData';

function newSkillCard(newSkill){
  return(
    <SkillCard
      key={newSkill.id}
      name={newSkill.name}
      summary={newSkill.summary}
    />
  );
}

function SkillList(){
  return(
    <div className='flex flex-wrap md:flex-row flex-col justify-start'>
      {skillData.map(newSkillCard)}
    </div>
  );
}

export default SkillList