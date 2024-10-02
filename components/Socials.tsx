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
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { motion, useAnimation } from "framer-motion";

type SocialsProps = {
  containerStyles: string;
  iconsStyles?: string;
  isAnimate?: boolean;
};

const Socials: React.FC<SocialsProps> = ({
  containerStyles,
  iconsStyles,
  isAnimate = false,
}) => {
  const { theme } = useTheme();
  const [centerX, setCenterX] = useState(0); // State to track the dynamic center X
  const instaAnimate = useAnimation();
  const linkedInAnimate = useAnimation();
  const gitHubAnimate = useAnimation();

  const createScript = () => {
    const script = document.createElement("script");
    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    document.head.appendChild(script);
  };

  const icons = useMemo(
    () => [
      {
        path: "https://www.linkedin.com/in/dhanrajpatil1220/",
        name: <RiLinkedinBoxFill />,
        desc: "LinkedIn",
        control: linkedInAnimate,
      },
      {
        path: "https://github.com/dhanraj12i",
        name: <RiGithubFill />,
        desc: "GitHub",
        control: gitHubAnimate,
      },
      {
        path: "https://www.instagram.com/idhanraj?igsh=bHlwdThja2R1Z3Rj",
        name: <RiInstagramFill />,
        desc: "Instagram",
        control: instaAnimate,
      },
    ],
    [gitHubAnimate, instaAnimate, linkedInAnimate] // Empty array ensures icons are only initialized once
  );

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
    const animateIcons = () => {
      if (centerX > 0) {
        icons.forEach((item, index) => {
          setTimeout(async () => {
            // First animation sequence
            // await item.control.start({
            //   y: [-500, 0, -250, 0, -70, 0],
            //   x: centerX,
            //   rotate: -720,
            //   transition: {
            //     duration: 3 + index,
            //     ease: "easeInOut",
            //   },
            // });

            await item.control.start({
              x: [200, 100, 50, 0],
              opacity: [0, 0.05, 0.1, 0.2, 0.8, 1],
              rotateZ: -1440,
              transition: {
                type: "just",
                stiffness: 2,
                damping: 4,
                ease: "easeIn",
              },
            });
          }, index * 1000);
        });
      }
    };

    isAnimate && animateIcons();
  }, [centerX, icons, isAnimate]);

  return (
    <>
      {centerX && (
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
                    animate={icon.control}
                    initial={{
                      ...(isAnimate ? { x: centerX, y: 0 } : { x: 0, y: 0 }),
                      opacity: 0,
                    }}
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
      )}
    </>
  );
};

export default Socials;
