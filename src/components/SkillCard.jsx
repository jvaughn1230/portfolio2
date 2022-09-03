import React from 'react';

import {AiFillHtml5} from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { FaServer } from 'react-icons/fa';
import { FaDatabase } from 'react-icons/fa';

function SkillCard(props) {
  console.log(props);
  return (
    <div className='grow shrink md:basis-1/3 pt-7 px-6'>
      <div className='flex justify-center text-ocean my-4'>
        {props.name==="React" && <FaReact size={60} />}
        {props.name==="HTML" && <AiFillHtml5 size={60} />}
        {props.name==="Styling" && <SiCss3 size={60} />}
        {props.name==="JavaScript" && <SiJavascript size={60} />}
        {props.name==="Server Development" && <FaServer size={60} />}
        {props.name==="Database Development" && <FaDatabase size={60} />}
      </div>
      <div className='text-center text-2xl font-medium mb-2'>{props.name}</div>
      <div className='text-center'>{props.summary}</div>
    </div>
  );
}

export default SkillCard;
