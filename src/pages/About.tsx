import AboutMeCard from "../components/About/AboutMeCard";
import AboutMeDescription from "../components/About/AboutMeDescription";
import Education from "../components/About/Education";
import Service from "../components/About/Service";
import Skills from "../components/About/Skills";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 p-4 md:mx-8">
      {/* Left Side: Sticky Profile Card */}
      <div className="w-full md:w-1/3 md:sticky top-24">
        <AboutMeCard />
      </div>
      {/* Right Side: Content Area */}
      <div className="w-full md:w-2/3 space-y-6" data-aos="zoom-in-down">
        {/* about me */}
        <AboutMeDescription />
        <Education/>
        <Service/>
        <Skills/>
      </div>
    </div>
  );
};

export default About;
