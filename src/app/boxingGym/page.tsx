import React from "react";
import BackButton from '@/components/BackButton';
import { homepage, aboutpage, trainerpage, classespage } from "@/components/GymImgData";
import ImageOpacityWithModal from "@/components/ImageOpacity";


const Gym = () => {
    return(
        <>
             {/* Heading */}
             <div className="pt-10 mt-20">
                <div className="md:flex items-center justify-center gap-20">
                    <div className="cursor-pointer transition-opacity duration-300 hover:opacity-25">
                        <BackButton />
                    </div>
                    <div className="md:ml-10 flex flex-col md:w-2/3 mx-auto px-4 md:px-0">
                        <h1 className="inline-block text-3xl md:text-5xl text-center font-bold text-gray-900 tracking-tight p-4">
                            The Infantry - Boxing Gym website
                        </h1>
                        <hr className="bg-indigo-500 h-1 rounded-full mx-auto w-11/12" />
                    </div>
                </div>
            </div>
             {/* Project Overview and Dataset Description*/}
             <div className='flex flex-col justify-center w-full md:w-4/5 mx-auto my-auto md:px-10 lg:px-20 mt-8'>
                <h1 className="text-2xl md:text-3xl text-center font-bold text-gray-900  p-4">
                    Project overview 
                </h1>
                <p className=" block mx-auto leading-5 w-2/3 text-lg md:text-xl font-alegreya text-gray-700  mb-6 px-4">
                This is website is made using React + Vite. <br/>
                I chose to create a platform for a new boxing gym, combining my passion for web development with my interest in the sport.
                </p>
            </div>
    
            <h1 className="text-2xl md:text-3xl text-center font-bold text-gray-900 tracking-tight p-8">Website Gallery </h1>
            <a className="block mx-auto text-base w-1/6  font-alegreya text-gray-700 leading-relaxed mb-6 px-4 underline underline-offset-1 focus:text-purple-500 " 
            href='https://github.com/mac455/boxing-gym-react'
            target='_blank'
            rel='noopener noreferrer'
            > (Source code available here) 
            </a>
            <video className="w-full md:w-3/5 h-auto mx-auto mt-5 mb-20 rounded-md" controls>
            <source src="/the_infantry.mp4" type="video/mp4" />
          </video>    
          <div className='flex flex-col md:flex-row justify-center gap-10'>
            <div className='flex-col'>
                <ImageOpacityWithModal images={homepage} />
               
            </div >
            <div className='flex-col'>
             <ImageOpacityWithModal images={aboutpage} />
            </div >
        </div>
        <div className='flex flex-col md:flex-row justify-center gap-10 mt-10 mb-20'>
            <div className='flex-col'>
                <ImageOpacityWithModal images={classespage} />
               
            </div >
            <div className='flex-col'>
             <ImageOpacityWithModal images={trainerpage} />
            </div >
        </div>
    </>
    )
}

export default Gym 