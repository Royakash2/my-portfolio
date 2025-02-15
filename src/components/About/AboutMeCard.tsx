import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router";

import profile from "../../assets/main-avtar.jpg";
const AboutMeCard = () => {
  return (
    <div className="">
      <div
        className="card bg-base-200 shadow-xl p-6 text-center gap-2 rounded-lg"
        data-aos="zoom-in-right"
      >
        <img
          src={profile}
          alt="akash roy"
          className="w-52 h-52 mx-auto rounded-full border-4 border-primary object-cover"
        />
        <h1 className="text-3xl dancing font-bold mt-4">Akash Roy</h1>
        <p className="text-sm text-gray-500 font-bold">MERN Stack Developer</p>
        <div className="flex justify-center gap-4 mt-4">
          {/* GitHub */}
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition"
          >
            <FaGithub className="text-xl" />
          </a>
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-500 transition"
          >
            <FaLinkedin className="text-xl" />
          </a>
          {/* Twitter */}
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-300 transition"
          >
            <FaTwitter className="text-xl" />
          </a>
          {/* Facebook */}
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-600 transition"
          >
            <FaFacebook className="text-xl" />
          </a>
        </div>
        <NavLink to="/contact">
          {" "}
          <button className=" mt-5 btn btn-outline btn-wide bg-black hover:bg-white hover:text-[#323232] text-white rounded-2xl">
            contact me
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default AboutMeCard;
