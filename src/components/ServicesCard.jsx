import InterimService from "./InterimService";
import BasicService from "./BasicService";
import MajorService from "./MajorService";
import FullService from "./FullService";

const ServicesCard = () => {
  return (
    <div className="flex flex-col space-y-6 lg:space-y-0 lg:space-x-6">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6 mb-6">
        <BasicService />
        <InterimService />
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6">
        <FullService />
        <MajorService />
      </div>
    </div>
  );
};

export default ServicesCard;
