import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiBootstrap,
  SiRedux,
} from "react-icons/si";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "BootStrap", icon: <SiBootstrap className="text-[#7509F6]" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-400" /> },
    { name: "Redux", icon: <SiRedux className="text-[#593D88]" /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
    { name: "Mongoose", icon: <SiMongoose className="text-red-400" /> },
  ];

  return (
    <div className="p-4 bg-gray-900 text-white">
      <h2 className="text-2xl md:text-4xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Skills & Expertise
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-12">
        {/* Frontend Section */}
        <div>
          <h3 className="text-3xl font-semibold mb-4 text-gray-300">
            Frontend
          </h3>
          <ul className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {frontendSkills.map((skill, index) => (
              <li
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <span className="text-3xl">{skill.icon}</span>
                <span className="text-lg font-medium text-gray-200">
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Backend Section */}
        <div>
          <h3 className="text-3xl font-semibold mb-4 text-gray-300">Backend</h3>
          <ul className="grid lg:grid-cols-3  md:grid-cols-2 gap-6">
            {backendSkills.map((skill, index) => (
              <li
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <span className="text-3xl">{skill.icon}</span>
                <span className="text-lg font-medium text-gray-200">
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
