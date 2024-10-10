import React from 'react'
import Image from 'next/image';
import melb_hist from '../assets/images/melb_hist.png'
import Wisdm_linechart from '../assets/images/Wisdm_linechart.png'
import djia_LOBF from '../assets/images/djia_LOBF.png'
import Ex_3_pic_3 from '../assets/images/Ex_3_pic_3.png'

const Portfolio = () => {
    return (
        <div>
            {/* Projects Heading */}
            <div className="py-10 mt-20 ">
                <h1 className="text-6xl text-center font-bold text-gray-900 tracking-tight">Projects</h1>
            </div>

            {/* WISDM */}
            <div className='flex flex-row items-center justify-between mx-32 gap-10 my-10'>          
                <div className='w-1/2'>
                    <Image
                        src={Wisdm_linechart}
                        alt='WISDM Line Chart'
                        layout="responsive"
                        width={800}
                        height={500}
                        className="rounded-lg shadow-lg"
                    />
                </div>

                <div className='w-1/2 flex flex-col justify-center'>
                    <h1 className='text-grey-800 text-4xl font-bold text-center mb-4'>Wireless Sensor Data Mining (WISDM) </h1>
                    <hr className='bg-indigo-500 h-1 rounded-full mb-4 w-full'/>
                    <p className='text-xl font-alegreya text-gray-700 leading-relaxed mb-6'>
                        This project explores the WISDM dataset to develop a classification model for activity prediction. 
                        Initial exploratory data analysis (EDA) utilised Python libraries to uncover patterns in human behavior. 
                        Data preprocessing combined sensor data and ensured accuracy for analysis. 
                        Various visualisation methods, including line charts and scatter plots, were employed to derive insights
                    </p>
                    <button className='text-white font-semibold text-xl bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 w-1/2 mx-auto py-3 rounded-full'>
                        Go to project 🚀
                    </button>
                </div>
            </div>

            {/* Melbourne Housing */}
            <div className='flex flex-row-reverse items-center justify-between mx-32 gap-10 my-10'>
                <div className='w-1/2'>
                    <Image
                        src={melb_hist}
                        alt='Melbourne Housing Histogram'
                        layout="responsive"
                        width={800}
                        height={500}
                        className="rounded-lg shadow-lg"
                    />
                </div>
                <div className='w-1/2 flex flex-col justify-center'>
                    <h1 className='text-gray-800 text-4xl font-bold text-center mb-4'>Melbourne Housing Data Analysis (2016)</h1>
                    <hr className='bg-indigo-500 h-1 rounded-full mb-4 w-full'/>
                    <p className='text-xl font-alegreya text-gray-700 leading-relaxed mb-6'>
                        This data analysis of the Melbourne Housing dataset used histograms, scatter plots, and box plots to explore factors influencing property prices.
                        Interactive visualisations highlighted key factors affecting prices.
                        The analysis concluded that metropolitan areas have notably higher property prices, raising concerns about housing affordability, especially for younger buyers.
                    </p>
                    <button className='text-white font-semibold text-xl bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 w-1/2 mx-auto py-3 rounded-full'>
                        Go to project 🚀
                    </button>
                </div>

            </div>
             {/* DJIA */}
             <div className='flex items-center justify-between mx-32 gap-10 my-10'>
                <div className='w-1/2'>
                    <Image
                        src={djia_LOBF}
                        alt='Melbourne Housing Histogram'
                        layout="responsive"
                        width={800}
                        height={500}
                        className="rounded-lg shadow-lg"
                    />
                </div>
                <div className='w-1/2 flex flex-col justify-center'>
                    <h1 className='text-gray-800 text-4xl font-bold text-center mb-4'>Dow Jones Industrial Average (DJIA)</h1>
                    <hr className='bg-indigo-500 h-1 rounded-full mb-4 w-full'/>
                    <p className='text-xl font-alegreya text-gray-700 leading-relaxed mb-6'>
                    DJIA data analysis (1914-1968) reveals key trends in stock prices, highlighting economic downturns during wars and market crashes. 
                    Despite fluctuations, a long-term upward trend signals recovery and growth, providing insight into historical market shifts and investor confidence. 
                    Techniques like central tendency, box plots, violin plots, and line charts were used to explore distribution, outliers, and trends over time.
                    </p>
                    <button className='text-white font-semibold text-xl bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 w-1/2 mx-auto py-3 rounded-full'>
                        Go to project 🚀
                    </button>
                </div>
            </div>
             {/* Natural Earth */}
             <div className='flex flex-row-reverse items-center justify-between mx-32 gap-10 my-10'>
                <div className='w-1/2'>
                    <Image
                        src={Ex_3_pic_3}
                        alt='Global map visualisation'
                        layout="responsive"
                        width={800}
                        height={500}
                        className="rounded-lg shadow-lg"
                    />
                </div>
                <div className='w-1/2 flex flex-col justify-center'>
                    <h1 className='text-gray-800 text-4xl font-bold text-center mb-4'>Natural Earth</h1>
                    <hr className='bg-indigo-500 h-1 rounded-full mb-4 w-full'/>
                    <p className='text-xl font-alegreya text-gray-700 leading-relaxed mb-6'>
                    Geospatial data was used to compare attributes like population and GDP across the globe.
                     A choropleth map was selected to visualise GDP variations, revealing clear regional differences through a color gradient. 
                    This offers insights into economic health and individual welfare across regions.
                    </p>
                    <button className='text-white font-semibold text-xl bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 w-1/2 mx-auto py-3 rounded-full'>
                        Go to project 🚀
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Portfolio;
