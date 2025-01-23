import React from "react";
import Marquee from "react-fast-marquee";
import { DiMongodb } from "react-icons/di";
import { FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { GrHtml5, GrReactjs } from "react-icons/gr";
import { SiExpress, SiRedux, SiTypescript } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

const TechStackCard: React.FC = () => {
  const techStack = [
    { name: "HTML", icon: <GrHtml5 />, color: "text-orange-400" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-600" },
    { name: "JavaScript", icon: <TbBrandJavascript />, color: "text-yellow-200" },
    { name: "React", icon: <GrReactjs />, color: "text-blue-500" },
    { name: "Redux", icon: <SiRedux />, color: "text-purple-400" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
    { name: "MongoDB", icon: <DiMongodb />, color: "text-green-400" },
    { name: "Express", icon: <SiExpress />, color: "text-gray-200" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-300" },
  ];

  return (
    <div className="bg-[#1A1A1A] rounded-xl p-5 shadow-lg lg:col-span-2" data-aos="zoom-in">
      <h1 className="text-center text-3xl font-bold text-white mb-4">
        Tech Stack
      </h1>
      <div className="divider w-[70%] mx-auto"></div>
      <Marquee gradient={false} speed={40} className="mt-5">
        <div className="flex justify-center items-center gap-10 p-5">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${tech.color} text-xl`}
            >
              <div className="text-4xl">{tech.icon}</div>
              <span className="mt-2">{tech.name}</span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TechStackCard;
