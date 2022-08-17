import React from 'react'

function SkillCard(props) {
  return (
    <div className='basis-1/3'>
      <div>{props.name}</div>
      <div>{props.summary}</div>
    </div>
  )
}

export default SkillCard