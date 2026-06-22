import { useEffect, useState, useRef } from "react";

export const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (elementRef.current) observer.unobserve(elementRef.current);
        }
      },
      {threshold: 0.3}
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);
  return { ref: elementRef, isVisible };
};