import React from 'react'
import BackButton from '@/components/BackButton';
import ModalHandler from '@/components/ModalHandler';
import { staticIntScatter, staticIntBoxplot, DistanceVsPrice } from '@/components/MelbImageData';

const melb = () => {
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
                            Melbourne Housing 2016
                        </h1>
                        <hr className="bg-indigo-500 h-1 rounded-full mx-auto w-full" />
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center md:w-2/3 mx-auto my-auto md:px-10 lg:px-20 mt-8'>
                <h1 className="text-2xl md:text-3xl text-center font-bold text-gray-900  p-4">
                    Project overview & Dataset description 
                </h1>
                <p className=" leading-5 text-lg md:text-xl font-alegreya text-gray-700  mb-6 px-4 " >
                The Melbourne Housing Snapshot dataset, sourced from Kaggle, provides comprehensive data on houses and apartments in Melbourne, Australia. 
                Covering the period from January to December 2016, the dataset includes key property features such as type, price, and location, offering insights into Melbourne&apos;s housing market during that year.
                 <br/>
                 <br/>
                 In this analysis, the dataset is used to identify trends over time and examine how factors like proximity to the city center, regional location, property type, and local government policies impact property values.
                  Additionally, the study compares the effectiveness of static vs interactive plots for extracting meaningful insights from the data.
                </p>
            </div>

            {/* Results & Discussion */}
            <h1 className="text-2xl md:text-3xl text-center font-bold text-gray-900 tracking-tight p-8">Results & Discussion</h1>
            <p className="text-base md:text-xl text-center font-alegreya text-gray-700 leading-relaxed mb-6 px-4">Click on any picture for further analysis</p>
            <a className="block mx-auto text-base w-1/6  font-alegreya text-gray-700 leading-relaxed mb-6 px-4 underline underline-offset-1 focus:text-purple-500 " 
            href='https://github.com/mac455/melbourne-housing'
            target='_blank'
            rel='noopener noreferrer'
            > (Source code available here) 
            </a>

             {/*Plots*/}
            <div className='flex flex-col md:flex-row justify-center gap-10'>
                {/* Static & Int - Scatter Plot */}
                <div className='flex-col'>
                    <h3 className="mt-10 text-xl md:text-2xl text-center font-bold text-gray-900 tracking-tight p-4">Scatter plots</h3>
                    <ModalHandler imagesArray={staticIntScatter} imageIndex={0} />
                </div >
                {/* Static & Int - BoxPlot */}
                <div className='flex-col'>
                    <div>
                        <h3 className="mt-10 text-xl md:text-2xl text-center font-bold text-gray-900 tracking-tight p-4">Boxplots</h3>
                        <ModalHandler imagesArray={staticIntBoxplot} imageIndex={0} />
                    </div>
                    <div className='flex flex-col justify-center gap-10 '>
                         <h3 className="mt-2 text-xl md:text-2xl text-center font-bold text-gray-900 tracking-tight p-4">Melbourne Property Regions</h3>
                        <div className='-mt-10'><ModalHandler imagesArray={DistanceVsPrice} imageIndex={0} /></div>
                    </div>

                </div>
            </div>
           
        </>
    )
}

export default melb