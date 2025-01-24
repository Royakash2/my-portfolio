
import { AiFillSignature } from "react-icons/ai";
import ButtonArrow from "../buttons/ButtonArrow";
const AboutCard = () => {
  return (
    <div className="bg-[#1A1A1A] h-auto py-7 rounded-xl shadow-lg flex justify-center items-center" data-aos="zoom-in-up">
      <div className="">
        <div className=" flex items-center p-6 gap-8">
        <AiFillSignature className="size-16"/>
        </div>
        <div className="card-actions flex items-center justify-between gap-5 w-full mt-6">
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
