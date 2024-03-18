import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Submit.css";

interface SubmitProps {
  className?: string;
}

export const Submit: React.FC<SubmitProps> = ({ className }) => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.location.hash = "submit";
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
      <div className="h-screen" id="submit" ref={sectionRef}>
        <div className="submission-container"></div>
      </div>
    </div>
  );
};
