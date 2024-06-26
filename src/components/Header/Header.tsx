import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const handleHomeClick = (event: React.MouseEvent) => {
    event.preventDefault();
    window.scrollTo(0, 0);
  };

  const handleLinkClick = (id: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const position = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: position,
        behavior: "smooth",
      });
    }
  };

  const [activeHash, setActiveHash] = useState(window.location.hash);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      setIsTop(window.pageYOffset < 50);
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  if (isTop) {
    window.location.hash = "home";
  }

  return (
    <div className="header-container h-4">
      <div
        className={`p-5 flex justify-between items-center fixed top-0 w-full z-1000 transition duration-200 ease-in-out ${
          isTop ? "bg-transparent" : "bg-white"
        }`}
      >
        <a href="#home" className="hidden md:block" onClick={handleHomeClick}>
          <img
            src="/Assets/reso-logo/resonance0.svg"
            className={`w-8 h-8 absolute left-8 top-1/2 transform -translate-y-1/2 transition duration-200 ease-in-out ${
              isTop ? "" : "invert"
            }`}
          />
        </a>

        <a
          href="https://discord.gg/dx59SQDgBR"
          target="_blank"
          className="hidden md:block"
        >
          <img
            src="/Assets/social-icons/discord.svg"
            className={`w-10 h-10 absolute right-8 top-1/2 transform -translate-y-1/2 transition duration-200 ease-in-out ${
              isTop ? "" : "invert"
            }`}
          />
        </a>

        <div className="flex-1 flex justify-center space-x-24 text-white font-inter font-bold">
          <a
            className={`text-lg transition-colors duration-600 ease-in-out hover:text-resoPink ${
              isTop ? "" : "text-black hover:text-resoPink"
            } ${activeHash === "#artists" ? "border-b-2 border-resoPink" : ""}`}
            href="#artists"
            onClick={handleLinkClick("artists")}
          >
            Artists
          </a>
          <a
            className={`text-lg transition-colors duration-600 ease-in-out hover:text-resoPink  ${
              isTop ? "" : "text-black hover:text-resoPink"
            } ${activeHash === "#about" ? "border-b-2 border-resoPink" : ""}`}
            href="#about"
            onClick={handleLinkClick("about")}
          >
            About
          </a>
          <a
            className={`text-lg transition-colors duration-600 ease-in-out hover:text-resoPink  ${
              isTop ? "" : "text-black hover:text-resoPink"
            } ${activeHash === "#submit" ? "border-b-2 border-resoPink" : ""}`}
            href="#submit"
            onClick={handleLinkClick("submit")}
          >
            Submit
          </a>
        </div>
      </div>
    </div>
  );
}
