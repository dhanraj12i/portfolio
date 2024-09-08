import Image from "next/image";

type SocialsProps = {
  containerStyles: string;
  imgSrc: string;
};

const DevImg: React.FC<SocialsProps> = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt="Profile Pic" />
    </div>
  );
};

export default DevImg;
