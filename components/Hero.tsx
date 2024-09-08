"use client";
import Link from "next/link";
// import Link from "next/link";
// import { Button } from "./ui/button";
import {
  //  Download,
  Send,
} from "lucide-react";
// import DevImg from "./DevImg";
// import Socials from "./Socials";
// import Badge from "./Badge";

import {
  // RiBriefcase4Fill,
  // RiTeamFill,
  // RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 ml-1 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="heading-h1 mb-4">Hello, I am Dhanraj Patil</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Brief description with insights into myselft, my vocation journey
              and what I engage in professionally.
            </p>
            <div>
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden xl:flex relative">image</div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
