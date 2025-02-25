import { IconType } from "react-icons";

interface ContactInfoItemProps {
  icon: IconType; // Accept the icon component reference
  title: string;
  subtitle: string;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  icon: IconComponent,
  title,
  subtitle,
}) => {
  return (
    <div className="flex items-center gap-4 p-4  rounded-lg hover:bg-gray-800 transition  hover:border-blue-500">
      <div className="p-3 text-white  rounded-full ">
        <IconComponent className="w-6 h-6" />
      </div>
      <div className="flex-1">
        <p className="text-xs text-gray-400">{subtitle}</p>
        <p className="text-sm md:text-lg font-medium text-white">{title}</p>
      </div>
    </div>
  );
};

export default ContactInfoItem;
