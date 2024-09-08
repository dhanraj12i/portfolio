"use client";
import Link from "next/link";
import { Download, Send } from "lucide-react";

import { RiArrowDownSLine } from "react-icons/ri";
import { Button } from "./ui/button";
import Socials from "./Socials";
import DevImg from "./DevImg";

const Hero = () => {
  return (
    <section className="py-12 xl:py-12 h-[94vh] xl:pt-18 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 ml-1 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="heading-h1 mb-4">Hello, I am Dhanraj Patil</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Brief description with insights into myself, my vocation journey
              and what I engage in professionally.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button variant={"secondary"} className="gap-x-2">
                Download CV <Download size={18} />
              </Button>
            </div>
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden xl:flex relative">
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute-top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape1_dark dark:bg-hero_shape1_dark w-[510px] h-[462px] bg-no-repeat absolute bg-bottom flex justify-center items-center -left-4"
              imgSrc="/hero/homePic.png"
            />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
