import React from 'react';

function SkillCard(props) {
  return (
    <div className='grow shrink basis-1/3 border-solid border-8 border-black pt-7 px-6'>
      <div className='text-center text-2xl font-medium'>{props.name}</div>
      <div>{props.summary}</div>
    </div>
  );
}

export default SkillCard;
