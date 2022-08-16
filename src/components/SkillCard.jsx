import React from 'react'

function SkillCard(props) {
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.summary}</div>
    </div>
  )
}

export default SkillCard