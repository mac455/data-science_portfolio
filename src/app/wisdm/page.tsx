'use client'
import React, { useState } from 'react';
import ImageOpacityOpenClick from '@/components/OpenClick';
import ModalSlider from '@/components/ModalSlider';
import { subject_1600, subject_1601, boxplot } from '@/components/WisdmImgData'; // Array for subject_1600 images
import BackButton from '@/components/BackButton';

const Wisdm = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal state
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the clicked image

    const openModal = (index: number) => {
        setCurrentImageIndex(index); // Set the current image index
        setIsModalOpen(true); // Open the modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    return (
        <div>
            {/* Heading */}
            <div className="py-10 mt-20">
                <div className="md:flex items-center justify-center gap-20">
                    <div className="cursor-pointer transition-opacity duration-300 hover:opacity-25">
                        <BackButton />
                    </div>
                    <div className="md:ml-10 flex flex-col w-full md:w-2/3 mx-auto px-4 md:px-0">
                        <h1 className="inline-block text-3xl md:text-5xl text-center font-bold text-gray-900 tracking-tight p-4">
                            WISDM Dataset: Data Analysis and Visualisation
                        </h1>
                        <hr className="bg-indigo-500 h-1 rounded-full mb-4 mx-auto w-full" />
                    </div>
                </div>
            </div>
              {/* Project Overview & Dataset Description */}
              <div className="flex flex-col md:flex-row md:space-x-8 mx-4 md:mx-10 lg:mx-20 mt-8">
                    {/* Project Overview */}
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <h1 className="text-2xl md:text-3xl text-center font-bold text-gray-900 tracking-tight p-4">
                            Project Overview
                        </h1>
                        <p className="text-lg md:text-xl font-alegreya text-gray-700 leading-relaxed mb-6 px-4">
                            The project explores the WISDM dataset and uses machine learning classifiers to implement activity prediction. 
                            Exploratory data analysis (EDA) is used to uncover patterns in human behavior, utilizing Python libraries like Pandas, Matplotlib, Sklearn, Plotly, and Seaborn. 
                            Visualizations include line charts, histograms, and box plots.
                        </p>
                    </div>

                    {/* Dataset Description */}
                    <div className="w-full md:w-1/2">
                        <h1 className="text-2xl md:text-3xl text-center font-bold text-gray-900 tracking-tight p-4">
                            Dataset Description
                        </h1>
                        <p className="text-lg md:text-xl  font-alegreya text-gray-700 leading-relaxed mb-6 px-4">
                            The WISDM dataset is widely used in Human Activity Recognition (HAR) research. It contains accelerometer and gyroscope data collected from the smartphones and watches of 51 subjects performing 18 activities for 3 minutes each. 
                            Sensor readings were recorded along the X, Y, and Z axes at a frequency of 20 Hz, with each activity assigned a unique code (A–S). 
                            This dataset was selected for its relevance to HAR applications.
                        </p>
                    </div>
                </div>

            {/* Results & Discussion */}
            <h1 className="text-2xl md:text-3xl text-center font-bold text-gray-900 tracking-tight p-8">Results & Discussion</h1>
            <p className="text-base md:text-xl text-center font-alegreya text-gray-700 leading-relaxed mb-6 px-4">Click on any picture for in-depth analysis</p>

            <div className='flex justify-center gap-10'>
                {/* Subject 1600 - Linechart */}
                <div className='flex-col'>
                    <h3 className="text-xl md:text-2xl text-center font-bold text-gray-900 tracking-tight p-4">X, Y, Z Accelerometer data for subject 1600</h3>
                    <div className='flex flex-wrap justify-center gap-10'>
                        <ImageOpacityOpenClick image={subject_1600[0]} onClick={() => openModal(0)} />
                    </div>
                    {/* Modal for image slider */}
                    {isModalOpen && (
                        <ModalSlider
                            imagesArray={subject_1600}
                            currentSlideIndex={currentImageIndex} // Start from the clicked image
                            onClose={handleCloseModal}
                        />
                    )}
                </div>
    
                {/* Subject 1601 - Linechart */}
                <div className='flex-col'>
                    <h3 className="text-xl md:text-2xl text-center font-bold text-gray-900 tracking-tight p-4">X, Y, Z Accelerometer data for subject 1601</h3>
                    <div className='flex flex-wrap justify-center gap-10'>
                        <ImageOpacityOpenClick image={subject_1601[0]} onClick={() => openModal(0)} />
                    </div>
                    {/* Modal for image slider */}
                    {isModalOpen && (
                        <ModalSlider
                            imagesArray={subject_1601}
                            currentSlideIndex={currentImageIndex} // Start from the clicked image
                            onClose={handleCloseModal}
                        />
                    )}
                </div>
            </div>
            <div>
                {/* Subject 1601 - Boxplot */}
                <div className='flex-col'>
                    <h3 className="text-xl md:text-2xl text-center font-bold text-gray-900 tracking-tight p-4"> S1600 and S1600 Activity Boxplots</h3>
                    <div className='flex flex-wrap justify-center gap-10'>
                        <ImageOpacityOpenClick image={boxplot[0]} onClick={() => openModal(0)} />
                    </div>
                    {/* Modal for image slider */}
                    {isModalOpen && (
                        <ModalSlider
                            imagesArray={boxplot}
                            currentSlideIndex={currentImageIndex} // Start from the clicked image
                            onClose={handleCloseModal}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Wisdm;
