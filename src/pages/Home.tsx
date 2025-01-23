import ProfileCard from "../components/ProfileCard";
import RollingHighlights from "../components/RollingHighlights";
import SocialCard from "../components/SocialCard";
import ProjectShowCaseCard from "../components/ProjectShowCaseCard";
import TechStackCard from "../components/TechStackCard";
import AboutCard from "../components/AboutCard";

const Home = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 px-4 sm:px-8 xl:px-16 pt-6">
      {/* Profile Section */}
      <div className="flex justify-center items-center primary-gradient rounded-xl" data-aos="zoom-in-right">
        <ProfileCard />
      </div>
     
      {/* Credentials Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
         {/* Marquee */}
         <RollingHighlights />
        {/* Credential Cards */}
        <SocialCard />
        <ProjectShowCaseCard />
       
      </div>
      {/* Tech Stack (Logos and Icons) */}
      <TechStackCard />
      {/* next up coming section */}
      
    </div>
  );
};

export default Home;
