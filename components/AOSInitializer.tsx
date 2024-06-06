"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      mirror: false,
    });
  }, []);

  return null;
};