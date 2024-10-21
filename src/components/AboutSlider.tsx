'use client';
import React, { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export interface AboutItem {
    title: string;
    description: React.ReactNode;
}

interface AboutItemsProps {
    abtitems: AboutItem[];
}

const AboutSlider: React.FC<AboutItemsProps> = ({ abtitems }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const prevSlide = () => {
        setCurrentSlideIndex((prevIndex) =>
            prevIndex === 0 ? abtitems.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentSlideIndex((prevIndex) =>
            prevIndex === abtitems.length - 1 ? 0 : prevIndex + 1
        );
    };

    const currentSlide = abtitems[currentSlideIndex];

    return (
        <>
            <div className="px-4 sm:px-6 md:px-8 lg:px-12">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-10xl text-center font-bold text-gray-800">
                    {currentSlide.title}
                </h1>
                <div className="mt-2 text-base sm:text-lg md:text-xl lg:text-2xl font-alegreya text-gray-700">
                    {currentSlide.description}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-6 mx-6 sm:mx-8 lg:mx-12">
                <button
                    onClick={prevSlide}
                    className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-l from-blue-500 to-indigo-900 hover:bg-purple-900 transition duration-300"
                >
                    <BsArrowLeftCircleFill className="text-lg sm:text-xl lg:text-2xl text-white" />
                </button>
                <button
                    onClick={nextSlide}
                    className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-l from-blue-500 to-indigo-900 hover:bg-purple-900 transition duration-300"
                >
                    <BsArrowRightCircleFill className="text-lg sm:text-xl lg:text-2xl text-white" />
                </button>
            </div>

            {/* Slide Indicator Dots */}
            <div className="flex justify-center space-x-2 mt-4 sm:mt-6">
                {abtitems.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentSlideIndex(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 cursor-pointer rounded-full transition duration-300 ${
                            currentSlideIndex === index
                                ? 'bg-gradient-to-l from-blue-500 to-indigo-900'
                                : 'bg-gray-400'
                        }`}
                    ></div>
                ))}
            </div>
        </>
    );
};

export default AboutSlider;
