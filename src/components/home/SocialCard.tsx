import ButtonArrow from "../buttons/ButtonArrow";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";

const SocialCard = () => {
  return (
    <div className="bg-[#1A1A1A] h-auto rounded-xl shadow-lg flex justify-center items-center" data-aos="zoom-in">
      <div className="w-full p-6">
        <div className=" flex justify-center items-center gap-8">
          <a href="https://github.com/Royakash2">
            <FiGithub className="size-14 border hover:bg-white hover:text-black rounded-full transition-all duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/akash-roy-0b28442b2/">
            <CiLinkedin className="size-14 border hover:bg-white rounded-full hover:text-black transition-all duration-200" />
          </a>
        </div>
        <div className="card-actions flex items-center justify-around gap-5 w-full mt-6">
          <div>
            <p className="text-sm text-[#545454]">stay with me</p>
            <p className="text-xl mt-2 font-bold">Profiles</p>
          </div>
          <ButtonArrow></ButtonArrow>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
