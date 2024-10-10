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
            <h2 className="text-3xl font-thin">{currentSlide.title}</h2>
            <Image 
                className='mt-10 transform transition-transform duration-1000 hover:scale-125'
                src={currentSlide.src}
                alt={currentSlide.alt}
                width={600}
                height={700}
                
                
            />
            <div className="flex gap-4 mt-5 ">
              <button 
                  onClick={prevSlide} 
                  className="absolute top-1/2 -ml-40 transform -translate-y-1/2 p-2 rounded-full z-10"
              >
                  <BsArrowLeftCircleFill className="text-3xl text-white" />
              </button>
              <button 
                  onClick={nextSlide} 
                  className="absolute top-1/2 -mr-40 right-2 transform -translate-y-1/2 p-2 rounded-full z-10"
              >
                  <BsArrowRightCircleFill className="text-3xl text-white" />
              </button>
            </div>
            {/* Create blue active slide dots*/}
            <div className="flex justify-center space-x-2">
              {items.map((_, index) => (
                <div
                key={index}
                  onClick={() => setCurrentSlideIndex(index)}
                 className={`w-3 h-3 cursor-pointer rounded-full ${
              currentSlideIndex === index ? 'bg-blue-600' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
          </div>
    );
}
