import React from 'react'

const About = () => {
    return (
      <>
        <div className="p-20 mt-20 ml-36 " >
          <h1 className="text-4xl font-bold text-gray-800 ">About Me</h1>
          <p className="mt-4 text-3xl font-alegreya">
            I'm a 24-year-old data analyst and web developer.   I am currently pursuing a Master of Science in Computing at Edge Hill University, where I’ve gained comprehensive skills in Data Analysis. Additionally, I enrolled in a 12-week coding bootcamp with CODE Lancashire, further enhancing my skills in full-stack development with technologies such as React, JavaScript, CSS, Tailwind, Next.js, and Python.      
          </p>
          <h1 className='text-4xl font-bold text-grey-800 mt-10'>
            Relevant Skills and Projects
          </h1>
          <p className='text-3xl font-alegreya mt-4'>
          I have worked on both personal and collaborative projects. Data mining/visualisation of several online datasets using Python,  applying machine learning techniques such as clustering, classification and regression. As part of a team, we built a Student-Tutor Management App (Django, PostgreSQL, Tailwind), a Boxing Gym website (React), a To-Do List app (React). All these projects are available on my portfolio. These projects have helped me develop strong programming skills while honing key soft skills like teamwork, communication, organisation, and time management.
          </p>
          <h1 className='text-4xl font-bold text-grey-800 mt-10'>
            Other skills 
          </h1>
          <p className='mt-4 text-3xl font-alegreya'>
          My certifications in IT Help Desk, SIEM, ISO 27001 Compliance, and cloud computing demonstrate my commitment to continuous learning and professional growth. In my previous roles at Pfizer and Merieux NutriSciences, I developed a strong analytical mindset and problem-solving skills while overseeing quality control in high-pressure environments. As the Total Productive Maintenance (TPM) champion at Pfizer, I managed the calibration and upkeep of essential lab equipment, which required attention to detail and an ability to troubleshoot complex systems, skills that I am confident will transfer well to the technical challenges of this program.
          </p>
        </div>
      </>
    );
  };
  
  export default About;