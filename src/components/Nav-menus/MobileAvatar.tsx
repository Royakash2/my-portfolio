import profile from "../../assets/akash.jpg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const MobileAvatar = () => {
  return (
    <div className="flex flex-col items-center py-8 px-4">
      {/* Rounded Avatar */}
      <div className="w-24 h-24 rounded-full bg-gray-200 mb-6 overflow-hidden">
        <img
          src={profile}
          alt="Avatar"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-3xl dancing font-bold mb-6">Akash Roy</h1>
      {/* Social Media Icons */}
      <div className="flex space-x-4 mb-8">
        <a href="#" className="text-gray-600 hover:text-blue-600">
          <FaGithub className="w-6 h-6 text-white" />
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-600">
          <FaLinkedin className="w-6 h-6 text-blue-500" />
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-600">
          <FaTwitter className="w-6 h-6 text-blue-500" />
        </a>
      </div>
      <div className="divider text-white"></div>
    </div>
  );
};

export default MobileAvatar;
