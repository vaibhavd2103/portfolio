"use client";

import { motion } from "framer-motion";
import { FaCode, FaMusic, FaCamera } from "react-icons/fa";
import { GiBasketballBall } from "react-icons/gi";

const hobbies = [
  {
    id: "1",
    icon: <FaCode size={28} />,
    title: "Software Development",
    description:
      "Coding is my creative outlet. I love building SaaS products and exploring new technologies, especially at the intersection of design and engineering.",
    color: "#DA0037",
  },
  {
    id: "2",
    icon: <GiBasketballBall size={28} />,
    title: "Sports & Fitness",
    description:
      "Basketball, football, badminton, swimming — I stay active. E-sports too: Valorant and CS:GO keep the competitive edge sharp.",
    color: "#22C55E",
  },
  {
    id: "3",
    icon: <FaMusic size={28} />,
    title: "Music",
    description:
      "Guitar, harmonium, casio, congo — I play and sing. Music is how I recharge. A few covers posted online too.",
    color: "#3B82F6",
  },
  {
    id: "4",
    icon: <FaCamera size={28} />,
    title: "Photography",
    description:
      "Mobile photography on the go. I enjoy capturing candid moments and experimenting with lighting and composition.",
    color: "#A855F7",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hobbies() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-secondary text-sm font-semibold tracking-widest uppercase mb-3">
            Beyond the code
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
            Things I love
          </h2>
          <p className="mt-4 text-white/40 max-w-md mx-auto text-sm leading-relaxed">
            Staying multi-disciplinary keeps me creative and grounded.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {hobbies.map((h) => (
            <motion.div
              key={h.id}
              variants={item}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass rounded-2xl p-6 flex flex-col gap-4 cursor-default group transition-all duration-300 hover:shadow-xl"
              style={{ "--accent": h.color } as React.CSSProperties}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                style={{ background: `${h.color}18`, color: h.color }}
              >
                {h.icon}
              </div>
              <h3 className="font-heading font-bold text-base text-white">{h.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{h.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
