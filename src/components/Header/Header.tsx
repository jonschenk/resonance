import { useState, useEffect } from "react";

export default function Header() {
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

  return (
    <>
      <div
        className={`p-3.5 flex justify-between items-center fixed top-0 w-full z-1000 transition-colors duration-200 ease-in-out ${
          isTop ? "bg-transparent" : "bg-white"
        }`}
      >
        <a href="#home">
          <img
            src="https://www.logolynx.com/images/logolynx/4b/4b9d3c5c3f1b1f0e2e4d9b0b4b6a3c6b.png"
            className="ml-4 hidden sm:block absolute left-4 top-1/2 transform -translate-y-1/2"
          />
        </a>

        <div className="flex-1 flex justify-center space-x-24 text-white font-inter font-bold">
          <a
            className={`transition-colors duration-200 ease-in-out hover:text-resoPink ${
              isTop ? "" : "text-black hover:text-resoPink"
            } ${activeHash === "#artists" ? "border-b-2 border-resoPink" : ""}`}
            href="#artists"
          >
            Artists
          </a>
          <a
            className={`transition-colors duration-200 ease-in-out hover:text-resoPink  ${
              isTop ? "" : "text-black hover:text-resoPink"
            } ${activeHash === "#about" ? "border-b-2 border-resoPink" : ""}`}
            href="#about"
          >
            About
          </a>
          <a
            className={`transition-colors duration-200 ease-in-out hover:text-resoPink  ${
              isTop ? "" : "text-black hover:text-resoPink"
            } ${activeHash === "#submit" ? "border-b-2 border-resoPink" : ""}`}
            href="#submit"
          >
            Submit
          </a>
        </div>
      </div>
    </>
  );
}
