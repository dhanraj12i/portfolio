"use client";
import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiInstagramFill,
} from "react-icons/ri";
import Link from "next/link";

type SocialsProps = {
  containerStyles: string;
  iconsStyles?: string;
};

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconsStyles }) => {
  const icons = [
    {
      path: "/linkedin",
      name: <RiLinkedinBoxFill />,
    },
    {
      path: "/github",
      name: <RiGithubFill />,
    },
    {
      path: "/instagram",
      name: <RiInstagramFill />,
    },
  ];
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon) => (
        <Link href={icon.path} key={icon.path}>
          <div>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
