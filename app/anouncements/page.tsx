import React from 'react';
import Image from 'next/image';
import AnouncementHeroBackground from '@/components/anouncements-bg'; 

const page = () => {
  const imageWidth = 1000;

  return (
    <main>
      {/* HERO */}
      <div className='h-screen'>
        <AnouncementHeroBackground />
        <div>
          <h1>Anouncements</h1>
          <p>Check here for all the up to date news at John Fraser! Join our Google Classroom if you never want to miss an event.</p>
        </div>
      </div>

      {/* ACKNOWLEDGEMENT + CAROUSEL + ALL ANNOUNCEMENTS */}
      <div className='w-full flex justify-center items-center'>
        <div className='w-7/12'>
          <div id="carouselExampleIndicators" className="carousel slide border" data-bs-ride="carousel">
              <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                  <div className="carousel-item active">
                      <Image src='/placeholder.jpg' height={1} width={imageWidth} alt="placeholder image"/>
                  </div>
                  <div className="carousel-item">
                      <Image src='/placeholder.jpg' height={1} width={imageWidth} alt="placeholder image"/>
                  </div>
                  <div className="carousel-item">
                      <Image src='/placeholder.jpg' height={1} width={imageWidth} alt="placeholder image"/>
                  </div>
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
      </div>
      
    </main>
  );
};

export default page;