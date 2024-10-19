import React from 'react'
import Image from 'next/image';
import BackButton from '@/components/BackButton';
import ModalHandler from '@/components/ModalHandler';
import Ex_3_pic_1 from '../assets/images/Ex_3_pic_1.png'
import Ex_3_pic_2 from '../assets/images/Ex_3_pic_2.png'
import Ex_3_pic_5 from '../assets/images/Ex_3_pic_5.png'
import { GDP } from '@/components/EarthImgData';


const Earth = () => {
    return (
        <>
             {/* Heading */}
             <div className="pt-10 mt-20">
                <div className="md:flex items-center justify-center gap-20">
                    <div className="cursor-pointer transition-opacity duration-300 hover:opacity-25">
                        <BackButton />
                    </div>
                    <div className="md:ml-10 flex flex-col  md:w-2/3  mx-auto px-4 md:px-0">
                        <h1 className="inline-block text-3xl md:text-5xl text-center font-bold text-gray-900 tracking-tight p-4">
                            Natural Earth
                        </h1>
                        <hr className="bg-indigo-500 h-1 rounded-full mx-auto w-1/3" />
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center md:w-4/5 mx-auto my-auto md:px-10 lg:px-20 mt-8'>
                <h1 className="text-2xl md:text-3xl text-center font-bold text-gray-900  p-4">
                    Project overview & Dataset description 
                </h1>
                <p className=" leading-5 text-lg md:text-xl font-alegreya text-gray-700  mb-6 px-4 " >
                The Natural Earth dataset is a freely available, detailed global map dataset, designed for cartographic and geographical analysis. 
                It contains vector data such as boundaries, coastlines, rivers, urban areas, and physical regions at various scales and resolutions. 
                The data is organised by geographic features like countries, continents, and major cities, allowing for easy visualisation and analysis in mapping projects. 
                <br/> 
                <br/>
                In this project, the dataset is used for analysing attributes such as population and GDP.
                </p>
            </div>
            
            {/* Results & Discussion */}
            <h1 className="text-2xl md:text-3xl text-center font-bold text-gray-900 tracking-tight p-8">Results & Discussion</h1>
            <p className="text-base md:text-xl text-center font-alegreya text-gray-700 leading-relaxed mb-6 px-4">Click on any picture for further analysis</p>
            <a className="block mx-auto text-base w-1/6  font-alegreya text-gray-700 leading-relaxed mb-6 px-4 underline underline-offset-1 focus:text-purple-500 " 
            href='https://github.com/mac455/natural-earth/tree/main'
            target='_blank'
            rel='noopener noreferrer'
            > (Source code available here) 
            </a>

            <div className='flex flex-col md:flex-row justify-center gap-10'>
                <div className='flex-col'>
                    <h3 className="mt-10 text-xl md:text-2xl text-center font-bold text-gray-900 tracking-tight p-4">Global population estimates</h3>
                     <Image
                        src={Ex_3_pic_1}
                        alt='Chloropleth of world population estimates'
                        width={600}
                        height={600}
                        priority 
                    />
                </div >
                <div className='flex-col'>
                    <h3 className="mt-10 text-xl md:text-2xl text-center font-bold text-gray-900 tracking-tight p-4">Population estimates with country annotations</h3>
                     <Image
                        src={Ex_3_pic_2}
                        alt='Chloropleth of world population estimates'
                        width={600}
                        height={600}
                        priority 
                    />
                </div >
            </div>
            <div className='flex justify-center gap-10 mb-10'>
                {/* GDP and GDP perc capita*/}
                <div className='flex-col'>
                    <h3 className="mt-10 text-xl md:text-2xl text-center font-bold text-gray-900 tracking-tight p-4">GDP & GDP per capita analysis</h3>
                    <ModalHandler imagesArray={GDP} imageIndex={0} />
                </div>
                <div className='flex-col'>
                    <h3 className="mt-10 text-xl md:text-2xl text-center font-bold text-gray-900 tracking-tight p-4">Global population estimates</h3>
                     <Image
                        src={Ex_3_pic_5}
                        alt='Chloropleth of world population estimates'
                        width={600}
                        height={600}
                        priority 
                    />
                </div >
    
                
            </div>
          
        </>
    )
}

export default Earth 