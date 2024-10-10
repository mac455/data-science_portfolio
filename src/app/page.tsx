import  React from 'react'
import { wisdmData, wisdmML, naturalEarth, melb_data } from '@/components/ImageData';
import Image from 'next/image';
import folio_pic_2 from '../app/assets/images/folio_pic_2.webp'
import ImageGallery from '@/components/ImageGallery';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './globals.css';
import Link from 'next/link';
import  Footer from '@/components/Footer'

export default function Home() {
  
  return (
    <>
      {/* Main Content Section */}
   

      <div className="flex justify-center items-center p-20 mt-20 gap-40"> 
        <div>
          <Image 
            className="h-96 w-96 rounded-full transform scale-100" 
            objectPosition="center top"
            src={folio_pic_2} 
            alt="headshot image"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col text-center w-2/4 p-8">
          <h1 className="text-5xl font-roboto font-bold bg-gradient-to-left from-blue-500 to-indigo-900 bg-clip-text text-transparent">
            Data Analyst <br/> & <br/>
            Web Developer
          </h1>
          <h2 className='font-alegreya text-2xl font-light mt-4 leading-relaxed'>
            A passionate data analyst with an MSc in Computing. Seeking dynamic data analysis roles to drive impactful insights and innovation.
          </h2>
          <Link href="/contact"><button className=" font-inter text-xl mt-4 ml-auto mr-auto px-8 py-6 bg-blue-600 text-white rounded-full transition duration-300 hover:bg-blue-800">
          Get in Touch
          </button></Link>
        </div>

    
      </div>

      {/* Wrapper Section */}
      <div className="bg-gradient-to-left from-blue-500 to-indigo-900  h-auto flex flex-col justify-center text-white pb-24 ">
        <div className="flex flex-col bg-gray-800 justify-center ">
          <h2 className=" text-6xl font-bold  text-center mt-10">
            Highlights 
          </h2>
          <p className="w-4/5 ml-auto mr-auto text-2xl text-center font-alegreya  p-10">
          My work focuses on visualising and analysing datasets using Python to extract meaningful insights. <br/>  Additionally, applying machine learning algorithms has been instrumental in developing predictive models, such as activity prediction in the WISDM dataset.
           <br/> Highlights of my work are showcased below, with further details available on the Portfolio page
          </p>
        </div>

        {/* WISDM Section */}
        <div className="flex flex-col font-alegreya text-2xl justify-center text-center ">
          <h1 className="mt-14 text-5xl">Wireless Sensor Data Mining (WISDM) <br/> dataset </h1>  
          <p className='w-2/5 mx-auto my-auto mt-5'> Assessing individual activity patterns to explore practical applications beyond the fitness industry</p> 
          <ImageGallery images={wisdmData} />

          {/* ML Section - WISDM */}
          <div className="flex justify-center">
           <div className="flex flex-col justify-center mt-14">
            <h1 className="text-5xl"> Machine learning (WISDM dataset) </h1>
            <p className='w-3/5 mx-auto my-auto mt-10'> Grouping activities through clustering and using the clusters to build a classifier for activity prediction. </p> 
            <ImageGallery images={wisdmML} />
           </div>
          </div>
        </div>

        
        {/*Natural Earth Section */}
        <div className="flex flex-col font-alegreya text-2xl justify-center text-center">
          <h1 className="mt-20 text-5xl">Natural Earth Dataset</h1>
          <ImageGallery images={naturalEarth} />
        </div>

        {/*Melbourne Housing Section */}
        <div className="flex flex-col font-alegreya text-2xl justify-center text-center">
          <h1 className="mt-20 text-5xl">Melbourne Housing  Dataset</h1>
          <p className='w-3/5 mx-auto my-auto mt-5'>Analysing the Melbourne Housing Market in 2016</p>
          <ImageGallery images={melb_data} />
        </div>

        {/*Student Tutor Section */}
        <div className="flex flex-col font-alegreya text-2xl justify-center text-center">
          <h1 className="mt-20 text-5xl">Personal Tutor Managemet App </h1>
          <p className='w-3/5 mx-auto my-auto mt-10'>Collaboratively developed an app designed to improve communication and enhance ease of interaction between students and tutors</p>
          <video className="w-3/5 h-auto ml-auto mr-auto mt-10" controls>
            <source src="/artifact.mp4" type="video/mp4" />
          </video>    
        </div>
      </div>
      
    </>
  );
}
