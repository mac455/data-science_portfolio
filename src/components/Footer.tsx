import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="h-auto bg-black text-white pb-10">
      <h1 className="p-5 text-center font-alegreya font-bold text-3xl sm:text-4xl lg:text-5xl">
        Get in touch
      </h1>

      {/* Contact and Social Links */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 sm:px-10 md:px-32 font-saira gap-8 md:gap-20">
        
        {/* Contact Section */}
        <div className="flex flex-col gap-5 items-center md:items-start">
          <h2 className="pb-2 font-bold text-2xl sm:text-3xl lg:text-4xl">Contact</h2>
          <div className="flex gap-3 sm:gap-5 items-center">
            <FaPhone className="text-lg sm:text-xl" />
            <p className="text-base sm:text-lg">0751 334 3378</p>
          </div>
          <div className="flex gap-3 sm:gap-5 items-center">
            <FaEnvelope className="text-lg sm:text-xl text-white" />
            <p className="text-base sm:text-lg">Mcanthonyotuonye@gmail.com</p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col gap-5 items-center md:items-start">
          <h2 className="pb-2 font-bold text-2xl sm:text-3xl lg:text-4xl">Social Links</h2>
          <div>
            <a
              className="flex gap-3 sm:gap-5 items-center hover:text-blue-500 transition duration-300"
              href="https://www.linkedin.com/in/mcanthony-otuonye-826246206"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-lg sm:text-xl" />
              <p className="text-base sm:text-lg">LinkedIn</p>
            </a>
          </div>
          <div>
            <a
              className="flex gap-3 sm:gap-5 items-center hover:text-blue-500 transition duration-300"
              href="https://github.com/mac455"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-lg sm:text-xl" />
              <p className="text-base sm:text-lg">Github</p>
            </a>
          </div>
        </div>
      </div>

      {/* Source Code Link */}
      <div>
        <a
          className="mt-10 block mx-auto text-center text-sm sm:text-base w-full font-alegreya leading-relaxed mb-6 px-4 underline underline-offset-1 hover:text-purple-500 transition duration-300"
          href="https://github.com/mac455/data-science_portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          (Source code for this website is available here)
        </a>
      </div>
    </div>
  );
};

export default Footer;
