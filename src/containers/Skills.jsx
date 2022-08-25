import React from 'react';

import SkillList from '../components/skillList';
import Slash from '../components/Slash';

function Skills() {
  return (
    <div id='skills' className='py-32 px-12'>
      <div className='text-center'>My Skills</div>
      <Slash />
      <SkillList />
    </div>
  )
}

export default Skills