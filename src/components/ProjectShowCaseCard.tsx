import ButtonArrow from "./ButtonArrow";
import projectBanner from "../assets/laptop.png";

const ProjectShowCaseCard = () => {
  return (
    <div className="bg-[#1A1A1A] h-auto rounded-xl shadow-lg flex justify-center items-center py-6">
      <div>
        <div className="rounded-xl w-52">
          <img
            className="w-48  transition-all ease-in-out duration-300"
            src={projectBanner}
            alt=""
          />
        </div>
        <div className="card-actions flex items-center justify-between gap-5 w-full mt-6">
          <div>
            <p className="text-sm text-[#545454]">Showcase</p>
            <p className="text-xl mt-2">Portfolio</p>
          </div>
          <ButtonArrow></ButtonArrow>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowCaseCard;
