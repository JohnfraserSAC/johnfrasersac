'use client'

import React, { useRef } from 'react';
import { gsap } from 'gsap';

interface ExecutiveInfoProps {
    name: string,
    role: string,
    image: string,
    description: string,
}

const ExecutiveInfo: React.FC<ExecutiveInfoProps> = ({ name, role, image, description }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const infoBoxRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    const tl = gsap.timeline();
    tl.to(infoBoxRef.current, {
      width: '207.5px', 
      height: '300px', 
      borderRadius: '15px',
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out'
    }).to(infoBoxRef.current?.querySelectorAll('h3, p'), {
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out'
    }, '+=0.3'); // Delay the text fade-in by 0.3s
  };

  const handleMouseLeave = () => {
    const tl = gsap.timeline();
    tl.to(infoBoxRef.current?.querySelectorAll('h3, p'), {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in'
    }).to(infoBoxRef.current, {
      width: '50px',
      height: '50px',
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in'
    }, '+=0.3'); // Delay the box shrink by 0.3s
  };

  return (
    <div>
        <div className="relative inline-block">
        <img
            ref={imageRef}
            src={image}
            alt="Executive"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="w-40 h-40 rounded-full"
        />
            <div
                ref={infoBoxRef}
                className="absolute top-1/2 left-1/2 w-12 h-12 bg-black bg-opacity-80 text-white opacity-0 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center p-2 box-border"
            >
                <div className='flex flex-col justify-evenly h-40'>
                        <div>
                            <h3 className="opacity-0 font-semibold text-xl">{name}</h3>
                            <p className="opacity-0">{role}</p>
                        </div>
                        <p className="opacity-0">{description}</p>
                </div>
                
            </div>
        </div>
        <div className='text-center'>
            <h3 className='font-semibold text-xl'>{name}</h3>
            <p>{role}</p>
        </div>
    </div>
  );
};

export default ExecutiveInfo;