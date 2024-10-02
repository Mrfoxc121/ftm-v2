import { useState } from "react";
import { FaArrowAltCircleRight, FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";

// Reusable ServiceDetail component
const ServiceDetail = ({ text }) => (
  <div className="flex justify-between items-center mb-2 space-x-20">
    <p className="text-slate-100 text-sm md:text-lg">{text}</p>
    <FaCheckCircle className="text-green-500 text-md md:text-xl" />
  </div>
);

// Reusable Button component for toggling details
const ToggleButton = ({ showDetails, toggleShowDetails }) => (
  showDetails ? (
    <button onClick={toggleShowDetails} className="text-sm md:text-md lg:text-lg mb-4">
      <IoMdCloseCircle className="hover:text-slate-100 text-slate-300 text-xl md:text-2xl" />
    </button>
  ) : (
    <button onClick={toggleShowDetails} className="flex hover:text-slate-100 text-slate-300 items-center gap-2 text-sm md:text-md lg:text-lg mb-4">
      View Details <FaArrowAltCircleRight />
    </button>
  )
);

const InterimService = () => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleShowDetails = () => setShowDetails(prev => !prev);

  return (
    <div className="w-full h-fit bg-slate-700 hover:bg-slate-700/60 transition-all duration-500 flex flex-col p-6 m-5 rounded-lg">
      <div className="mb-5 flex flex-col">
        <div className="flex justify-between items-center">
          <h3 className="text-lg md:text-xl lg:text-2xl text-amber-600 font-bold mb-4">
            Intrum Service: <span className="text-slate-100">£89</span>
          </h3>
          <ToggleButton showDetails={showDetails} toggleShowDetails={toggleShowDetails} />
        </div>

        <p className="text-slate-300 text-sm md:text-md lg:text-lg">
          The Interim Service is designed for drivers who cover high mileage or need more frequent maintenance. In addition to everything in the Basic Service, this package includes a more detailed inspection of your vehicle&aposs critical systems, such as the steering, suspension, and exhaust. It's the perfect option to keep your vehicle in peak condition between full services.
        </p>
      </div>

      {showDetails && (
        <div>
          <p className="text-slate-400 mb-4">Everything in basic plus:</p>

          <p className="text-slate-400 text-md md:text-lg mb-4 bg-slate-900 px-2 py-1 rounded-lg">
            EXTERIOR / INTERIOR CHECKS
          </p>

          <ServiceDetail text="Check vehicle lights" />
          <ServiceDetail text="Check vehicle registration plate condition" />
          <ServiceDetail text="Horn Operation" />
          <ServiceDetail text="Windscreen wiper blades checked" />
          <ServiceDetail text="Washer Jets" />
          <ServiceDetail text="Shock Absorbers" />
          <ServiceDetail text="Tyre wear/condition" />

          <p className="my-4 text-slate-400 bg-slate-900 px-2 py-1 rounded-lg">
            UNDER THE VEHICLE CHECKS
          </p>

          <ServiceDetail text="Visual brake inspection" />
          <ServiceDetail text="Inspect exhaust system" />
          <ServiceDetail text="Tyre pressures checked and adjusted" />
          <ServiceDetail text="Check suspension springs" />
          <ServiceDetail text="Check shock absorbers" />

          <p className="my-4 text-slate-400 bg-slate-900 px-2 py-1 rounded-lg">
            UNDER THE BONNET CHECKS
          </p>

          <ServiceDetail text="Check cooling fan operation" />
          <ServiceDetail text="Check coolant level and concentration %" />
          <ServiceDetail text="Visual check of hoses and pipes" />
          <ServiceDetail text="Replace external fuel filter (Diesel only)" />
          <ServiceDetail text="Visual inspection of drive belts" />
          <ServiceDetail text="Replace spark plugs (Petrol Vehicles only)" />
          <ServiceDetail text="Lubricate bonnet latch and hinges" />

          <p className="my-4 text-slate-400 bg-slate-900 px-2 py-1 rounded-lg">
            ROAD TEST
          </p>

          <ServiceDetail text="Check gearbox operation" />
          <ServiceDetail text="Engine noises" />
          <ServiceDetail text="Clutch" />
          <ServiceDetail text="Steering" />

          <p className="my-4 bg-slate-900 px-2 py-1 text-slate-400">
            FINAL CHECKS
          </p>

          <ServiceDetail text="Recheck engine oil levels" />
          <ServiceDetail text="Service book stamped" />

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

export default InterimService;
