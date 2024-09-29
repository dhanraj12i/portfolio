"use client";

import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, useAnimation } from "framer-motion";

type SocialsProps = {
  containerStyles: string;
  iconsStyles?: string;
};

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconsStyles }) => {
  const { theme } = useTheme();
  const [centerX, setCenterX] = useState(0); // State to track the dynamic center X
  const controlsArray = [useAnimation(), useAnimation(), useAnimation()]; // Create animation controls for each icon
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
      path: "https://www.instagram.com/idhanraj?igsh=bHlwdThja2R1Z3Rj",
      name: <RiInstagramFill />,
      desc: "Instagram",
    },
  ];

  // Calculate the center of the screen
  useEffect(() => {
    const calculateCenterX = () => {
      const containerWidth = window.innerWidth;
      const iconWidth = 10; // Adjust this based on your actual icon size
      const calculatedCenterX = (containerWidth - iconWidth) / 2;
      setCenterX(calculatedCenterX);
    };

    calculateCenterX();
    window.addEventListener("resize", calculateCenterX);

    return () => {
      window.removeEventListener("resize", calculateCenterX);
    };
  }, []);

  useEffect(() => {
    centerX > 0 &&
      icons.forEach((_, index) => {
        console.log(centerX);
        setTimeout(async () => {
          await controlsArray[index].start({
            y: [-500, 0, -250, 0, -70, 0],
            x: centerX,
            rotate: -720,
            transition: {
              duration: 3 + index,
              ease: "easeInOut",
            },
          });

          await controlsArray[index].start({
            x: [centerX, 500, 400, 300, 200, 100, 0],
            rotate: -1440,
            transition: {
              type: "spring",
              stiffness: 10,
              damping: 4 + index,
              ease: "easeOut",
            },
          });
        }, index * 1000); // 1 second delay for each icon
      });
  }, [centerX, controlsArray, icons]); // Ensure controlsArray is included in the dependency array

  return (
    <div
      className={`${containerStyles}`}
      style={{
        display: "flex",
        gap: "50px",
      }}
    >
      {icons.map((icon, index) => (
        <div key={index + icon.desc}>
          <HoverCard onOpenChange={createScript}>
            <HoverCardTrigger asChild>
              <motion.div
                animate={controlsArray[index]} // Individual control per icon
                initial={{ x: centerX, y: -500 }} // Start from top-center
                style={{
                  position: "absolute",
                  overflow: "hidden",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <Link
                  href={icon.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={icon.desc}
                >
                  <div className={`${iconsStyles}`}>{icon.name}</div>
                </Link>
              </motion.div>
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
                    aria-label="Visit Dhanraj Patil's LinkedIn profile"
                  ></a>
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
