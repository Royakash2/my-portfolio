import profile from "../assets/akash.jpg";
import ButtonArrow from "./ButtonArrow";

const ProfileCard = () => {
  return (
    <div className=" primary-gradient card w-full max-w-sm md:max-w-lg lg:max-w-xl mx-auto bg-gray-800 p-6 rounded-xl">
      <div className="flex flex-col md:flex-row items-center">
        <div className="avatar mb-4 md:mb-0">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-primary">
            <img src={profile} alt="David Henderson" className="object-cover" />
          </div>
        </div>
        <div className="text-center md:text-left md:ml-6">
          <p className="text-sm text-gray-400 uppercase tracking-wider">
            Hi, I am Akash
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            A <span className="text-green-400">M</span>
            <span className="text-slate-400">E</span>
            <span className="text-blue-500">R</span>
            <span className="text-green-500">N</span> Stack Developer
          </h2>
          <p className="text-sm md:text-base text-gray-300 mt-2">
            with a passion for building dynamic and user-friendly web
            applications.
          </p>
        </div>
      </div>
      <div className="flex justify-center md:justify-between mt-10 gap-6">
        <button className="btn btn-md btn-outline bg-black hover:bg-white hover:text-[#323232] text-white rounded-2xl">
          download resume
        </button>

        <ButtonArrow />
      </div>
    </div>
  );
};

export default ProfileCard;
