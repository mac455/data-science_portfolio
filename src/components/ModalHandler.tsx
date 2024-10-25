'use client'
import React, { useState } from 'react';
import ImageOpacityOpenClick from '@/components/OpenClick';
import ModalSlider from '@/components/ModalSlider';
import { subject_1600} from '@/components/WisdmImgData'; 
import { ModalSliderImgItem } from '@/components/ModalSlider';

interface ModalHandlerProps {
    imagesArray: ModalSliderImgItem[];
    imageIndex: number;
}

const ModalHandler: React.FC<ModalHandlerProps> = ({imagesArray, imageIndex}) => {

    const[currentImageIndex, setCurrentImageIndex] = useState(0) // Track the clicked image
    const[isModalOpen, setIsModalOpen] = useState(false) //Initial state is no modal displayed
    const[currentImagesArray, setCurrentImagesArray] = useState(subject_1600) // Track the current image array

    const openModal = (index:number, imagesArray:ModalSliderImgItem[]) => {
        setCurrentImageIndex(index) // Set the current image index
        setCurrentImagesArray(imagesArray) // Set the array to be displayed
        setIsModalOpen(true) // Open modal

    }

    const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    return(
    <>
    <div className='flex flex-wrap justify-center gap-10'>
        <ImageOpacityOpenClick image={imagesArray[imageIndex]} onClick={() => openModal(imageIndex, imagesArray)} />
    </div>
    {isModalOpen && (
            <ModalSlider
                imagesArray={currentImagesArray} // Use the current images array
                currentSlideIndex={currentImageIndex} // Start from the clicked image
                onClose={handleCloseModal}
            />
        )}

    </>
    )
}

export default ModalHandler