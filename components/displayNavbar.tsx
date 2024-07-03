'use client'

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

export default function DisplayNavbar() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Set isVisible to false if scroll offset is greater than 200, otherwise true
            setIsVisible(window.scrollY < 350);
        };

        // Add scroll event listener when component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove event listener on cleanup
        return () => window.removeEventListener('scroll', handleScroll);
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <>
            {isVisible && <Navbar />}
        </>
    );
}