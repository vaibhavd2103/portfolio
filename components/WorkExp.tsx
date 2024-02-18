import React from "react";

function WorkExp() {
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
    <div className="">
      <div className="w-full flex flex-col bg-primary-dark p-10 pb-40">
        <h3 className="text-2xl font-semibold text-center">
          My work experience
        </h3>
        <p className="text-center">
          I have a total of 2.5+ years of experience as a software developer
          including my internships and full time jobs.
        </p>
      </div>
      <div className="-mt-28 grid grid-cols-1 px-10 gap-4 md:grid-cols-3">
        {workExp.map((item) => {
          return (
            <div
              className="p-5 bg-primary rounded-lg cursor-pointer hover:bg-gray-dark transition-all shadow-xl"
              key={item.id}
            >
              <p className="font-semibold text-lg">{item.company}</p>
              <p className="text-[#fff8]">{item.jobRole}</p>
              <p className="text-[#fff8]">
                Duration{" - "}
                <span className="font-semibold text-[#fff]">
                  {item.duration} months
                </span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WorkExp;
