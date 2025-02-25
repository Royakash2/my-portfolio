import { BsWhatsapp } from "react-icons/bs";

import { FiMapPin, FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import SocialIcon from "../social-icon/SocialIcon";
import { SOCIAL_ICONS } from "../../utils/socialIcons";

const ContactInfo = () => {
  const CONTACT_INFO = [
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Sylhet, Bangladesh",
      subtitle: "Based in",
    },
    {
      icon: <HiOutlineMail className="w-6 h-6" />,
      title: ".com",
      subtitle: "Email me at",
    },
    {
      icon: <FiPhoneCall className="w-6 h-6" />,
      title: "+123 456 7890",
      subtitle: "Call me at",
    },
    {
      icon: <BsWhatsapp className="w-6 h-6 " />,
      title: "+123 456 7890",
      subtitle: "WhatsApp",
    },
  ];

  // const SOCIAL_ICONS = [
  //   {
  //     icon: <BsWhatsapp className="w-5 h-5" />,
  //     link: "https://wa.me/1234567890",
  //     color: "text-green-400",
  //   },
  //   {
  //     icon: <BsLinkedin className="w-5 h-5" />,
  //     link: "https://linkedin.com/in/yourprofile",
  //     color: "text-blue-400",
  //   },
  //   {
  //     icon: <FaXTwitter className="w-5 h-5" />,
  //     link: "https://twitter.com/yourprofile",
  //     color: "text-blue-300",
  //   },
  //   {
  //     icon: <BsGithub className="w-5 h-5" />,
  //     link: "https://github.com/yourprofile",
  //     color: "text-gray-400",
  //   },
  // ];
  return (
    <div className="w-full">
      <div className="p-6 sm:p-8">
        <div className="flex flex-col items-center text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-1">
            Contact Information
          </h2>
          <p className="text-gray-400">Feel free to reach out anytime</p>
        </div>

        {/* Contact Details */}
        <div className="space-y-4">
          {CONTACT_INFO.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition border border-gray-700 hover:border-blue-500"
            >
              <div className="p-3 bg-black text-white hover:text-black border border-white rounded-full hover:bg-gray-400 transition">
                {item.icon}
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-400">{item.subtitle}</p>
                <p className="text-sm md:text-lg font-medium text-white">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media */}
        <div className="mt-6 flex justify-center gap-4">
          {SOCIAL_ICONS.map((social, index) => (
            <SocialIcon
              key={index}
              icon={social.icon}
              link={social.link}
              color={social.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
