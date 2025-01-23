import Marquee from "react-fast-marquee";
import { DiMongodb } from "react-icons/di";
import { FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { GrHtml5, GrReactjs } from "react-icons/gr";
import { SiExpress, SiRedux } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

const TechStackCard = () => {
  return (
    <div className="bg-[#1A1A1A] rounded-xl p-3">
      <h1 className="text-center text-2xl font-bold">Tech Stack</h1>
      <p className="divider w-[50%] mx-auto"></p>
      <Marquee gradient={false} speed={33}>
        <div className="flex justify-center items-center gap-8 p-5">
          <span className=" text-orange-400">
            Html <GrHtml5 className="size-9" />
          </span>
          <span className="text-blue-600">
            CSS <FaCss3Alt className="size-9" />
          </span>
          <span className="text-yellow-200">
            J S<TbBrandJavascript className="size-9" />
          </span>
          <p className="text-blue-700">
            React
            <GrReactjs className="size-9" />
          </p>
          <span className="text-[#BA8FFF]">
            Redux
            <SiRedux className="size-9" />
          </span>
          <span className="text-green-400">
            MongoDb
            <DiMongodb className="size-9" />
          </span>
          <span>
            Express
            <SiExpress className="size-9" />
          </span>
          <span className="text-green-300">
            Node js
            <FaNodeJs className="size-9" />
          </span>
          <span></span>
        </div>
      </Marquee>
    </div>
  );
};

export default TechStackCard;
