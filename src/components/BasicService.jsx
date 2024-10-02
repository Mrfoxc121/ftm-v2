import { useState } from "react";
import { FaArrowAltCircleRight, FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";

// Reusable ServiceDetail component
const ServiceDetail = ({ text }) => (
  <div className="flex justify-between items-center mb-4 md:mb-2">
    <p className="text-slate-100 text-sm md:text-lg">{text}</p>
    <FaCheckCircle className="text-green-500 text-md md:text-xl" />
  </div>
);

// Reusable Button component for toggling details
const ToggleButton = ({ showDetails, toggleShowDetails }) => (
  showDetails ? (
    <button onClick={toggleShowDetails} className="text-sm md:text-md lg:text-lg mb-4">
      <IoMdCloseCircle className="text-xl hover:text-slate-100 text-slate-300 md:text-2xl" />
    </button>
  ) : (
    <button onClick={toggleShowDetails} className="flex hover:text-slate-100 text-slate-300 items-center gap-2 text-sm md:text-md lg:text-lg mb-4">
      View Details <FaArrowAltCircleRight />
    </button>
  )
);

const BasicService = () => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleShowDetails = () => setShowDetails(prev => !prev);

  return (
    <div className="w-full h-fit bg-slate-700 hover:bg-slate-700/60 transition-all duration-500 flex flex-col p-6 m-5 rounded-lg">
      <div className="mb-5">
        <div className="flex justify-between items-center">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">
            Basic Service: <span className="text-slate-100">£89</span>
          </h3>
          <ToggleButton showDetails={showDetails} toggleShowDetails={toggleShowDetails} />
        </div>

        <p className="text-slate-300 text-sm md:text-md lg:text-lg">
          Our Basic Service is perfect for routine maintenance, providing essential checks and services to keep your vehicle running smoothly. This package includes an oil change, filter replacement, and a general inspection of key components like brakes, tyres, and fluid levels. Ideal for regular upkeep, the Basic Service ensures your car or van stays reliable between more comprehensive services.
        </p>
      </div>

      {showDetails && (
        <div>
          <p className="text-slate-400 text-md md:text-lg mb-4 bg-slate-900 px-2 py-1 rounded-lg">
            OIL & FILTER CHECKS
          </p>
          <ServiceDetail text="Renew engine oil" />
          <ServiceDetail text="Replace oil filter" />
          <ServiceDetail text="Run engine and check for leaks" />
          <ServiceDetail text="Refit sump plug and washer" />

          <div className="mt-6">
            <Link className="py-1 px-2 md:py-2 md:px-4 w-[30%] bg-slate-100 text-slate-900 text-sm md:text-base text-center rounded-lg font-semibold shadow-sm md:shadow-md" to="/#contact">
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicService;
