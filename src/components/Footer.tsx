import React from 'react'
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function () {
  return (
    <div>
          
      <div className= 'h-auto bg-black text-3xl text-white pb-10 '>
        <h1 className='p-5 text-center font-alegreya font-bold text-5xl'>Get in touch</h1>
        <div className='flex justify-between pl-10 pr-32 font-saira'>
          <div className='flex flex-col ml-10 gap-5'>
            <h2 className='pb-2 font-bold text-4xl'>Contact</h2>
            <div className='flex gap-5 items-center'>
              <FaPhone className="text-xl"/>
              <p>0751 334 3378 </p>
             </div>
             <div className='flex gap-5 items-center'>
              <FaEnvelope className='text-xl text-white'/>
              <p>Mcanthonyotuonye@gmail.com</p>
             </div>
          </div>
          <div className='flex flex-col ml-10 gap-5'> 
            <h2 className='pb-2 font-bold text-4xl'>Social Media</h2>    
            <div>
              <a 
              className='flex gap-5 items-center'
              href='https://www.linkedin.com/in/mcanthony-otuonye-826246206' 
              target='_blank' 
              rel='noopener noreferrer'>
                <FaLinkedin/>
                <p>LinkedIn</p>
                </a>
            </div>
            <div>
              <a 
              className='flex gap-5 items-center'
              href="https://github.com/mac455" 
              target='_blank' 
              rel='noopener noreferrer'>    
                <FaGithub/>
                <p>Github</p>
                </a>
           
            </div>
            
          </div>
  
        </div>
     </div>
    </div>
  )
}
