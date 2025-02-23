import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router";
import profile from "../../assets/main-avtar.jpg";
import { SiX } from "react-icons/si";
const AboutMeCard = () => {
  return (
    
      <div
        className="card bg-base-200 shadow-xl py-6 text-center gap-2 rounded-lg w-full"
        data-aos="zoom-in-right"
      >
        <img
          src={profile}
          alt="akash roy"
          className="w-40 h-40 lg:h-52 lg:w-52 mx-auto rounded-xl border-4 border-stone-400 object-cover"
        />
        <h1 className="text-3xl dancing font-bold mt-4">Akash Roy</h1>
        <p className="text-sm text-gray-500 font-bold">MERN Stack Developer</p>
        <div className="flex justify-center items-center gap-4 px-4">
          {/* GitHub */}
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white p-3 border border-white rounded-full hover:bg-gray-400 transition"
          >
            <FaGithub className="text-lg" />
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white p-3 border border-white rounded-full hover:bg-blue-500 transition"
          >
            <FaLinkedin className="text-lg" />
          </a>
          {/* Twitter */}
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white p-3 border border-white rounded-full hover:bg-blue-500 transition"
          >
            <SiX className="text-lg" />
          </a>
          {/* Facebook */}
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white p-3 border border-white rounded-full hover:bg-blue-500 transition"
          >
            <FaFacebook className="text-lg" />
          </a>
        </div>
        <NavLink to="/contact">
          {" "}
          <button className="mt-6 btn btn-outline btn-wide md:w-52 bg-black hover:bg-white hover:text-[#323232] text-white rounded-2xl">
            Contact me
          </button>
        </NavLink>
      </div>
  
  );
};

export default AboutMeCard;
