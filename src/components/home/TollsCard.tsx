import { VscVscode } from "react-icons/vsc"; // VS Code Icon
import { SiFigma, SiPostman, SiMongodb, SiOpenai } from "react-icons/si"; // Figma, Postman, and MongoDB Compass Icons
import { GiSpermWhale } from "react-icons/gi";

const ToolsCard = () => {
  return (
    <div className="primary-gradient p-6 rounded-lg shadow-lg"  data-aos="zoom-in">
      <h1 className="text-center text-2xl font-bold text-white mb-4">Tools I Use</h1>
      <div className="divider w-[70%] mx-auto mb-6"></div>
      <div className="grid grid-cols-2 sm:grid-cols-4 justify-items-center items-center gap-y-6">
        {/* VS Code */}
        <span className="flex flex-col justify-center items-center text-white">
          <VscVscode className="text-5xl text-[#007ACC]" />
          <p className="mt-2 text-sm font-semibold">VS Code</p>
        </span>
        {/* Figma */}
        <span className="flex flex-col justify-center items-center text-white">
          <SiFigma className="text-5xl text-[#F24E1E]" />
          <p className="mt-2 text-sm font-semibold">Figma</p>
        </span>
        {/* Postman */}
        <span className="flex flex-col justify-center items-center text-white">
          <SiPostman className="text-5xl text-[#FF6C37]" />
          <p className="mt-2 text-sm font-semibold">Postman</p>
        </span>
        {/* MongoDB Compass */}
        <span className="flex flex-col justify-center items-center text-white">
          <SiMongodb className="text-5xl text-[#47A248]" />
          <p className="mt-2 text-sm font-semibold">MongoDB Compass</p>
        </span>
        {/* MongoDB Compass */}
        <span className="flex flex-col justify-center items-center text-white">
          <GiSpermWhale  className="text-5xl text-[#2a48ac]" />
          <p className="mt-2 text-sm font-semibold">DeepSeek</p>
        </span>
        {/* MongoDB Compass */}
        <span className="flex flex-col justify-center items-center text-white">
          <SiOpenai className="text-5xl" />
          <p className="mt-2 text-sm font-semibold">chat Gpt</p>
        </span>
      </div>
    </div>
  );
};

export default ToolsCard;
