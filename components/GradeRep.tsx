// components/GradeSection.js
import React from 'react';
import Image from 'next/image';


interface GradeRep {
    name: string,
    image: string,
    video: string
}

const GradeRep: React.FC<GradeRep> = ({ name, image, video }) => {
  return (
    <section className="flex flex-col items-center justify-center mt-10">

      {/* Profile Indicator */}
      <div className="flex items-center space-x-2 mb-6">
        {/* Profile Image */}
        <div className="relative w-6 h-6 rounded-full overflow-hidden">
          <Image 
            src={image}  // Profile image comes from props
            alt="Profile"
            fill
            className="object-cover"
          />
        </div>
        {/* Name comes from props */}
        <span className="text-lg font-medium text-gray-800">{name}</span>
      </div>

      {/* Video Section */}
      <div className="relative w-64 h-40 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
        {/* Embed YouTube Video using iframe */}
        <iframe width="560" 
        height="315" 
        src={video}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        ></iframe>
      </div>
    </section>
  );
};

export default GradeRep;
