import React from 'react';
import Image from 'next/image';
import melb_hist from '../assets/images/melb_hist.png';
import Wisdm_linechart from '../assets/images/Wisdm_linechart.png';
import djia_LOBF from '../assets/images/djia_LOBF.png';
import Ex_3_pic_3 from '../assets/images/Ex_3_pic_3.png';
import Gym_site_ss from '../assets/images/Gym_site_ss.png';
import Link from 'next/link';

const Portfolio = () => {
    return (
        <div>
            {/* Projects Heading */}
            <div className="py-10 mt-20">
                <h1 className="text-4xl md:text-6xl text-center font-bold text-gray-900 tracking-tight">Projects</h1>
            </div>

            {/* WISDM */}
            <div className='flex flex-col-reverse lg:flex-row items-center justify-between mx-6 md:mx-20 lg:mx-32 gap-10 my-10'>
                <div className='w-full lg:w-1/2'>
                   <Link href='/wisdm'>
                        <Image
                            
                            src={Wisdm_linechart}
                            alt='WISDM Line Chart'
                            layout="responsive"
                            width={800}
                            height={500}
                            className="rounded-lg shadow-lg transform transition-transform duration-1000 hover:scale-110 cursor-pointer"
                        />
                   </Link>
                </div>
                <div className='w-full lg:w-1/2 flex flex-col justify-center'>
                    <h1 className='text-gray-800 text-3xl md:text-4xl font-bold text-center mb-4'>Wireless Sensor Data Mining (WISDM)</h1>
                    <hr className='bg-indigo-500 h-1 rounded-full mb-4 w-full' />
                    <p className='text-lg md:text-xl font-alegreya text-gray-700 leading-relaxed mb-6'>
                    Data mining and visualization are applied to the WISDM dataset using methods like line charts and scatter plots to gain insights. 
                    The data is also used to develop a classification model for activity prediction.
                         
                       .
                    </p>
                   <div className='flex justify-center text-white font-semibold text-lg md:text-xl bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 w-2/3 md:w-1/2 mx-auto py-3 rounded-full '>
                       <Link href='/wisdm'>
                            <button >
                                Go to project 🚀
                            </button>
                       </Link>
                   </div>
                </div>
            </div>

            {/* Melbourne Housing  */}
            <div className='flex flex-col-reverse lg:flex-row-reverse items-center justify-between mx-6 md:mx-20 lg:mx-32 gap-10 my-10'>
                <div className='w-full lg:w-1/2'>
                    <Image
                        src={melb_hist}
                        alt='Melbourne Housing Histogram'
                        layout="responsive"
                        width={800}
                        height={500}
                        className="rounded-lg shadow-lg transform transition-transform duration-1000 hover:scale-110 cursor-pointer"
                    />
                </div>
                <div className='w-full lg:w-1/2 flex flex-col justify-center'>
                    <h1 className='text-gray-800 text-3xl md:text-4xl font-bold text-center mb-4'>Melbourne Housing Data Analysis (2016)</h1>
                    <hr className='bg-indigo-500 h-1 rounded-full mb-4 w-full' />
                    <p className='text-lg md:text-xl font-alegreya text-gray-700 leading-relaxed mb-6'>
                        This data analysis of the Melbourne Housing dataset used histograms, scatter plots, and box plots to explore factors influencing property prices.
                        Static and interactive visualisations were used to highlight key factors affecting prices. 
                        The analysis raised concerns about housing affordability, especially for younger buyers.
                    </p>
                    <button className='text-white font-semibold text-lg md:text-xl bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 w-2/3 md:w-1/2 mx-auto py-3 rounded-full'>
                        Go to project 🚀
                    </button>
                </div>
            </div>

            {/* DJIA  */}
            <div className='flex flex-col-reverse lg:flex-row items-center justify-between mx-6 md:mx-20 lg:mx-32 gap-10 my-10'>
                <div className='w-full lg:w-1/2'>
                    <Image
                        src={djia_LOBF}
                        alt='Dow Jones Industrial Average Line Chart'
                        layout="responsive"
                        width={800}
                        height={500}
                        className="rounded-lg shadow-lg transform transition-transform duration-1000 hover:scale-110 cursor-pointer"
                    />
                </div>
                <div className='w-full lg:w-1/2 flex flex-col justify-center'>
                    <h1 className='text-gray-800 text-3xl md:text-4xl font-bold text-center mb-4'>Dow Jones Industrial Average (DJIA)</h1>
                    <hr className='bg-indigo-500 h-1 rounded-full mb-4 w-full' />
                    <p className='text-lg md:text-xl font-alegreya text-gray-700 leading-relaxed mb-6'>
                        DJIA data analysis (1914-1968) reveals key trends in stock prices,  providing insight into historical market shifts and investor confidence. 
                        Techniques like central tendency, box plots, violin plots, and line charts were used to explore distribution, outliers, and trends over time.
                    </p>
                    <button className='text-white font-semibold text-lg md:text-xl bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 w-2/3 md:w-1/2 mx-auto py-3 rounded-full'>
                        Go to project 🚀
                    </button>
                </div>
            </div>

            {/* Natural Earth */}
            <div className='flex flex-col-reverse lg:flex-row-reverse items-center justify-between mx-6 md:mx-20 lg:mx-32 gap-10 my-10'>
                <div className='w-full lg:w-1/2'>
                    <Image
                        src={Ex_3_pic_3}
                        alt='Natural Earth Project'
                        layout="responsive"
                        width={800}
                        height={500}
                        className="rounded-lg shadow-lg transform transition-transform duration-1000 hover:scale-110 cursor-pointer"
                    />
                </div>
                <div className='w-full lg:w-1/2 flex flex-col justify-center'>
                    <h1 className='text-gray-800 text-3xl md:text-4xl font-bold text-center mb-4'>Natural Earth</h1>
                    <hr className='bg-indigo-500 h-1 rounded-full mb-4 w-full' />
                    <p className='text-lg md:text-xl font-alegreya text-gray-700 leading-relaxed mb-6'>
                    Geospatial data was used to compare attributes like population and GDP across the globe.
                     A choropleth map was selected to visualise GDP variations, revealing clear regional differences through a color gradient. 
                    This offers insights into economic health and individual welfare across regions.
                    </p>
                    <button className='text-white font-semibold text-lg md:text-xl bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 w-2/3 md:w-1/2 mx-auto py-3 rounded-full'>
                        Go to project 🚀
                    </button>
                </div>
            </div>

            {/* Boxing Gym */}
            <div className='flex flex-col-reverse lg:flex-row items-center justify-between mx-6 md:mx-20 lg:mx-32 gap-10 my-10'>
                <div className='w-full lg:w-1/2'>
                    <Image
                        src={Gym_site_ss}
                        alt='Boxing Gym Website'
                        layout="responsive"
                        width={800}
                        height={500}
                        className="rounded-lg shadow-lg transform transition-transform duration-1000 hover:scale-110 cursor-pointer"
                    />
                </div>
                <div className='w-full lg:w-1/2 flex flex-col justify-center'>
                    <h1 className='text-gray-800 text-3xl md:text-4xl font-bold text-center mb-4'>Boxing Gym</h1>
                    <hr className='bg-indigo-500 h-1 rounded-full mb-4 w-full' />
                    <p className='text-lg md:text-xl font-alegreya text-gray-700 leading-relaxed mb-6'>
                    This website is my first attempt at creating a fully functional website using React. 
                    I chose to build a website for a brand new boxing gym because I love the sport and a boxing gym would be something I would love to own.
                    The site was built using React + Vite
                    </p>
                    <button className='text-white font-semibold text-lg md:text-xl bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 w-2/3 md:w-1/2 mx-auto py-3 rounded-full'>
                        Go to project 🚀
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Portfolio;
