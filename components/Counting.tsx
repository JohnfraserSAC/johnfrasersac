import React, { ReactNode, useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const easeOutQuint = (t: number) => 1 + (--t) * t * t * t * t;
const frameDuration = 1000 / 60;

interface CountUpAnimationProps {
  duration?: number;
  children: ReactNode;
}

const CountUpAnimation: React.FC<CountUpAnimationProps> = ({
  children,
  duration = 2000
}) => {
  const sectionRef = useRef<HTMLSpanElement | null>(null);
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false); // Flag to start count-up animation

  let countTo = 0;
  if (typeof children === 'string') {
    countTo = parseInt(children, 10);
  }

  // Scroll-triggered animation (only start counting when element is in view)
  useEffect(() => {
    const element = sectionRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasStarted) {
          gsap.to(entry.target, { opacity: 1, y: 0, duration: 1 });

          setHasStarted(true); // Start the count-up animation
          observer.disconnect(); // Optionally disconnect if you only want the animation to trigger once
        }
      });
    });

    if (element) {
      gsap.set(element, { opacity: 0, y: 50 });
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  // Count-up animation
  useEffect(() => {
    if (!hasStarted) return; // Wait until the element is in view

    let frame = 0;
    const totalFrames = Math.round(duration / frameDuration);
    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuint(frame / totalFrames);
      setCount(countTo * progress);

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);

    return () => clearInterval(counter);
  }, [countTo, duration, hasStarted]);

  return <span ref={sectionRef}>{Math.floor(count)}</span>;
};

export default CountUpAnimation;
