import Education from "@/components/Education";
import Hobbies from "@/components/Hobbies";
import WorkExp from "@/components/WorkExp";
import useWindowDimensions from "@/utils/useWindowDimensions";
import Image from "next/image";
import React from "react";

function Home() {
  // const { height, width } = useWindowDimensions();
  return (
    <div className="bg-dark h-full w-screen">
      <div className="flex items-center flex-col md:flex-row md:items-start p-16 w-full gap-10">
        <Image
          src={require("@/assets/Profile.jpeg")}
          alt="profile_photo"
          className="w-72 h-72 rounded-full object-cover"
        />
        <div className="flex flex-col gap-4">
          <p className="text-center md:text-left text-2xl">
            {`Hey there! I'm`}{" "}
            <span className="font-bold text-5xl">Vaibhav Dange</span>,
          </p>
          <p className="text-center md:text-left text-[#fff8]">
            A versatile software developer with a passion for innovation and a
            diverse skill set. With 2 years of experience in web development,
            mobile applications, and database management, I excel in crafting
            robust solutions that bridge the gap between different disciplines.
            Whether collaborating with designers to enhance user experience or
            embracing agile methodologies to deliver projects efficiently, I
            thrive in dynamic environments. Outside of coding, I enjoy exploring
            new hobbies like hardware projects and data science challenges,
            driven by my belief in the power of interdisciplinary knowledge.{" "}
            {`I'm deeply committed to leveraging technology for positive change!`}
          </p>
        </div>
      </div>
      <Hobbies />
      <WorkExp />
      <Education />
    </div>
  );
}

export default Home;
