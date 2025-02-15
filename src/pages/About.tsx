import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profile from "../../src/assets/main-avtar.jpg";
import { NavLink } from "react-router";

const About = () => {
  return (
    // 👇 Added min-height to ensure scrollable content
    <div className="flex flex-col md:flex-row items-start gap-8 p-6 max-w-5xl mx-auto">
      {/* Left Side: Sticky Profile Card */}
      <div className="w-full md:w-1/3 md:sticky top-24">
        {/* 👇 Ensure sticky container has proper constraints */}
        <div className="">
          <div
            className="card bg-base-200 shadow-xl p-6 text-center gap-2"
            data-aos="zoom-in-right"
          >
            <img
              src={profile}
              alt="akash roy"
              className="w-52 h-52 mx-auto rounded-full border-4 border-primary object-cover"
            />
            <h1 className="text-3xl dancing font-bold mt-4">Akash Roy</h1>
            <p className="text-sm text-gray-500 font-bold">
              MERN Stack Developer
            </p>
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
      </div>

      {/* Right Side: Content Area */}
      <div className="w-full md:w-2/3" data-aos="zoom-in-down">
        {/* about me */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4 text-white">About Me</h2>
          <p>
            I m a MERN Stack Developer passionate about building dynamic and
            responsive web applications. I started my frontend development
            journey in 2023 and worked extensively with React.js, JavaScript,
            HTML, and CSS. In 2024, I expanded my expertise to backend
            development, mastering Node.js, Express.js, MongoDB, and Mongoose to
            create full-stack applications. I enjoy solving real-world problems
            with clean, efficient code and continuously improving my skills.
            Currently, I'm focused on learning Redux and Next.js to enhance my
            frontend capabilities. I m eager to contribute my knowledge and
            creativity to exciting projects and grow as a developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
