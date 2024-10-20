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
            <div className="px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl text-center sm:text-3xl md:text-4xl font-bold text-gray-800">{currentSlide.title}</h1>
                <div className="mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-alegreya">{currentSlide.description}</div>
            </div>
            <div className="flex justify-between items-center mt-4 mx-4">
                <button
                    onClick={prevSlide}
                    className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-left from-blue-500 to-indigo-900  hover:bg-purple-950 transition duration-300"
                >
                    <BsArrowLeftCircleFill className="text-xl sm:text-2xl text-white" />
                </button>
                <button
                    onClick={nextSlide}
                    className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-left from-blue-500 to-indigo-900  hover:bg-purple-950 transition duration-300"
                >
                    <BsArrowRightCircleFill className="text-xl sm:text-2xl text-white" />
                </button>
            </div>
            {/* Create blue active slide dots */}
            <div className="flex justify-center space-x-2 mt-4">
                {abtitems.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentSlideIndex(index)}
                        className={`w-3 h-3 cursor-pointer rounded-full transition duration-300 ${
                            currentSlideIndex === index ? 'bg-gradient-to-left from-blue-500 to-indigo-900 ' : 'bg-gray-400'
                        }`}
                    ></div>
                ))}
            </div>
        </>
    );
}

export default AboutSlider;
