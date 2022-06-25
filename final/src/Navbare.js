import React, { useState } from 'react';
import {GoMarkGithub} from 'react-icons/go'
import Boxm from './Boxmess'
import {FaLinkedin,FaDownload} from 'react-icons/fa'

const Navigation=({togle,Tougle})=>{
// const Tougle=()=>{
//    //setTogle(!togle)
//    console.log('togle')
// }


    const donne={ id: 1,
    name: 'Khalilou Ismael KONATE',
    job: 'Jr. Full stack developer',
    image:'https://storageresume1.blob.core.windows.net/resupic/profile12.jpg',
    text:"My passion in the field of computer science dates back to the days when my father bought me my first video game while I was 6 years old. From then on it was no looking back. I love writing codes, the idea of creating something(WebApp,mobo App...) or just the problem solving part of the job,that we have to face .",
  }
return(
   <article className='review'>
      <div className='img-container'>
        <img src={donne.image} alt={donne.name} className='person-img' />
   
      </div>
        <div><input type="checkbox" id="switch" onClick={()=>Tougle()}
                    className="checkbox" />
        <label htmlFor="switch" className="toggle"/>
        <p>Desktop\--------/Mobile</p>
        </div>
       
      <h4 className='author'>{donne.name}</h4>
      <p className='job'>{donne.job}</p>
      <p className='info'>{donne.text}</p>
      <Boxm/>
      <div ><GoMarkGithub className='iconnav' /> <FaLinkedin className='iconnav'/><FaDownload className='iconnav'/></div>
      <div className='button-container'>
       
      </div>
     
    </article>
  );
};



export default Navigation;