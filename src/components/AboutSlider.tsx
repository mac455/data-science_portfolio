'use client';
import React, { useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export interface AboutItem{
    title:string;
    description: React.ReactNode;
}

interface AboutItemsProps{
    abtitems: AboutItem[];

}

const AboutSlider: React.FC<AboutItemsProps> = ({ abtitems}) => {
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
    
    return(
        <>
            <div>
                <h1 className="text-6xl text-center md:text-4xl font-bold text-gray-800">{currentSlide.title}</h1>
                <div className="mt-4 text-xl md:text-2xl lg:text-3xl font-alegreya">{currentSlide.description}</div>
            </div>
            <div className="flex justify-between items-center mt-5">
                <button 
                    onClick={prevSlide} 
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-950 transition duration-300"
                >
                    <BsArrowLeftCircleFill className="text-3xl text-white" />
                </button>
                <button 
                    onClick={nextSlide} 
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-950 transition duration-300"
                >
                    <BsArrowRightCircleFill className="text-3xl text-white" />
                </button>
            </div>
             {/* Create blue active slide dots */}
             <div className="flex justify-center space-x-2 mt-5">
                {abtitems.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentSlideIndex(index)}
                        className={`w-3 h-3 cursor-pointer rounded-full transition duration-300 ${
                            currentSlideIndex === index ? 'bg-blue-600' : 'bg-gray-400'
                        }`}
                    ></div>
                ))}
            </div>
        </>
    )
}


export default AboutSlider;