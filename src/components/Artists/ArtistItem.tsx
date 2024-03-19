import "./ArtistItem.css";

interface ArtistItemProps {
  image: string;
  spotifyLink: string;
  name: string;
  social0?: string;
  social0icon?: string;
  social1?: string;
  social1icon?: string;
}

export const ArtistItem: React.FC<ArtistItemProps> = ({
  image,
  spotifyLink,
  name,
  social0,
  social0icon,
  social1,
  social1icon,
}) => {
  return (
    <div className="art-item-container bg-white mt-20 rounded-lg transform transition duration-500 ease-in-out hover:-translate-y-7">
      <div className="art-item-subcontainer flex flex-col items-center">
        <a href={spotifyLink} target="_blank">
          <img
            src={image}
            className="w-60 h-60 border-4 border-white rounded-md object-cover "
          />
        </a>
        <div className="flex flex-row justify-between items-center w-full ">
          <h3 className="mt-5 text-lg font-bold text-black ml-5 mb-5">
            {name}
          </h3>
          <div className="flex mt-2.5 mb-2">
            <a href={social0} target="_blank">
              <img src={social0icon} className="w-8 h-8 object-cover mr-3" />
            </a>
            {social1 && (
              <a href={social1}>
                <img
                  src={social1icon}
                  className={`w-8 h-8 object-cover mr-3`}
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
