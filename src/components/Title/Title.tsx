import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Title() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.location.hash = "home";
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
    <div className="h-screen" id="home" ref={sectionRef}>
      <div className="flex flex-col justify-center items-center h-full">
        <h1 style={{ fontSize: "10rem" }} className="font-bold tracking-widest">
          RESONANCE
        </h1>
      </div>
    </div>
  );
}
