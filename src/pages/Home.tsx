import ProfileCard from "../components/home/ProfileCard";
import RollingHighlights from "../components/home/RollingHighlights";
import SocialCard from "../components/home/SocialCard";
import ProjectShowCaseCard from "../components/home/ProjectShowCaseCard";
import TechStackCard from "../components/home/TechStackCard";
import AboutCard from "../components/home/AboutCard";
import { NavLink } from "react-router";
import TollsCard from "../components/home/TollsCard";

const Home = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 px-4 xl:px-16 py-6 bg-[#363A36] lg:bg-black">
      {/* Profile Section */}
      <div
        className="flex justify-center items-center primary-gradient shadow shadow-blue-500 md:shadow-none rounded-3xl"
        data-aos="zoom-in-right"
      >
        <ProfileCard />
      </div>

      {/* Credentials Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        {/* Marquee */}
        <RollingHighlights />
        {/* Credential Cards */}
        <NavLink to="/about">
          {" "}
          <AboutCard />
        </NavLink>
        <SocialCard />
      </div>
      {/* Tech Stack (Logos and Icons) */}
      <div className="lg:col-span-2">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
       <TechStackCard/>
       <TollsCard/>   
      </div>
      </div>
      
      {/* next up coming section */}
      <div className="lg:col-span-2 primary-gradient rounded-[50px]">       
        <ProjectShowCaseCard/>
      </div>
    </div>
  );
};

export default Home;
