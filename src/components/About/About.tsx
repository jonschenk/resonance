import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface AboutProps {
  className?: string;
}

export const About: React.FC<AboutProps> = ({ className }) => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.location.hash = "about";
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [navigate]);
  return (
    <div className={className}>
      <div className="h-screen" id="about" ref={sectionRef}></div>
    </div>
  );
};
