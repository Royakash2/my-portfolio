
import SocialIcon from "../social-icon/SocialIcon";
import { SOCIAL_ICONS } from "../../utils/socialIcons";
import { CONTACT_INFO } from "../../utils/contactInfo";
import ContactInfoItem from "./ContactInfoItem";

const ContactInfo = () => {

  return (
    <div className="w-full">
      <div className="p-6 sm:p-8">
        <div className="flex flex-col rounded-lg items-center text-center mb-6 bg-gray-900 border border-gray-700 p-4">
          <h2 className="text-2xl font-bold text-white mb-1">
            Contact Information
          </h2>
          <p className="text-gray-400">Feel free to reach out anytime</p>
        </div>

        {/* Contact Details */}
        <div className="space-y-4 border border-gray-700 rounded-lg">
          {CONTACT_INFO.map((item, index) => (
         
            <ContactInfoItem key={index} icon={item.icon} title={item.title} subtitle={item.subtitle} />
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
