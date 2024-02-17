import Image from "next/image";
import React from "react";

function Home() {
  const workExp = [
    {
      id: "1",
      company: "Serri Tech Solutions",
      jobRole: "Software Developer",
      duration: 7,
      startDate: new Date("10/7/2023"),
    },
    {
      id: "2",
      company: "DWebBox",
      jobRole: "Frontend Developer",
      duration: 9,
      startDate: new Date("10/7/2023"),
    },
    {
      id: "3",
      company: "Oviyum Technologies",
      jobRole: "Frontend Developer and DevOps Engineer",
      duration: 12,
      startDate: new Date("10/7/2023"),
    },
    {
      id: "4",
      company: "QuadB",
      jobRole: "Frontend Developer",
      duration: 14,
      startDate: new Date("10/7/2023"),
    },
    {
      id: "5",
      company: "ShellCode Solutions",
      jobRole: "Frontend Developer",
      duration: 1,
      startDate: new Date("10/7/2023"),
    },
  ];

  return (
    <div className="bg-dark h-screen w-screen">
      <div className="flex p-16 w-full gap-10">
        <Image
          src={require("@/assets/Profile.jpeg")}
          alt="profile_photo"
          className="w-72 h-72 rounded-full object-cover"
        />
        <div className="flex flex-col gap-4">
          <p className="text-center text-2xl">
            {`Hello, I'm`}{" "}
            <span className="font-bold text-5xl">Vaibhav Dange</span>,
          </p>
          <p className="text-center">
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
      <div className="w-full flex flex-col bg-primary-dark p-10 pb-40">
        <h3 className="text-2xl font-semibold text-center">
          My work experience
        </h3>
        <p className="text-center">
          I have a total of 2+ years of experience as a software developer
          including my internships and full time jobs.
        </p>
      </div>
      <div className="-mt-24 grid grid-cols-3 px-10 gap-4">
        {workExp.map((item) => {
          return (
            <div
              className="p-5 bg-primary rounded-lg cursor-pointer hover:bg-gray-dark transition-all shadow-xl"
              key={item.id}
            >
              <p className="font-semibold text-lg">{item.company}</p>
              <p className="">{item.jobRole}</p>
              <p className="">{item.duration} months</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
