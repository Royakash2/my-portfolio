import Marquee from "react-fast-marquee";
import profile from "../assets/main-avtar.jpg";
import projectBanner from "../assets/laptop.png";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress, SiTypescript } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import ButtonArrow from "../components/ButtonArrow";

const Home = () => {
  return (
    <div className="text-white min-h-screen grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 p-8 lg:px-20 bg-black">
      {/* Profile Section */}
      <div className="card lg:mt-10 card-side primary-gradient rounded-2xl shadow-xl flex flex-col justify-center items-center lg:flex-row md:flex-row ">
        <div className="w-[300px] flex items-center p-6 pt-2 lg:pl-3 lg:p-0">
          <img
            className="w-full mt-3 aspect-square object-cover  rounded-l-3xl shadow-xl  filter brightness-75 backdrop-contrast-125"
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
            <ButtonArrow></ButtonArrow>
          </div>
        </div>
      </div>

      {/* Credentials Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
        {/* Marquee */}
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
        {/* Credential Cards */}
        <div className="bg-[#1A1A1A] h-auto py-8 rounded-xl shadow-lg flex justify-center items-center">
          <div className="">
            <div className="rounded-xl flex items-center p-6 gap-8 shadow-2xl">
              <a href="https://github.com/Royakash2">
                <FaGithub className="size-14 hover:text-black transition-all duration-200" />
              </a>
              <a href="https://www.linkedin.com/in/akash-roy-0b28442b2/">
                <CiLinkedin className="size-14 hover:bg-white rounded-full hover:text-black transition-all duration-200" />
              </a>
            </div>
            <div className="card-actions flex items-center justify-between gap-5 w-full mt-6">
              <div>
                <p className="text-sm text-[#545454]">stay with me</p>
                <p className="text-xl mt-2">Profiles</p>
              </div>
              <ButtonArrow></ButtonArrow>
            </div>
          </div>
        </div>
        <div className="bg-[#1A1A1A] h-auto rounded-xl shadow-lg flex justify-center items-center py-8">
          <div>
            <div className="rounded-xl w-52">
              <img
                className="w-48  transition-all ease-in-out duration-300"
                src={projectBanner}
                alt=""
              />
            </div>
            <div className="card-actions flex items-center justify-between gap-5 w-full mt-6">
              <div>
                <p className="text-sm text-[#545454]">Showcase</p>
                <p className="text-xl mt-2">Portfolio</p>
              </div>
              <ButtonArrow></ButtonArrow>
            </div>
          </div>
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
