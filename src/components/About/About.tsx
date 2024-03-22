import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

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
      <div className="about-main">
        <div
          className="h-screen flex flex-col align-center justify-center items-center"
          id="about"
          ref={sectionRef}
        >
          <div className="about-title-desc">
            <h1 className="text-3xl font-bold text-center mb-14">ABOUT US</h1>
            <div className="about-desc">
              <p>
                Resonance was started by a group of friends who wanted to create
                and talk about music. We are a collective of artists, producers,
                and music enthusiasts who want to share our passion with the
                world. We are not a label, we are a community. We are not a
                business, we are a family. We are not a brand, we are a group of
                friends who love music. We are Resonance. Join our Discord to be
                a part of the community.{" "}
              </p>
              <div className="button-disc">
                <a href="https://discord.gg/dx59SQDgBR" download>
                  <button>JOIN THE DISCORD</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
