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
import { ReactElement } from "react";
import { useTheme } from "next-themes";

type SocialsProps = {
  containerStyles: string;
  iconsStyles?: string;
};

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconsStyles }) => {
  const { theme } = useTheme();

  const createScript = () => {
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    document.head.appendChild(script);
  };
  const icons = [
    {
      path: "https://www.linkedin.com/in/dhanrajpatil1220/",
      name: <RiLinkedinBoxFill />,
      desc: "LinkedIn",
    },
    {
      path: "https://github.com/dhanraj12i",
      name: <RiGithubFill />,
      desc: "GitHub",
    },
    {
      path: "/instagram",
      name: <RiInstagramFill />,
      desc: "Instagram",
    },
  ];

  return (
    <div className={`${containerStyles}`}>
      {icons.map(
        (
          icon: { path: string; name: ReactElement; desc: string },
          index: number
        ) => (
          <div key={index + icon.desc}>
            <HoverCard onOpenChange={createScript}>
              <HoverCardTrigger asChild>
                <Link
                  href={icon.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={icon.desc}
                >
                  <div className={`${iconsStyles}`}>{icon.name}</div>
                </Link>
              </HoverCardTrigger>
              {icon.desc === "LinkedIn" && (
                <HoverCardContent className="w-100">
                  <div
                    className="badge-base LI-profile-badge"
                    data-locale="en_US"
                    data-size="large"
                    data-theme={theme === "light" ? "light" : "dark"}
                    data-type="HORIZONTAL"
                    data-vanity="dhanrajpatil1220"
                    data-version="v1"
                  >
                    <a
                      className="badge-base__link LI-simple-link"
                      href="https://in.linkedin.com/in/dhanrajpatil1220?trk=profile-badge"
                    ></a>
                  </div>
                </HoverCardContent>
              )}
            </HoverCard>
          </div>
        )
      )}
    </div>
  );
};

export default Socials;
