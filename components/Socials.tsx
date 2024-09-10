"use client";

import {
  RiLinkedinBoxFill,
  RiGithubFill,
  RiInstagramFill,
} from "react-icons/ri";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
// import useLinkedInData from "@/hooks/useLinkedInData";

interface LinkedInData {
  img: string;
  name: string;
  title: string;
  info: string;
}
type SocialsProps = {
  containerStyles: string;
  iconsStyles?: string;
};

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconsStyles }) => {
  // const linkedInData = useLinkedInData();
  const linkedInData = {} as LinkedInData;
  console.log(linkedInData);

  const fetchData = () => {
    const data = fetch(
      " https://api.linkedin.com/v1/people/id=dhanrajpatil1220"
    );
    console.log(data);
    return data;
  };

  fetchData();
  const icons = [
    {
      path: "https://www.linkedin.com/in/dhanrajpatil1220/",
      name: <RiLinkedinBoxFill />,
      Desc: "LinkedIn",
    },
    {
      path: "https://github.com/dhanraj12i",
      name: <RiGithubFill />,
      Desc: "GitHub",
    },
    {
      path: "/instagram",
      name: <RiInstagramFill />,
      Desc: "Instagram",
    },
  ];

  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon: any, index: number) => (
        <div key={index}>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Link
                href={icon.path}
                target="_blank"
                rel="noopener noreferrer"
                key={icon.Desc}
              >
                <div className={`${iconsStyles}`}>{icon.name}</div>
              </Link>
            </HoverCardTrigger>
            {icon.Desc === "LinkedIn" && (
              <HoverCardContent className="w-80">
                <div className="flex items-center space-x-4">
                  {/* Display LinkedIn profile image */}
                  <img
                    src={linkedInData?.img}
                    alt="Profile"
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <h4 className="text-sm font-semibold">
                      {linkedInData?.name}
                    </h4>
                    <p className="text-sm">{linkedInData?.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {linkedInData?.info}
                    </p>
                  </div>
                </div>
              </HoverCardContent>
            )}
          </HoverCard>
        </div>
      ))}
    </div>
  );
};

export default Socials;
