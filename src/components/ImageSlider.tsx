'use client';

import React, {useState} from 'react'


export default function ImageSlider({slides}) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    
    {/* Update sildes */}
    const nextSlide = () => {
        setCurrentSlideIndex((prevIndex) =>
            prevIndex === slides.length -1 ? 0 : prevIndex + 1
             /*If previous index is equal to final index, set to index 0, if not, add 1 */
              /* Eg if slides.length (total no. of slides) = 5.
              Only 4 indexes so slides.length -1 will provide 4 indexes 
              Then, check if the last index is equal to slide.length (4). 
              If so, set to 0 index and start at beginning, if not move to next index*/
        );
    };
  return (
    <div>
        <div className="flex flex-col items-center">
        {slides[currentSlideIndex]}
        </div>
        <button 
        onClick={nextSlide} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Next Slide
      </button>

    </div>
  )
}
