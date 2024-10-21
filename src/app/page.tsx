import React from 'react';
import { wisdmData, wisdmML, naturalEarth, melb_data } from '@/components/ImageData';
import Image from 'next/image';
import folio_pic_2 from '../app/assets/images/folio_pic_2.webp';
import ImageGallery from '@/components/ImageGallery';
import './globals.css';
import Link from 'next/link';
import Gym_site_ss from '../app/assets/images/Gym/Gym_site_ss.png';

export default function Home() {
  return (
    <>
      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center p-6 md:p-10 mt-20 md:mt-20 gap-8 md:gap-20 ">
        <div className="flex justify-center mb-6 lg:mb-0">
          <Image
            className="h-40 w-40 sm:h-60 sm:w-60 lg:h-96 lg:w-96 rounded-full"
            objectPosition="center top"
            src={folio_pic_2}
            alt="headshot image"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col text-center w-full sm:w-3/4 md:w-2/3 lg:w-2/4 p-4 md:p-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-roboto font-bold bg-gradient-to-r from-blue-500 to-indigo-900 bg-clip-text text-transparent">
            Data Scientist <br /> & <br />
            Web Developer
          </h1>
          <h2 className="font-alegreya text-base sm:text-lg lg:text-2xl font-light mt-4 leading-relaxed">
            A passionate data scientist & web developer pursuing an MSc in Computing. Seeking dynamic roles in tech to drive impactful insights and innovation.
          </h2>
          <Link href="/contact">
            <button className="font-inter text-sm sm:text-lg lg:text-xl mt-4 ml-auto mr-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-full transition duration-300 hover:bg-blue-800">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>

      {/* Wrapper Section */}
      <div className="bg-gradient-to-left from-blue-500 to-indigo-900 h-auto flex flex-col justify-center text-white pb-10 md:pb-24">
        <div className="flex flex-col bg-gray-800 justify-center text-center px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mt-6 sm:mt-10 mb-3 sm:mb-5">Welcome!</h2>
          <p className="w-full sm:w-3/4 lg:w-4/5 mx-auto text-base sm:text-xl lg:text-2xl font-alegreya p-4">
            Welcome to my portfolio, showcasing a selection of my work in data analysis, machine learning, data visualization, and web development. With a background in biotechnology and computing, I leverage analytical skills to uncover valuable insights from datasets.
            <br />
            I also develop user-friendly web applications using React and Next.js, emphasizing clean design and functionality.
            <br /> Below, you’ll find highlights of some of my projects, and I invite you to explore further details on the Projects page.
          </p>
        </div>

        {/* WISDM Section */}
        <div className="flex flex-col font-alegreya text-base sm:text-xl lg:text-2xl justify-center text-center px-4">
          <div>
            <h1 className="mt-6 sm:mt-10 text-3xl sm:text-4xl lg:text-5xl">Wireless Sensor Data Mining (WISDM) <br /> dataset</h1>
            <p className="w-full sm:w-2/3 lg:w-2/5 mx-auto mt-5">
              Assessing individual activity patterns to explore practical applications beyond the fitness industry.
            </p>
            <div className="cursor-pointer">
              <ImageGallery images={wisdmData} href="/wisdm" />
            </div>
          </div>

          {/* ML Section - WISDM */}
          <div className="flex justify-center">
            <div className="flex flex-col justify-center mt-6 sm:mt-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl">Machine learning (WISDM dataset)</h1>
              <p className="w-full sm:w-4/5 lg:w-3/5 mx-auto mt-5">
                Grouping activities through clustering and using the clusters to build a classifier for activity prediction.
              </p>
              <div className="cursor-pointer">
                <ImageGallery images={wisdmML} href="/wisdm" />
              </div>
            </div>
          </div>
        </div>

        {/* Natural Earth Section */}
        <div className="flex flex-col font-alegreya text-base sm:text-xl lg:text-2xl justify-center text-center px-4">
          <h1 className="mt-6 sm:mt-10 text-3xl sm:text-4xl lg:text-5xl">Natural Earth Dataset</h1>
          <ImageGallery images={naturalEarth} href="/naturalEarth" />
        </div>

        {/* Melbourne Housing Section */}
        <div className="flex flex-col font-alegreya text-base sm:text-xl lg:text-2xl justify-center text-center px-4">
          <h1 className="mt-6 sm:mt-10 text-3xl sm:text-4xl lg:text-5xl">Melbourne Housing Dataset</h1>
          <p className="w-full sm:w-3/4 lg:w-3/5 mx-auto mt-5">Analysing the Melbourne Housing Market in 2016</p>
          <ImageGallery images={melb_data} href="/melbHousing" />
        </div>

        {/* The Infantry Section */}
        <div className="flex flex-col font-alegreya text-base sm:text-xl lg:text-2xl justify-center text-center px-4">
          <h1 className="mt-6 sm:mt-10 text-3xl sm:text-4xl lg:text-5xl">React Project</h1>
          <p className="w-full sm:w-3/4 lg:w-3/5 mx-auto mt-5">Created a boxing gym website using React</p>
          <Image
            className="mt-5 mb-5 mx-auto transform transition-transform duration-1000 hover:scale-110"
            src={Gym_site_ss}
            alt="Gym site screenshot built with React"
            width={600}
            height={400}
          />
        </div>

        {/* Student Tutor Section */}
        <div className="flex flex-col font-alegreya text-base sm:text-xl lg:text-2xl justify-center text-center px-4">
          <h1 className="mt-6 sm:mt-10 text-3xl sm:text-4xl lg:text-5xl">Personal Tutor Management App</h1>
          <p className="w-full sm:w-3/4 lg:w-3/5 mx-auto mt-5">
            Collaboratively developed an app designed to improve communication and enhance ease of interaction between students and tutors.
          </p>
          <video className="w-full sm:w-4/5 lg:w-3/5 h-auto mx-auto mt-5" controls>
            <source src="/artifact.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
