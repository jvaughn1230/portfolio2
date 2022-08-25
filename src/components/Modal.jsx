import React from 'react';

// import "./Modal.css";



function Modal({closeModal}, props) {
  return (
    <div onClick={()=>{closeModal(false)}}className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='bg-white p-2 rounded'>

        {console.log("modal", props)}
        <div className='titleCloseBtn'>
          <button onClick={()=>{closeModal(false)}}>X</button>
        </div>

        <div className='title'>
          Title: {props.title}
        </div>

        <div className='body'>
          {props.subTitle}
        </div>

        <div className='footer'>
          Footer Example
        </div>

      </div>
    </div>
  );
}

export default Modal;