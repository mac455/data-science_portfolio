'use client'

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';

export interface ImageItem {
    src: StaticImageData;
    alt: string;
    text: string;
    description: string | React.ReactNode| null;
}

interface ImageProps {
    images: ImageItem[]; 
}

const ImageOpacityWithModal: React.FC<ImageProps> = ({ images = [] }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null); // State is initalised as null first and then will be updated with image item 

    const handleOpenClick = (imgItem: ImageItem) => {
        console.log("Image clicked:", imgItem); // Test if working 
        setSelectedImage(imgItem); // Store the selected image
        setIsModalOpen(true);
    };

    const handleCloseClick = () => {
        setIsModalOpen(false);
        setSelectedImage(null); // Reset selected image
    };

    return (
        <>
            {images.map((imgItem, index) => (
                <div key={index} className='relative group bg-blue-950 rounded-md cursor-pointer' 
                onClick={() => handleOpenClick (imgItem)}>
                    <Image
                        className='transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-25 cursor-pointer mx-auto my-auto rounded-md'
                        src={imgItem.src}
                        alt={imgItem.alt}
                        width={600}
                        height={600}
                        priority 
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        <p className=" text-white font-bold text-center text-base md:text-2xl">{imgItem.text}</p>
                    </div>
                </div>
            ))}

            {isModalOpen && selectedImage && ( // Condtitional to check if modal is open and an image is selected, if true display modal structure below 
                <div className="fixed inset-0 bg-cyan-900 bg-opacity-50 flex items-center justify-center z-50">
                    <div className=" bg-white p-10 rounded-lg shadow-lg w-full md:w-1/2  overflow-y-auto max-h-[95vh]">
                        <h2 className="text-3xl font-bold mb-4 text-center">{selectedImage.alt}</h2>
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                        
                        />
                        <p className="text-lg mb-6 text-center ">{selectedImage.description}</p>
                        <button
                            className=" text-white font-semibold text-lg bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 py-3 px-6 w-full rounded-full"
                            onClick={handleCloseClick}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ImageOpacityWithModal;

