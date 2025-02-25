import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { IconType } from "react-icons"; // Import IconType for correct typing

// Define Type for Social Icons
interface SocialIconType {
  icon: IconType; // Stores the component reference instead of JSX
  link: string;
  color: string;
}

// Social Icons Array (Correctly Typed)
export const SOCIAL_ICONS: SocialIconType[] = [
  {
    icon: BsWhatsapp, // Store the component reference
    link: "https://wa.me/1234567890",
    color: "text-green-400",
  },
  {
    icon: BsLinkedin,
    link: "https://linkedin.com/in/yourprofile",
    color: "text-blue-400",
  },
  {
    icon: FaXTwitter,
    link: "https://twitter.com/yourprofile",
    color: "text-blue-300",
  },
  {
    icon: BsGithub,
    link: "https://github.com/yourprofile",
    color: "text-gray-400",
  },
];
