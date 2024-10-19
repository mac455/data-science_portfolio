import React from 'react';
import { wisdmData, wisdmML, naturalEarth, melb_data } from '@/components/ImageData';
import Image from 'next/image';
import folio_pic_2 from '../app/assets/images/folio_pic_2.webp';
import ImageGallery from '@/components/ImageGallery';
import './globals.css';
import Link from 'next/link';
import Gym_site_ss from '../app/assets/images/Gym/Gym_site_ss.png'

export default function Home() {
  return (
    <>
      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row justify-center items-center p-10 mt-14 gap-10 md:gap-20"> 
        <div className="flex justify-center mb-6 md:mb-0">
          <Image 
            className="h-60 w-60 md:h-96 md:w-96 rounded-full" 
            objectPosition="center top"
            src={folio_pic_2} 
            alt="headshot image"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col text-center w-11/12 md:w-2/4 p-4 md:p-8">
          <h1 className="text-4xl md:text-5xl font-roboto font-bold bg-gradient-to-left from-blue-500 to-indigo-900 bg-clip-text text-transparent">
            Data Scientist <br/> & <br/>
            Web Developer
          </h1>
          <h2 className='font-alegreya text-lg md:text-2xl font-light mt-4 leading-relaxed'>
            A passionate data scientist & web developer pursuing an MSc in Computing. Seeking dynamic roles in tech to drive impactful insights and innovation.
          </h2>
          <Link href="/contact">
            <button className="font-inter text-lg md:text-xl mt-4 ml-auto mr-auto px-6 md:px-8 py-4 bg-blue-600 text-white rounded-full transition duration-300 hover:bg-blue-800">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>

      {/* Wrapper Section */}
      <div className="bg-gradient-to-left from-blue-500 to-indigo-900 h-auto flex flex-col justify-center text-white pb-10 md:pb-24">
        <div className="flex flex-col bg-gray-800 justify-center text-center px-4">
          <h2 className="text-4xl md:text-6xl font-bold mt-10 mb-5" >
            Welcome! 
          </h2>
          <p className="w-full md:w-4/5 mx-auto text-xl md:text-2xl font-alegreya p-4">
          Welcome to my portfolio, showcasing a selection of my work in data analysis, machine learning, data visualisation, and web development.
          With a background in biotechnology and computing, I leverage analytical skills to uncover valuable insights from datasets.
          <br/>I also develop user-friendly web applications using React and Next.js, emphasising clean design and functionality. 
          <br/> Below, you’ll find highlights of some of my projects, and I invite you to explore further details on the Projects page.



          </p>
        </div>

        {/* WISDM Section */}
        <div className="flex flex-col font-alegreya text-xl md:text-2xl justify-center text-center px-4">
           <div>
              <h1 className="mt-10 text-4xl md:text-5xl">Wireless Sensor Data Mining (WISDM) <br/> dataset </h1>  
              <p className='w-full md:w-2/5 mx-auto my-auto mt-5'> Assessing individual activity patterns to explore practical applications beyond the fitness industry</p> 
            <div className='cursor-pointer'><ImageGallery  images={wisdmData} href='/wisdm'/></div>
           </div>

          {/* ML Section - WISDM */}
            <div className="flex justify-center">
              <div className="flex flex-col justify-center mt-10">
                <h1 className="text-4xl md:text-5xl"> Machine learning (WISDM dataset) </h1>
                <p className='w-full md:w-3/5 mx-auto my-auto mt-5'> Grouping activities through clustering and using the clusters to build a classifier for activity prediction. </p> 
                <div className='cursor-pointer'><ImageGallery images={wisdmML} href='/wisdm'/></div>
              </div>
            </div>
        </div>

        {/* Natural Earth Section */}
        <div className="flex flex-col font-alegreya text-xl md:text-2xl justify-center text-center px-4">
          <h1 className="mt-10 text-4xl md:text-5xl">Natural Earth Dataset</h1>
          <ImageGallery images={naturalEarth} href='/naturalEarth'/>
        </div>

        {/* Melbourne Housing Section */}
        <div className="flex flex-col font-alegreya text-xl md:text-2xl justify-center text-center px-4">
          <h1 className="mt-10 text-4xl md:text-5xl">Melbourne Housing Dataset</h1>
          <p className='w-full md:w-3/5 mx-auto my-auto mt-5'>Analysing the Melbourne Housing Market in 2016</p>
          <ImageGallery images={melb_data} href='/melbHousing' />
        </div>

        {/* The Infantry Section */}
        <div className="flex flex-col font-alegreya text-xl md:text-2xl justify-center text-center px-4">
          <h1 className="mt-10 text-4xl md:text-5xl">React Project</h1>
          <p className='w-full md:w-3/5 mx-auto my-auto mt-5'>Created a boxing gym webiste using React</p>
          <Image
            className='mt-5 mb-5  mx-auto my-auto transform transition-transform duration-1000 hover:scale-110'
            src={Gym_site_ss}
            alt='Gym site screenshot built with react'
            width={600}
            height={400}
          
          />
        </div>

        {/* Student Tutor Section */}
        <div className="flex flex-col font-alegreya text-xl md:text-2xl justify-center text-center px-4">
          <h1 className="mt-10 text-4xl md:text-5xl">Personal Tutor Management App </h1>
          <p className='w-full md:w-3/5 mx-auto my-auto mt-5'>Collaboratively developed an app designed to improve communication and enhance ease of interaction between students and tutors</p>
          <video className="w-full md:w-3/5 h-auto mx-auto mt-5" controls>
            <source src="/artifact.mp4" type="video/mp4" />
          </video>    
        </div>
      </div>
    </>
  );
}
