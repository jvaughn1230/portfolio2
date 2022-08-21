import React from 'react'

function SkillCard(props) {
  return (
    <div className='grow shrink basis-1/3'>
      <div>{props.name}</div>
      <div>{props.summary}</div>
    </div>
  )
}

export default SkillCard

// I want each item to have a 1 and 1 grow and shrink with basis determining size (1-3 etc)