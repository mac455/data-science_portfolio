import React from 'react';
import { StaticImageData } from 'next/image';
import ImageSlider from './ImageSlider';

interface ImageItem {
    title: string;
    src: StaticImageData; 
    alt: string; 
}


interface ImageProps {
    images: ImageItem[];
    href:string
}

const ImageGallery: React.FC <ImageProps> = ({ images,href }) => {
    return (
        <div className="flex justify-center flex-wrap gap-10">
            {/* Pass the entire images array to the ImageSlider */}
            <ImageSlider items={images} href={href} /> 
        </div>
    );
};

export default ImageGallery;
