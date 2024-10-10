import React from 'react';
import Image, { StaticImageData } from 'next/image';
import ImageSlider from './ImageSlider';

interface ImageItem {
    title: string;
    src: StaticImageData; 
    alt: string; 
}

interface ImageProps {
    images: ImageItem[];
}

const ImageGallery: React.FC<ImageProps> = ({ images }) => {
    return (
        <div className="flex justify-center flex-wrap gap-10">
            {/* Pass the entire images array to the ImageSlider */}
            <ImageSlider items={images} /> 
        </div>
    );
};

export default ImageGallery;
