import React, { useState } from 'react';
import Modal from './Modal';

function ProjectCard(props) {
  const [ openModal, setOpenModal ] = useState(false);
  return (
    <div className='grow shrink basis-1/3'>
      <div>{props.title}</div>
      <div>{props.subTitle}</div>
      <button className="openModalBtn" onClick={()=>{setOpenModal(true)}}>Open</button>

      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  )
}

export default ProjectCard;