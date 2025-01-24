
import { AiFillSignature } from "react-icons/ai";
import ButtonArrow from "../buttons/ButtonArrow";
const AboutCard = () => {
  return (
    <div className="bg-[#1A1A1A] h-auto rounded-xl shadow-lg flex justify-center items-center" data-aos="zoom-in-up">
      <div className="w-full p-6">
        <div className="flex justify-center items-center gap-8">
        <AiFillSignature className="size-14"/>
        </div>
        <div className="card-actions flex items-center justify-around gap-5 w-full mt-6">
          <div>
            <p className="text-sm text-[#545454]">Details About Me</p>
            <p className="text-xl mt-2 font-bold">Discover</p>
          </div>
          <ButtonArrow></ButtonArrow>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
