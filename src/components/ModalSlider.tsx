// ModalSlider.tsx
import React, { useState, useEffect } from 'react';
import Image, {StaticImageData} from 'next/image';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

export interface ModalSliderImgItem {
    src: StaticImageData
    text: string ;
    alt: string | null;
    description: React.ReactNode;
}

interface ModalSliderProps {
    imagesArray: ModalSliderImgItem[];
    currentSlideIndex: number; // Receive currentSlideIndex as prop
    onClose: () => void; // onClose callback
}

const ModalSlider: React.FC<ModalSliderProps> = ({ imagesArray, currentSlideIndex, onClose }) => {
    const [currentSlideIndexState, setCurrentSlideIndexState] = useState(currentSlideIndex);

    // Update state when currentSlideIndex changes
    useEffect(() => {
        setCurrentSlideIndexState(currentSlideIndex);
    }, [currentSlideIndex]);

    const prevSlide = () => {
        setCurrentSlideIndexState((prevIndex) =>
            prevIndex === 0 ? imagesArray.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentSlideIndexState((prevIndex) =>
            prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1
        );
    };

    const currentSlide = imagesArray[currentSlideIndexState];

    return (
       <div className="fixed inset-0 bg-cyan-900 bg-opacity-50 flex items-center justify-center z-50" >
         <div className="bg-white p-5 rounded-lg shadow-lg w-full md:w-1/2  overflow-y-auto max-h-[95vh]">
            <div className="relative flex flex-col  gap-5">
                <h2 className="text-3xl text-center font-bold mb-4">{currentSlide.alt}</h2>
                <div className='flex justify-center'>
                    {currentSlide.src && (
                        <Image
                        className='mt-5'
                        src={currentSlide.src}
                        alt={currentSlide.alt ?? ''}
                        width={800}
                        height={400}
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                    )}
                </div>
                <div className="flex justify-between items-center mt-5">
                    <button
                        className='flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-left from-blue-500 to-indigo-900 hover:bg-blue-700 transition duration-300'
                        onClick={prevSlide}
                    >
                        <BsArrowLeftCircleFill className='text-2xl text-white' />
                    </button>

                    <button
                        className='flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-left from-blue-500 to-indigo-900 hover:bg-blue-700 transition duration-300'
                        onClick={nextSlide}
                    >
                        <BsArrowRightCircleFill className='text-2xl text-white' />
                    </button>
                </div>
                <p className="text-lg mb-6 text-center font-opensans">{currentSlide.description}</p>
                <button
                    className="text-white font-semibold text-lg bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 py-3 px-6 rounded-full"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
        </div>
    );
};

export default ModalSlider;
