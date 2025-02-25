import { IconType } from "react-icons"; // Import IconType

// Define Props Type
interface SocialIconProps {
  icon: IconType; // ✅ Accept component reference, not JSX
  link: string;
  color: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon: IconComponent, link, color }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-3 bg-black text-white hover:text-black border border-white rounded-full hover:bg-gray-400 transition ${color}`}
    >
      <IconComponent className="w-5 h-5" /> {/* ✅ Render dynamically */}
    </a>
  );
};

export default SocialIcon;
