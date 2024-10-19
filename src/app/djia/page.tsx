import React from 'react'
import BackButton from '@/components/BackButton';
import ModalHandler from '@/components/ModalHandler';
import { DjiaBoxplot, DjiaViolinPlot, DjiaLineChart, LOBF } from '@/components/DjiaImgData';
import ImageOpacityWithModal from '@/components/ImageOpacity';

const Djia = () => {
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
                            Dow Jones Industrial Average
                        </h1>
                        <hr className="bg-indigo-500 h-1 rounded-full mx-auto w-9/12" />
                    </div>
                </div>
            </div>
            {/* Project Overview and Dataset Description*/}
            <div className='flex flex-col justify-center w-full md:w-4/5 mx-auto my-auto md:px-10 lg:px-20 mt-8'>
                <h1 className="text-2xl md:text-3xl text-center font-bold text-gray-900  p-4">
                    Project overview & Dataset description 
                </h1>
                <p className=" leading-5 text-lg md:text-xl font-alegreya text-gray-700  mb-6 px-4">
                The Dow Jones Industrial Average (DJIA) is a widely recognised stock market index that tracks the performance of 30 large publicly traded companies in the United States. 
                As one of the oldest and most influential stock indices, the DJIA is often used to gauge the health of the stock market and the broader economy. 
                 The dataset shows the DJIA every month between 1914 - 1968. 
                 <br/>
                 <br/>
                  Here, the dataset is used for identifying trends over time, and exploring how factors like proximity to the city center or local government policies influence property values.
                 <br/> Additionally, there is a critical review of static vs interactive plots for information extraction
                </p>
            </div>

            {/* Results & Discussion */}
            <h1 className="text-2xl md:text-3xl text-center font-bold text-gray-900 tracking-tight p-8">Results & Discussion</h1>
            <p className="text-base md:text-xl text-center font-alegreya text-gray-700 leading-relaxed mb-6 px-4">Click on any picture for further analysis</p>
            <a className="block mx-auto text-base w-1/6  font-alegreya text-gray-700 leading-relaxed mb-6 px-4 underline underline-offset-1 focus:text-purple-500 " 
            href='https://github.com/mac455/djia-data-analysis-visualisation'
            target='_blank'
            rel='noopener noreferrer'
            > (Source code available here) 
            </a>

            
            <div className='flex flex-col md:flex-row justify-center gap-10'>
                {/* Boxplot */}
                <div className='flex flex-col'>
                    <h3 className="mt-10 text-xl md:text-2xl text-center font-bold text-gray-900 tracking-tight p-4"> Boxplot of DJIA Price</h3>
                    <ImageOpacityWithModal images={DjiaBoxplot} />
                </div>

                {/* Violinplot */}
                <div className='flex flex-col'>
                    <h3 className="mt-10 text-xl md:text-2xl text-center font-bold text-gray-900 tracking-tight p-4">Violin plot of DJIA Price</h3>
                    <ModalHandler imagesArray={DjiaViolinPlot}  imageIndex={0}/>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center gap-10'>
                     {/* Linechart */}
                     <div className='flex flex-col'>
                        <h3 className="mt-10 text-xl md:text-2xl text-center font-bold text-gray-900 tracking-tight p-4">Line chart of DJIA Price 1914 - 1968</h3>
                         <ModalHandler imagesArray={DjiaLineChart}  imageIndex={0}/>
                    </div>

                    <div className='flex flex-col'> 
                    <h3 className="mt-10 text-xl md:text-2xl text-center font-bold text-gray-900 tracking-tight p-4">Line of best fit</h3>
                        <ImageOpacityWithModal images={LOBF} />
                    </div>
            </div>
        </>
    )
}

export default Djia