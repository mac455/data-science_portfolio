import React from 'react';

const About = () => {
  return (
    <>
      <div className="px-6 py-10 mt-20 md:px-20 lg:px-36">

        {/* About Me Section */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">About Me</h1>
        <p className="mt-4 text-xl md:text-2xl lg:text-3xl font-alegreya">
          I&apos;m a 23-year-old data analyst and web developer. 
          I am currently pursuing a Master of Science in Computing at Edge Hill University, where I’ve gained comprehensive skills in data analysis, visualisation, machine learning, web development and cybersecurity. 
         <br/> Additionally, I recently completed a 16-week coding bootcamp with CODE Lancashire, further enhancing my skills in full-stack development with technologies such as React, JavaScript, CSS, Tailwind, Next.js, and Python.
        </p>

        {/* Relevant Skills and Projects Section */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-10">
          Relevant Skills and Projects
        </h1>
        <p className="mt-4 text-xl md:text-2xl lg:text-3xl font-alegreya">
          I have worked on both personal and collaborative projects.
           Data mining/visualization of several online datasets using Python, applying machine learning techniques such as clustering, classification, and regression. 
           <br/>As part of a team, we built a Student-Tutor Management App (Django, PostgreSQL, Tailwind), a Boxing Gym website (React), a To-Do List app (React). 
           These projects have helped me develop strong programming skills while honing key soft skills like teamwork, communication, organization, and time management.
        </p>

        {/* Other Skills Section */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-10">
          Other Skills
        </h1>
        <p className="mt-4 text-xl md:text-2xl lg:text-3xl font-alegreya">
          My certifications in IT Help Desk, SIEM, ISO 27001 Compliance, and cloud computing demonstrate my commitment to continuous learning and professional growth.
           <br/>In my previous roles at Pfizer and Merieux NutriSciences, I developed a strong analytical mindset and problem-solving skills while overseeing quality control in high-pressure environments. 
           As the Total Productive Maintenance (TPM) champion at Pfizer, I managed the calibration and upkeep of essential lab equipment, requiring attention to detail and the ability to troubleshoot complex systems, skills 
           I am confident will transfer well to technical challenges of a role in tech. 
        </p>
      </div>
    </>
  );
};

export default About;
