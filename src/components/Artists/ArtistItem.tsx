interface ArtistItemProps {
  image: string;
  name: string;
  social0?: string;
  social0icon?: string;
  social1?: string;
  social1icon?: string;
  social2?: string;
  social2icon?: string;
}

export const ArtistItem: React.FC<ArtistItemProps> = ({
  image,
  name,
  social0,
  social0icon,
  social1,
  social1icon,
  social2,
  social2icon,
}) => {
  return (
    <div className="artist-item-container">
      <div className="flex flex-col items-center mt-16">
        <img
          src={image}
          className="w-60 h-60 border-4 border-white rounded-md"
        />
        <div className="name-socials-container flex justify-between w-full mt-4">
          <h3 className="text-lg font-bold">{name}</h3>
          <div className="flex">
            <a href={social0}>
              <img src={social0icon} className="w-5 h-5" />
            </a>
            <a href={social1}>
              <img src={social1icon} className="w-5 h-5" />
            </a>
            <a href={social2}>
              <img src={social2icon} className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
