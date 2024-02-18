import React from "react";

function Hobbies() {
  const hobbies = [
    {
      id: "1",
      title: "Software Development",
      description:
        "I love coding and especially software development because it provides a vast area of creativity and help to the society. SAAS excites me and I seek opportunities in the same.",
    },
    {
      id: "2",
      title: "Sports and fitness",
      description:
        "Sports is something which I really enjoy. I love to play basketball, football, badminton and prefer swimming as well. Also e-sports titles like Valorant, CS-GO are also some areas I am good at :)",
    },
    {
      id: "3",
      title: "Singing and Dancing",
      description:
        "It isn't just to mention, I do play guitar, harmonium, casio and congo. Also I love to sing in the free time and have posted few covers as well.",
    },
  ];
  return (
    <div className="p-10 bg-gray-dark">
      <h3 className="text-2xl font-semibold text-center">Things I love!</h3>
      <p className="text-center">
        These are some of the things which I can end my day with. Also they help
        me to be multi-disciplinary.
      </p>
      <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-3">
        {hobbies.map((item) => {
          return (
            <div
              key={item.id}
              className="p-6 bg-dark rounded-lg flex flex-col gap-4 items-center cursor-default hover:shadow-xl hover:scale-105 transition-all"
            >
              <p className="text-xl font-bold text-center">{item.title}</p>
              <p className="text-[#fff8] text-center">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hobbies;
