"use client";
import { ReactNode } from "react";
import CountUp from "react-countup";
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
  console.log("end", endCountNum);
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-4xl leading-none font-bold text-primary">
          <CountUp
            end={endCountNum}
            delay={2}
            decimals={1}
            decimal={"."}
            enableScrollSpy={true}
            scrollSpyDelay={1000}
          />
          {endCountText}
        </div>
        <div className="max-w-[70px] leading-none text-[15px] font-medium text-black">
          {badgeText}
        </div>
      </div>
    </div>
  );
};

export default Badge;
