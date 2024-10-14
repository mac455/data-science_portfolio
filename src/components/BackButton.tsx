'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

 const BackButton = () => {
    const router = useRouter()
    
    return(
        <div>
            <div className='flex justify-start items-center gap-4 ml-4' onClick={() => router.back()}>
                <svg
                    className='w-6 h-6 '
                    id="Capa_1"
                    enableBackground="new 0 0 100 100"  
                    version="1.1"
                    viewBox="0 0 100 100"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                    <path
                        d="M95.6,76.7L53,52v23.9c0,0.4-0.1,0.7-0.4,0.9c-0.3,0.2-0.6,0.2-0.9,0L4.5,49.5C4.2,49.3,4,49,4,48.6s0.2-0.7,0.5-0.9  l47.2-27.3c0.3-0.2,0.6-0.2,0.9,0S53,21,53,21.3v23.9l42.6-24.7c0.3-0.2,0.6-0.2,0.9,0c0.3,0.2,0.4,0.5,0.4,0.9v54.5  c0,0.4-0.1,0.7-0.4,0.9c-0.2,0.1-0.3,0.1-0.5,0.1C95.9,76.9,95.8,76.8,95.6,76.7z M52.6,49.4L95,74.1V23.1L52.6,47.8  c-0.3,0.2-0.8,0.2-1.1,0c-0.3-0.2-0.6-0.5-0.6-0.9V23.1L6.8,48.6L51,74.1V50.3c0-0.4,0.3-0.7,0.6-0.9c0.2-0.1,0.3-0.1,0.5-0.1  C52.3,49.3,52.5,49.3,52.6,49.4z"
                    />
                 </svg>
                 <p className='text-lg font-opensans font-bold text-indigo-500'> Back </p>
            </div>

        </div>
    )
 }

export default BackButton;

