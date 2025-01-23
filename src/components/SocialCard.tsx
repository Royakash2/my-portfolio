import ButtonArrow from "./ButtonArrow";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

const SocialCard = () => {
  return (
    <div className="bg-[#1A1A1A] h-auto py-6 rounded-xl shadow-lg flex justify-center items-center">
      <div className="">
        <div className="rounded-xl flex items-center p-6 gap-8 shadow-2xl">
          <a href="https://github.com/Royakash2">
            <FiGithub className="size-14 hover:bg-white hover:text-black rounded-full transition-all duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/akash-roy-0b28442b2/">
            <CiLinkedin className="size-14 hover:bg-white rounded-full hover:text-black transition-all duration-200" />
          </a>
        </div>
        <div className="card-actions flex items-center justify-between gap-5 w-full mt-6">
          <div>
            <p className="text-sm text-[#545454]">stay with me</p>
            <p className="text-xl mt-2">Profiles</p>
          </div>
          <ButtonArrow></ButtonArrow>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
