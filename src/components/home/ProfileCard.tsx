import { MdOutlineFileDownload } from "react-icons/md";
import profile from "../../assets/profile.png";

const ProfileCard = () => {
  return (
    <div className="card w-full max-w-sm md:max-w-lg lg:max-w-xl mx-auto px-6 py-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="avatar mb-4 md:mb-0">
          <div className="w-44 h-44 md:w-full md:h-52 rounded-tl-3xl">
            <img src={profile} alt="akash" className="object-cover w-full filter " />
          </div>
        </div>
        <div className="text-center md:text-left md:ml-6">
          <p className="text-sm text-gray-400 uppercase tracking-wider">
            Hi, I am Akash
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            A <span className="text-[#00FFFF]">M</span>
            <span className="text-[#00FFFF]">E</span>
            <span className="text-[#00FFFF]">R</span>
            <span className="text-[#00FFFF]">N</span> Stack Developer
          </h2>
          <p className="text-sm md:text-base text-gray-300 mt-2">
            with a passion for building dynamic and user-friendly web
            applications.
          </p>
        </div>
      </div>
      <div className="flex justify-center md:justify-end mt-6 md:mt-0 gap-6">
        <button className="btn btn-md btn-outline bg-black hover:bg-white hover:text-[#323232] text-white rounded-2xl">
          download resume <MdOutlineFileDownload />
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
