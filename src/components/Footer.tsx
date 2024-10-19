import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () =>{
  return (
    <div className="h-auto bg-black text-white pb-10">
      <h1 className="p-5 text-center font-alegreya font-bold text-5xl">Get in touch</h1>
      
      <div className="flex flex-col md:flex-row justify-between items-center px-10 md:px-32 font-saira gap-10 md:gap-20">
        {/* Contact Section */}
        <div className="flex flex-col gap-5 items-center md:items-start">
          <h2 className="pb-2 font-bold text-4xl">Contact</h2>
          <div className="flex gap-5 items-center">
            <FaPhone className="text-xl" />
            <p>0751 334 3378</p>
          </div>
          <div className="flex gap-5 items-center">
            <FaEnvelope className="text-xl text-white" />
            <p>Mcanthonyotuonye@gmail.com</p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col gap-5 items-center md:items-start">
          <h2 className="pb-2 font-bold text-4xl">Social Media</h2>
          <div>
            <a
              className="flex gap-5 items-center hover:text-blue-500"
              href="https://www.linkedin.com/in/mcanthony-otuonye-826246206"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              <p>LinkedIn</p>
            </a>
          </div>
          <div>
            <a
              className="flex gap-5 items-center hover:text-blue-500"
              href="https://github.com/mac455"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <p>Github</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

}
  
export default Footer