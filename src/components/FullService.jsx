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

// Reusable ToggleButton component
const ToggleButton = ({ showDetails, toggleShowDetails }) =>
  showDetails ? (
    <button
      onClick={toggleShowDetails}
      className="text-sm md:text-md lg:text-lg mb-4"
    >
      <IoMdCloseCircle className="text-xl hover:text-slate-100 text-slate-300 md:text-2xl" />
    </button>
  ) : (
    <button
      onClick={toggleShowDetails}
      className="flex hover:text-slate-100 text-slate-300 items-center gap-2 text-sm md:text-md lg:text-lg mb-4"
    >
      View Details <FaArrowAltCircleRight />
    </button>
  );

const FullService = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  const exteriorInteriorChecks = [
    "Check vehicle lights",
    "Check vehicle registration plate condition",
    "Fuel cap condition",
    "Horn Operation",
    "Windscreen wiper blades checked",
    "Dashboard Warning Lights",
    "Seat belts Front & rear (inc. lap belt)",
    "Tyre wear/condition",
    "Washer Jets",
    "Lubricate door hinges",
    "Shock Absorbers",
  ];

  const underVehicleChecks = [
    "Check wheel bearings",
    "Check steering components",
    "Visual brake inspection",
    "Remove wheels and inspect brake drums and shoes",
    "Remove wheels and inspect brake pads and discs",
    "Check brake system hydraulics",
    "Check brake servo",
    "Check handbrake operation",
    "Inspect exhaust system",
    "Tyre pressures checked and adjusted",
    "Check propshaft/drive shaft, joints and gaiters",
    "Check suspension springs",
    "Check shock absorbers",
  ];

  const underBonnetChecks = [
    "Replace pollen filter",
    "Top-up washer fluid",
    "Check cooling fan operation",
    "Check coolant level and concentration %",
    "Top up coolant",
    "Visual check of hoses and pipes",
    "Battery check",
    "Visual inspection of drive belts",
    "Check timing/cam belt (Interval check only)",
    "Replace spark plugs (Petrol Vehicles only)",
    "Lubricate bonnet latch and hinges",
  ];

  const roadTestChecks = [
    "Check gearbox operation",
    "Engine noises",
    "Check Clutch",
    "Exhausts operation",
    "Steering",
  ];

  const finalChecks = [
    "Recheck engine oil levels",
    "Check/adjust wheel nut torque",
    "Service book stamped",
  ];

  return (
    <div className="w-full h-fit bg-slate-700 hover:bg-slate-700/60 transition-all duration-500 flex flex-col justify-start p-6 m-5 rounded-lg">
      <div className="mb-5">
        <div className="flex justify-between items-center">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-yellow-300 mb-4">
            Full Service: <span className="text-slate-100">£89</span>
          </h3>
          <ToggleButton
            showDetails={showDetails}
            toggleShowDetails={toggleDetails}
          />
        </div>
        <p className="text-slate-300 text-sm md:text-md lg:text-lg">
          Our Full Service offers a thorough examination of your vehicle,
          covering all aspects of the Basic and Interim packages while adding
          extensive checks of the engine, cooling system, and more. This
          comprehensive service is recommended annually to ensure your vehicle
          operates at its best, improving performance, safety, and longevity.
        </p>
      </div>

      {showDetails && (
        <div>
          <p className="text-slate-100 mb-4">Everything in basic plus:</p>

          <p className="text-slate-400 mb-4 bg-slate-900 px-2 py-1 rounded-lg">
            EXTERIOR / INTERIOR CHECKS
          </p>
          {exteriorInteriorChecks.map((item, index) => (
            <ServiceDetail key={index} text={item} />
          ))}

          <p className="my-4 text-slate-400 bg-slate-900 px-2 py-1 rounded-lg">
            UNDER THE VEHICLE CHECKS
          </p>
          {underVehicleChecks.map((item, index) => (
            <ServiceDetail key={index} text={item} />
          ))}

          <p className="my-4 text-slate-400 bg-slate-900 px-2 py-1 rounded-lg">
            UNDER THE BONNET CHECKS
          </p>
          {underBonnetChecks.map((item, index) => (
            <ServiceDetail key={index} text={item} />
          ))}

          <p className="my-4 text-slate-400 bg-slate-900 px-2 py-1 rounded-lg">
            ROAD TEST
          </p>
          {roadTestChecks.map((item, index) => (
            <ServiceDetail key={index} text={item} />
          ))}

          <p className="my-4 bg-slate-900 px-2 py-1 text-slate-400 rounded-lg">
            FINAL CHECKS
          </p>
          {finalChecks.map((item, index) => (
            <ServiceDetail key={index} text={item} />
          ))}

          <div className="mt-6">
            <Link
              className="py-1 px-2 md:py-2 md:px-4 w-[30%] bg-slate-100 text-slate-900 text-sm md:text-base text-center rounded-lg font-semibold shadow-sm md:shadow-md"
              to="/#contact"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default FullService;
