"use client";
import { ReactNode } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

interface BadgeProps {
  containerStyles: string;
  icon: ReactNode;
  badgeText: string;
  endCountText: string;
  endCountNum: number;
}

const Badge: React.FC<BadgeProps> = ({
  containerStyles,
  icon,
  endCountNum,
  endCountText,
  badgeText,
}) => {
  return (
    <motion.div
      initial={{ x: 0, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className={`badge gradient-border ${containerStyles}`}
    >
      {/* text-foreground text-[22px] hover:text-primary transition-all */}
      <div className="text-3xl light:text-primary dark:text-white hover:text-primary transition-all">
        {icon}
      </div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-primary">
          <CountUp
            end={endCountNum}
            delay={1}
            decimals={1}
            decimal={"."}
            enableScrollSpy={true}
            scrollSpyDelay={1000}
          />
          {endCountText}
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-medium text-black dark:text-white">
          {badgeText}
        </div>
      </div>
    </motion.div>
  );
};

export default Badge;
