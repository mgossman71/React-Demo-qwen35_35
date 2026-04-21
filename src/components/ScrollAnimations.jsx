import { useEffect, useRef } from 'react';

export default function ScrollAnimations() {
  const animatedElements = useRef([]);

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Select all elements with scroll animation classes
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => {
      animatedElements.current.push(el);
      observer.observe(el);
    });

    return () => {
      animatedElements.current.forEach((el) => {
        el.classList.remove('animate-in');
      });
    };
  }, []);

  return null;
}
