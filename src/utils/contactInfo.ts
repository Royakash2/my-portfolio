import { FiMapPin, FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import { IconType } from "react-icons";

// Define Type for Contact Info
interface ContactInfoType {
  icon: IconType; // Store component reference instead of JSX
  title: string;
  subtitle: string;
}

// Contact Info Array
export const CONTACT_INFO: ContactInfoType[] = [
  {
    icon: FiMapPin, // Store component reference
    title: "Sylhet, Bangladesh",
    subtitle: "Based in",
  },
  {
    icon: HiOutlineMail,
    title: ".com",
    subtitle: "Email me at",
  },
  {
    icon: FiPhoneCall,
    title: "+123 456 7890",
    subtitle: "Call me at",
  },
  {
    icon: BsWhatsapp,
    title: "+123 456 7890",
    subtitle: "WhatsApp",
  },
];
