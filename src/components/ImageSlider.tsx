'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

export default function ImageSlider({ items }) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const prevSlide = () => {
        setCurrentSlideIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1 
        );
    };

    const nextSlide = () => {
        setCurrentSlideIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const currentSlide = items[currentSlideIndex];

    return (
        <div className="relative flex flex-col mt-10 gap-5">
            <h2 className="text-3xl font-thin text-center">{currentSlide.title}</h2>
            <div className="flex justify-center">
                <Image 
                    className='mt-5 transform transition-transform duration-1000 hover:scale-110' // Reduce scale for better fit
                    src={currentSlide.src}
                    alt={currentSlide.alt}
                    width={600}
                    height={400} // Adjusted height for better aspect ratio
                    style={{ maxWidth: '100%', height: 'auto' }} // Responsive image
                />
            </div>
            <div className="flex justify-between items-center mt-5">
                <button 
                    onClick={prevSlide} 
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300"
                >
                    <BsArrowLeftCircleFill className="text-3xl text-white" />
                </button>
                <button 
                    onClick={nextSlide} 
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300"
                >
                    <BsArrowRightCircleFill className="text-3xl text-white" />
                </button>
            </div>
            {/* Create blue active slide dots */}
            <div className="flex justify-center space-x-2 mt-5">
                {items.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentSlideIndex(index)}
                        className={`w-3 h-3 cursor-pointer rounded-full transition duration-300 ${
                            currentSlideIndex === index ? 'bg-blue-600' : 'bg-gray-400'
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
