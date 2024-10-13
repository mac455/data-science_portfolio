'use client'

import React from 'react';
import Image, {StaticImageData} from 'next/image';

interface ImageItem {
    src: StaticImageData
    text: string
    alt: string
}

interface ImageProps {
    image: ImageItem; 
    onClick: () => void;
}

const ImageOpacityOpenClick: React.FC<ImageProps> = ({ image, onClick }) => {

    return (
        <>
            <div className='relative group bg-blue-950 rounded-md cursor-pointer' onClick={onClick}>
                <Image
                    className='transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-25'
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={600}
                    priority 
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <p className="text-white font-bold text-2xl">{image.text}</p>
                </div>
            </div>
        </>
    );
};

export default ImageOpacityOpenClick;
