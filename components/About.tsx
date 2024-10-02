import React from "react";
// import DevImg from "./DevImg";
// import Image from "next/image";
// import {
//   User2,
//   MailIcon,
//   HomeIcon,
//   PhoneCall,
//   GraduationCap,
//   Calendar,
//   Briefcase,
// } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

// const infoData = [
//   {
//     icon: <User2 size={20} />,
//     text: "Dhanraj Patil",
//   },
//   {
//     icon: <PhoneCall size={20} />,
//     text: "Dhanraj Patil",
//   },
//   {
//     icon: <MailIcon size={20} />,
//     text: "Dhanraj Patil",
//   },
//   {
//     icon: <Calendar size={20} />,
//     text: "Dhanraj Patil",
//   },
//   {
//     icon: <GraduationCap size={20} />,
//     text: "BE",
//   },
//   {
//     icon: <HomeIcon size={20} />,
//     text: "Dhanraj Patil",
//   },
// ];

const About = () => {
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl-mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex">
          <div className="flex-1">
            <Tabs defaultValue="pDetails" orientation={"horizontal"}>
              <TabsList>
                <TabsTrigger value="pDetails">Personal Info</TabsTrigger>
                <TabsTrigger value="workExp">work Info</TabsTrigger>
                <TabsTrigger value="pDetails">Personal Info</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
