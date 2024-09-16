import Image from "next/image";

type SocialsProps = {
  containerStyles: string;
  imgSrc: string;
};

const DevImg: React.FC<SocialsProps> = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image
        src={imgSrc}
        priority
        alt="Profile Pic"
        width="300"
        height="300"
        className="absolute top-10 right-[125px]"
      />
    </div>
  );
};

export default DevImg;
