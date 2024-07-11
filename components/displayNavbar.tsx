'use client'

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

export default function DisplayNavbar() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY < 350);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {isVisible && <Navbar />}
        </>
    );
}