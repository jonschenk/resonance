import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Divider from "../Divider/Divider";
import Dropzone from "./Dropzone";
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
      <Divider />
      <div className="submit-container h-screen mt-14">
        <h1 className="flex justify-center align-center mt-16 mb-5">
          SUBMIT A DEMO
        </h1>
        <p className="text-center mb-10">
          We are a music collective, if we like what you have, you might be
          given permission to use the Resonance name on your track.{" "}
          <span>
            <br />
            <br />
            NOTE: We are not a music label, we will not release your track for
            you. We are a collective and by submitting a track you are seeking
            approval to use the Resonance name in your track "label" upon
            release.
          </span>
        </p>
        <div className="h-screen mb-20" id="submit" ref={sectionRef}>
          <Dropzone />
        </div>
      </div>
    </div>
  );
};
