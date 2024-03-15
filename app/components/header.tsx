import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <header className="navbar bg-white">
      <div className="navbar-start">
        <img src="..." />
      </div>

      <div className="navbar-center">
        <div className="px-3 text-black">
          <Link href=" ">Artists</Link>
        </div>
        <div className="px-3 text-black">
          <Link href=" ">About</Link>
        </div>
        <div className="px-3 text-black">
          <Link href=" ">Submit</Link>
        </div>
      </div>

      <div className="navbar-end"></div>
    </header>
  );
};
