import Marquee from "react-fast-marquee";
import profile from "../assets/main-avtar.jpg";
import { BsBoxArrowInDownRight } from "react-icons/bs";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiTypescript } from "react-icons/si";

const Home = () => {
  return (
    <div className="text-white min-h-screen grid grid-cols-1 md:grid-cols-2 gap-3 p-8 lg:px-20 bg-black">
      {/* Profile Section */}
      <div className=" w-full h-full flex items-center justify-center shadow-lg ">
        <div className="card card-side primary-gradient rounded-2xl shadow-xl p-2 flex flex-col justify-center items-center lg:flex-row ">
          <div className="w-[300px] flex items-center p-6 pt-2 lg:pl-3 lg:p-0">
            <img
              className="w-full aspect-square object-cover  rounded-l-3xl shadow-xl  filter brightness-75 backdrop-contrast-125"
              src={profile}
              alt="profile"
            />
          </div>
          <div className="card-body">
            <h2 className="card-title">
              Hi, I am Akash 👋 A MERN Stack Developer
            </h2>
            <p className="text-slate-400">
              with a passion for building dynamic and user-friendly web
              applications.
            </p>
            <div className="card-actions justify-end">
              <button className="lg:mt-4">
                <BsBoxArrowInDownRight className="size-10" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Credentials Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
        {/* Marquee */}
        <div className="primary-gradient md:col-span-2 p-5 rounded-xl shadow-2xl">
          <Marquee gradient={false} speed={70}>
            <span className="text-xl mx-4 text-slate-400">
             !----Welcome to my Portfolio website👋-----!
            </span>
            <div className="flex">
              <span className="text-xl mx-4 text-green-500 flex items-center">
                <DiMongodb /><span>MongoDB</span>
              </span>
              <span className="text-xl mx-4 flex items-center">
                <SiExpress /><span>press</span>
              </span>
              <span className="text-xl mx-4 text-blue-400 flex items-center">
                <FaReact /><span>React</span>
              </span>
              <span className="text-xl mx-4 text-green-300 flex items-center">
                <span>Node</span><FaNodeJs />
              </span>
              <span className="text-xl mx-4 text-blue-300 flex items-center gap-1">
              <SiTypescript /><span>TypeScript</span>
              </span>
            </div>
          </Marquee>
        </div>
        {/* Credential Cards */}
        <div className="bg-[#1A1A1A] h-40 rounded-xl shadow-lg flex justify-center items-center">
          {/* Add content for card 1 */}
        </div>
        <div className="bg-[#1A1A1A] h-40 rounded-xl shadow-lg flex justify-center items-center">
          {/* Add content for card 2 */}
        </div>
      </div>

      {/* Projects Section */}
      <div className="bg-[#1A1A1A] rounded-xl p-6 shadow-lg flex flex-col justify-between">
        <p className="uppercase text-gray-400 text-sm">Showcase</p>
        <h2 className="text-xl font-bold">Projects</h2>
        <div className="mt-4">
          <img
            src="https://via.placeholder.com/150"
            alt="Project"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Additional Info (Logos and Icons) */}
      <div className="bg-[#1A1A1A] rounded-xl p-6 grid grid-cols-3 gap-4 shadow-lg">
        {["Logo 1", "Logo 2", "Logo 3"].map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <div className="bg-[#323232] p-4 rounded-full">
              <img
                src="https://via.placeholder.com/50"
                alt={logo}
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
