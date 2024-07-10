import React from 'react';
import Image from 'next/image';
import AnouncementHeroBackground from '@/components/anouncements-bg'; 
import "bootstrap/dist/css/bootstrap.min.css";
import { BootstrapClient } from "@/components/BootstrapClient";

const page = () => {
  const imageWidth = 1000;
  const slides = [
    {
      src: '/placeholder.jpg',
      height: 1,
      width: imageWidth,
      alt: 'placeholder image',
      heading: 'First Slide Label',
      paragraph: 'This is a description for the first slide.',
    },
    {
      src: '/placeholder.jpg',
      height: 1,
      width: imageWidth,
      alt: 'placeholder image',
      heading: 'Second Slide Label',
      paragraph: 'This is a description for the second slide.',
    },
    {
      src: '/placeholder.jpg',
      height: 1,
      width: imageWidth,
      alt: 'placeholder image',
      heading: 'Third Slide Label',
      paragraph: 'This is a description for the third slide.',
    },
    {
      src: '/placeholder.jpg',
      height: 1,
      width: imageWidth,
      alt: 'placeholder image',
      heading: 'Fourth Slide Label',
      paragraph: 'This is a description for the fourth slide.',
    },
    {
      src: '/placeholder.jpg',
      height: 1,
      width: imageWidth,
      alt: 'placeholder image',
      heading: 'Fifth Slide Label',
      paragraph: 'This is a description for the fifth slide.',
    },
  ]


  return (
    <main>
      <BootstrapClient />
      {/* HERO */}
      <AnouncementHeroBackground />

      {/* ACKNOWLEDGEMENT + CAROUSEL + ALL ANNOUNCEMENTS */}
      <div className='w-full flex flex-col justify-center items-center border my-20'>
        <div className='w-7/12 my-7'>
          <div id="carouselExampleIndicators" className="carousel slide border" data-bs-ride="carousel">
            <div className="carousel-indicators">
              {slides.map((slide, index) => (
                <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-current={index === 0 ? "true" : undefined} aria-label={`Slide ${index + 1}`}></button>
              ))}
            </div>
            <div className="carousel-inner">
              {slides.map((slide, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                  <Image src={slide.src} height={slide.height} width={slide.width} alt={slide.alt}/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{slide.heading}</h5>
                    <p>{slide.paragraph}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <a href='/announcements/search'>
            <button className='button-5'>View All Anouncements</button>
        </a>
      </div>
    </main>
  );
};

export default page;