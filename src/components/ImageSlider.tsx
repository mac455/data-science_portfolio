'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

interface ImageItem {
    title: string;
    src: StaticImageData;
    alt: string;
}

interface ImageSliderProps {
    items: ImageItem[];
    href: string; 
}

const ImageSlider: React.FC<ImageSliderProps> = ({ items, href }) => {
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

    const currentSlide = items[currentSlideIndex]; // Store the image at the specified index 

    return (
        <div className="relative flex flex-col mt-10 gap-5 px-4 xl:px-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-xl font-thin text-center">{currentSlide.title}</h2>
            <div className="flex justify-center">
                <Link href={href}>
                    <Image 
                        className='mt-5 transform transition-transform duration-1000 hover:scale-110' 
                        src={currentSlide.src}
                        alt={currentSlide.alt}
                        width={600}
                        height={400}
                        style={{ maxWidth: '100%', height: 'auto' }} 
                    />
                </Link>
            </div>
            <div className="flex justify-between items-center mt-5">
                <button 
                    onClick={prevSlide} 
                    className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 rounded-full bg-gradient-to-left from-blue-500 to-indigo-900 hover:bg-blue-700 transition duration-300"
                >
                    <BsArrowLeftCircleFill className="text-2xl md:text-3xl xl:text-4xl text-white" />
                </button>
                <button 
                    onClick={nextSlide} 
                    className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 xl:w-14 xl:h-14 rounded-full bg-gradient-to-left from-blue-500 to-indigo-900 hover:bg-blue-700 transition duration-300"
                >
                    <BsArrowRightCircleFill className="text-2xl md:text-3xl xl:text-4xl text-white" />
                </button>
            </div>
            {/* Create blue active slide dots */}
            <div className="flex justify-center space-x-2 mt-5">
                {items.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentSlideIndex(index)}
                        className={`w-3 h-3 cursor-pointer rounded-full transition duration-300 ${
                            currentSlideIndex === index ? 'bg-blue-500' : 'bg-gray-400'
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default ImageSlider;
