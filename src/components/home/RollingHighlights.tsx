import Marquee from "react-fast-marquee";
import { DiCss3, DiHtml5 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiDaisyui, SiTailwindcss, SiTypescript } from "react-icons/si";

const RollingHighlights = () => {
  return (
    <div className="primary-gradient md:col-span-2 p-5 rounded-xl shadow-2xl" data-aos="zoom-in-left">
      <Marquee gradient={false} speed={70}>
        <span className="text-xl mx-4 text-slate-400">
          Welcome! Explore my journey as a developer 🙋‍♂️!
        </span>
        <div className="flex items-center text-slate-400 font-semibold gap-4">
          <span className="text-xl">I created this website with these technologies:</span>
          <div className="flex items-center gap-2 text-orange-500">
            <DiHtml5 />
            <span>HTML</span>
          </div>
          <div className="flex items-center gap-2 text-blue-500">
            <DiCss3 />
            <span>CSS</span>
          </div>
          <div className="flex items-center gap-2 text-blue-400">
            <SiTypescript />
            <span>TypeScript</span>
          </div>
          <div className="flex items-center gap-2 text-cyan-400">
            <FaReact />
            <span>React</span>
          </div>
          <div className="flex items-center gap-2 text-teal-500">
            <SiTailwindcss />
            <span>Tailwind</span>
          </div>
          <div className="flex items-center gap-2 text-purple-500">
            <SiDaisyui />
            <span>DaisyUI</span>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default RollingHighlights;
