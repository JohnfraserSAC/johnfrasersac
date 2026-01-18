import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BootstrapClient } from "@/components/BootstrapClient";
import Link from 'next/link';


export default async function AnnouncementsPage() {

    return (
        <main className=''>
            <BootstrapClient/>
                <div className='text-white custom-background-4 flex justify-center items-center flex-col text-center pt-40 w-full py-8'>
                    <div className='mb-12 text-center flex flex-col justify-center items-center container'>
                        <h1 className='text-4xl mb-3 lg:text-6xl font-bold'>Announcements</h1>
                        <p className='w-7/12 text-lg mb-6'>Check here for all up to date new at John Fraser! Join our Google Classroom if you never want to miss an event.</p>
                        <div className='flex flex-col sm:flex-row gap-x-12 justify-center items-center'>
                            <Link href='/announcements/week'>
                                <button className='button-5'>View All Announcements</button>
                            </Link>
                            <Link href='/announcements/dashboard/login'>
                                <button className='button-5'>Access Club Leader Dashboard</button>
                            </Link>
                        </div>
                        
                    </div>

                    {/* Carousel */}
                    {/* <div id="carouselExampleIndicators" className="carousel slide lg: w-7/12 container" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            {announcements.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide-to={index}
                                    className={index === 0 ? 'active' : ''}
                                    aria-current={index === 0 ? 'true' : 'false'}
                                    aria-label={`Slide ${index + 1}`}
                                ></button>
                            ))}
                        </div>
                        <div className="carousel-inner">
                            {announcements.map((announcement, index) => (
                                <div key={announcement.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <Link href={`/announcements/week/${announcement.slug}`}>
                                        <img src="/placeholder.jpg" className="d-block w-100" alt={announcement.title} />
                                        <div className="carousel-caption d-none d-md-block text-black">
                                            <h5>{announcement.title}</h5>
                                            <p>{announcement.date}</p>
                                        </div>
                                    </Link>
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
                </div> */}

            </div>
        </main>
    );
}