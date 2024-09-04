import React, { useEffect, useState, useRef } from "react";

const CountUpAnimation = ({ children, duration = 3000 }) => {
  const countTo = parseInt(children, 10);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  const easeOutQuad = (t) => t * (2 - t);
  const frameDuration = 1000 / 60;

  useEffect(() => {
    const handleIntersection = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasAnimated) {
        let frame = 0;
        const totalFrames = Math.round(duration / frameDuration);
        const counter = setInterval(() => {
          frame++;
          const progress = easeOutQuad(frame / totalFrames);
          setCount(countTo * progress);

          if (frame === totalFrames) {
            clearInterval(counter);
            setHasAnimated(true); // Ensure the animation only triggers once
          }
        }, frameDuration);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect(); // Cleanup observer on component unmount
  }, [countTo, duration, hasAnimated]);

  return <span ref={elementRef}>{Math.floor(count)}</span>;
};

export default CountUpAnimation;
