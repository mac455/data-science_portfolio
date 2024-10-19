'use client'
import React from 'react';
import { subject_1600, subject_1601, gyroscope_1600, gyroscope_1601, boxplot_accel, boxplot_gyro, activities_LC_Imgitem, clusterBeforePCA, clusterAfterPCA, classifierNoSmt, classifierWithSmt} from '@/components/WisdmImgData'; // Array for subject_1600 images
import BackButton from '@/components/BackButton';
import ModalHandler from '@/components/ModalHandler';
import ImageOpacityWithModal from '@/components/ImageOpacity';

const Wisdm = () => {
    return (
        <div>
            {/* Heading */}
            <div className="py-10 mt-20">
                <div className="md:flex items-center justify-center gap-20">

                    <div className="cursor-pointer transition-opacity duration-300 hover:opacity-25">
                        <BackButton />
                    </div>
                    <div className="md:ml-10 flex flex-col w-full md:w-2/3  mx-auto px-4 md:px-0">
                   
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
                        This project explores the WISDM dataset to implement activity prediction using machine learning classifiers. 
                        Through exploratory data analysis (EDA), patterns in human behavior are uncovered, leveraging Python libraries such as Pandas, Matplotlib, Scikit-learn, Plotly, and Seaborn. 
                        By comparing accelerometer and gyroscope data, a more comprehensive understanding of individual motion is achieved, enhancing behavioral analysis.
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
            <p className="text-base md:text-xl text-center font-alegreya text-gray-700 leading-relaxed mb-6 px-4">Click on any picture for further analysis</p>
            <a className="block mx-auto text-base w-1/6  font-alegreya text-gray-700 leading-relaxed mb-6 px-4 underline underline-offset-1 focus:text-purple-500 " 
            href='https://github.com/mac455/wisdm-data-analysis'
            target='_blank'
            rel='noopener noreferrer'
            > (Source code available here) 
            </a>

            <div className='flex justify-center gap-10'>
                {/* Subject 1600 - Accel - Linechart*/}
                <div className='flex-col'>
                    <h3 className="mt-10 text-xl md:text-2xl text-center font-bold text-gray-900 tracking-tight p-4">Accelerometer data for subject 1600</h3>
                    <ModalHandler imagesArray={subject_1600} imageIndex={0} />
                </div>
    
                {/* Subject 1601 - Accel */}
                <div className='flex-col'>
                    <h3 className="mt-10 text-xl md:text-2xl text-center font-bold text-gray-900 tracking-tight p-4">Accelerometer data for subject 1601</h3>
                    <ModalHandler imagesArray={subject_1601} imageIndex={0} />
                </div>
            </div>

            <div className='flex justify-center gap-10'>
                {/* Subject 1600 - Gyro - Linechart */}
                <div className='flex-col'>
                    <h3 className="mt-10 text-xl md:text-2xl text-center font-bold text-gray-900 tracking-tight p-4">  Gyroscope data for subject 1600</h3>
                    <ModalHandler imagesArray={gyroscope_1600} imageIndex={0} />
                </div>
                 {/* Subject 1601 - Gyro */}
                 <div className='flex-col'>
                    <h3 className="mt-10 text-xl md:text-2xl text-center font-bold text-gray-900 tracking-tight p-4">  Gyroscope data for subject 1600</h3>
                    <ModalHandler imagesArray={gyroscope_1601} imageIndex={0} />
                </div>
            </div>
            <div className='flex justify-center gap-10'>
                {/* Boxplot - Accel  */}
                <div className='flex-col'>
                    <h3 className="mt-10 text-xl md:text-2xl text-center font-bold text-gray-900 tracking-tight p-4"> S1600 and S1600 Accelerometer Boxplots</h3>
                    <ModalHandler imagesArray={boxplot_accel} imageIndex={0} />
                </div>
                
                {/* Boxplot - Gyro */}
                <div className='flex-col'>
                    <h3 className="mt-10 text-xl md:text-2xl text-center font-bold text-gray-900 tracking-tight p-4"> S1600 and S1600 Accelerometer Boxplots</h3>
                    <ModalHandler imagesArray={boxplot_gyro} imageIndex={0} />
                </div>
            </div>
            <div className='flex justify-center gap-10'>
                 {/* Activity Freq. Linechart*/}
                <div className='flex flex-col'>
                     <h3 className="mt-10 text-xl md:text-2xl text-center font-bold text-gray-900 tracking-tight p-4"> Activity Count by Time of day for all 51 Subjects</h3>
                     <ImageOpacityWithModal images={activities_LC_Imgitem} />
                </div>
            </div>

            {/* Machine Learning Section */}
            <div className=" mt-20 gap-10 flex flex-col w-full mx-auto my-auto px-4 md:px-0">
            <hr className="bg-indigo-500 h-1 rounded-full mb-4 mx-auto w-full" />
                        <h1 className="inline-block text-3xl md:text-5xl text-center font-bold text-gray-900 tracking-tight p-4">
                            Machine Learning Section
                        </h1>
                        <hr className="bg-indigo-500 h-1 rounded-full mb-4 mx-auto w-full" />
            </div>

            <div className='flex justify-center gap-10'>
                 {/* Cluster Scatter Plot   */}
                 <div className='flex-col'>
                    <h3 className="mt-10 text-xl md:text-2xl text-center font-bold text-gray-900 tracking-tight p-4"> Activity clustering before PCA</h3>
                    <ModalHandler imagesArray={clusterBeforePCA} imageIndex={0} />
                </div>
                 {/* Cluster Scatter Plot   */}
                 <div className='flex-col'>
                    <h3 className="mt-10 text-xl md:text-2xl text-center font-bold text-gray-900 tracking-tight p-4"> Activity clustering after PCA</h3>
                    <ModalHandler imagesArray={clusterAfterPCA} imageIndex={0} />
                </div>

            </div>

            <div className='flex justify-center gap-10 mb-20'>
                <div className='flex-col'>
                    <h3 className="mt-10 text-xl md:text-2xl text-center font-bold text-gray-900 tracking-tight p-4"> Classifier before SMOTE</h3>
                    <ModalHandler imagesArray={classifierNoSmt} imageIndex={0} />
                </div>
                <div className='flex-col'>
                    <h3 className="mt-10 text-xl md:text-2xl text-center font-bold text-gray-900 tracking-tight p-4"> Classifier before SMOTE</h3>
                    <ModalHandler imagesArray={classifierWithSmt} imageIndex={0} />
                </div>
            </div>
        </div>
    );
};

export default Wisdm;
