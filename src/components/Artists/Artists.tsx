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
      <div id="artists" ref={sectionRef}>
        <div className="artists-title">
          <h1 className="flex justify-center font-bold tracking-widest ">
            MEET THE ARTISTS
          </h1>
        </div>

        <div className="artists-showcase">
          <div className="grid grid-cols-3 gap-4 justify-items-center">
            <ArtistItem
              image="/Assets/artist-icons/mikkerj.png"
              spotifyLink="https://open.spotify.com/artist/3fkKWMJaSy1s1Oqtmi93WV?si=reM2df80RUSOvNYnkxRBBQ"
              name="Mikkkerj"
              social0="https://mikkerj.bandcamp.com/"
              social0icon="/Assets/social-icons/bandcamp.svg"
              social1="https://www.tiktok.com/@mikkerj.music?lang=en"
              social1icon="/Assets/social-icons/tiktok.svg"
            />
            <ArtistItem
              image="/Assets/artist-icons/tbtl.png"
              spotifyLink="https://open.spotify.com/artist/5pvdWqfeEUJFsQ8n8cyKJi?si=XIPoldD5QuOlQOqgBHjXnQ"
              name="Turn Back To Life"
              social0="https://x.com/TurnBacktoLife1"
              social0icon="/Assets/social-icons/x.svg"
            />
            <ArtistItem
              image="/Assets/artist-icons/aceta.png"
              spotifyLink="https://open.spotify.com/artist/0DAhgpW72fd87W92r6kYH8?si=HWKhk1_IRV-ahf6ZNsgTJw"
              name="Aceta"
              social0="https://soundcloud.com/acetamusic/tracks"
              social0icon="/Assets/social-icons/soundcloud.svg"
              social1="https://x.com/flameyboyo"
              social1icon="/Assets/social-icons/x.svg"
            />
            <ArtistItem
              image="/Assets/artist-icons/superbloom.png"
              spotifyLink="https://open.spotify.com/artist/53H3ZVhE5xhi9IUCY16fk3?si=j_PlAzd_RyCaKHq_dG0yZQ"
              name="Superbloom"
              social0="https://soundcloud.com/kaelaronline/tracks"
              social0icon="/Assets/social-icons/soundcloud.svg"
              social1="https://twitter.com/kaelaronline"
              social1icon="/Assets/social-icons/x.svg"
            />
            <ArtistItem
              image="/Assets/artist-icons/citro.png"
              spotifyLink="https://soundcloud.com/citro_music/tracks"
              name="Citro"
              social0="https://soundcloud.com/citro_music/tracks"
              social0icon="/Assets/social-icons/soundcloud.svg"
              social1="https://halftale.bandcamp.com/"
              social1icon="/Assets/social-icons/bandcamp.svg"
            />
            <ArtistItem
              image="/Assets/artist-icons/doda.png"
              spotifyLink="https://open.spotify.com/artist/22uK3GrfLaqObCezHSJgoH?si=VRdVDDvQQMCb8VK6C5jl-w"
              name="Doda"
              social0="https://twitter.com/dodado23"
              social0icon="/Assets/social-icons/x.svg"
              social1="https://www.instagram.com/anto.chg/"
              social1icon="/Assets/social-icons/instagram-icon.svg"
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
