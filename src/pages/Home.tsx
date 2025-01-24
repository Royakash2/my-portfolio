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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 px-4 sm:px-8 xl:px-16 py-6 lg:bg-black bg-[#272927]">
      {/* Profile Section */}
      <div
        className="flex justify-center items-center primary-gradient rounded-xl"
        data-aos="zoom-in-right"
      >
        <ProfileCard />
      </div>

      {/* Credentials Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
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
      <TechStackCard />
      {/* next up coming section */}
      <div className="lg:col-span-2">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 ">
          <div className="col-span-2">
           <TollsCard/>
          </div>
          <div className="lg:col-span-3">
            <ProjectShowCaseCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
