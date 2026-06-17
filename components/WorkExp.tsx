import React from "react";

function WorkExp() {
  const workExp = [
    {
      id: "1",
      company: "Serri Tech Solutions",
      jobRole: "Software Developer",
      duration: "7 months",
      link: "https://serri.club/",
    },
    {
      id: "2",
      company: "DWebBox",
      jobRole: "Frontend Developer",
      duration: "9 months",
      link: "https://dwebbox.com/#home",
    },
    {
      id: "3",
      company: "Oviyum Technologies",
      jobRole: "Frontend Developer & DevOps Engineer",
      duration: "12 months",
      link: "https://oviyum.com/",
    },
    {
      id: "4",
      company: "QuadB",
      jobRole: "Frontend Developer",
      duration: "14 months",
      link: "https://www.quadb.in/",
    },
    {
      id: "5",
      company: "ShellCode Solutions",
      jobRole: "Frontend Developer",
      duration: "1 month",
      link: "https://www.shellcode.co.in/index.html",
    },
  ];
  return (
    <div className="">
      <div className="w-full flex flex-col bg-primary-dark p-10 pb-40">
        <h3 className="text-2xl font-semibold text-center">
          Companies I have worked with
        </h3>
        <p className="text-center text-[#ffffff99] mt-1">
          2.5+ years of experience as a software developer across internships
          and full-time roles.
        </p>
      </div>
      <div className="-mt-28 grid grid-cols-1 px-10 gap-4 md:grid-cols-3">
        {workExp.map((item) => (
          <div
            className="p-5 bg-primary rounded-lg hover:scale-105 hover:bg-[#000] hover:shadow-secondary transition-all shadow-xl flex flex-col gap-1"
            key={item.id}
          >
            <p className="font-semibold text-lg">{item.company}</p>
            <p className="text-[#fff8]">{item.jobRole}</p>
            <p className="text-[#fff8]">
              Duration{" — "}
              <span className="font-semibold text-white">{item.duration}</span>
            </p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#fff5] underline hover:text-white transition-colors mt-1"
            >
              Visit company →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExp;
