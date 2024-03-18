import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ArtistItem } from "./ArtistItem";
import "./Artists.css";
import Divider from "../Divider/Divider";

interface ArtistsProps {
  className?: string;
}

export const Artists: React.FC<ArtistsProps> = ({ className }) => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.location.hash = "artists";
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
      <div className="h-screen" id="artists" ref={sectionRef}>
        <div className="artists-title">
          <h1 className="flex justify-center font-bold tracking-widest">
            MEET THE ARTISTS
          </h1>
        </div>

        <div className="artists-showcase">
          <div className="grid grid-cols-3 gap-4 justify-items-center">
            <ArtistItem
              image="public/Assets/artist-icons/mikkerj.png"
              name="Mikkkerj"
              social0="https://www.soundcloud.com/users/citromusic"
              social0icon="..."
              social1="https://www.instagram.com/users/citromusic"
              social1icon="..."
            />
            <ArtistItem
              image="public/Assets/artist-icons/tbtl.png"
              name="Turn Back To Life"
              social0="https://www.soundcloud.com/users/citromusic"
              social0icon="..."
              social1="https://www.instagram.com/users/citromusic"
              social1icon="..."
            />
            <ArtistItem
              image="public/Assets/artist-icons/aceta.png"
              name="Aceta"
              social0="https://www.soundcloud.com/users/citromusic"
              social0icon="..."
              social1="https://www.instagram.com/users/citromusic"
              social1icon="..."
            />
            <ArtistItem
              image="public/Assets/artist-icons/temp.png"
              name="Superbloom"
              social0="https://www.soundcloud.com/users/citromusic"
              social0icon="..."
              social1="https://www.instagram.com/users/citromusic"
              social1icon="..."
            />
            <ArtistItem
              image="public/Assets/artist-icons/citro.png"
              name="Citro"
              social0="https://www.soundcloud.com/users/citromusic"
              social0icon="..."
              social1="https://www.instagram.com/users/citromusic"
              social1icon="..."
            />
            <ArtistItem
              image="public/Assets/artist-icons/temp.png"
              name="Doda"
              social0="https://www.soundcloud.com/users/citromusic"
              social0icon="..."
              social1="https://www.instagram.com/users/citromusic"
              social1icon="..."
            />
          </div>
          <div className="mt-24">
            <Divider />
          </div>
        </div>
      </div>
    </div>
  );
};
