"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "My Projects" },
];

type NavProps = {
  containerStyles: string;
  linkStyles?: string;
  underLineStyles?: string;
};

const Nav: React.FC<NavProps> = ({
  containerStyles,
  linkStyles,
  underLineStyles,
}) => {
  const path = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links?.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={`${index}`}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
              <motion.span
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                transition={{ type: "tween" }}
                layoutId="underline"
                className={`${underLineStyles}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
