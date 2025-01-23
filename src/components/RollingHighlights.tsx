import Marquee from "react-fast-marquee";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiTypescript } from "react-icons/si";


const RollingHighlights = () => {
    return (
        <div className="primary-gradient md:col-span-2 p-5 rounded-xl shadow-2xl">
        <Marquee gradient={false} speed={70}>
          <span className="text-xl mx-4 text-slate-400">
            !----Welcome to my Portfolio website 🙋‍♂️-----!
          </span>
          <div className="flex">
            <span className="text-xl mx-4 text-green-500 flex items-center">
              <DiMongodb />
              <span>MongoDB</span>
            </span>
            <span className="text-xl mx-4 flex items-center">
              <SiExpress />
              <span>press</span>
            </span>
            <span className="text-xl mx-4 text-blue-400 flex items-center">
              <FaReact />
              <span>React</span>
            </span>
            <span className="text-xl mx-4 text-green-300 flex items-center">
              <span>Node</span>
              <FaNodeJs />
            </span>
            <span className="text-xl mx-4 text-blue-300 flex items-center gap-1">
              <SiTypescript />
              <span>TypeScript</span>
            </span>
          </div>
        </Marquee>
      </div>
    );
};

export default RollingHighlights;