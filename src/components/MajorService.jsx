import { useState } from "react";
import { FaArrowAltCircleRight, FaCheckCircle } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";

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

const MajorService = () => {
  const [showDetails, setShowDetails] = useState(false);
  const toggleShowDetails = () => setShowDetails(!showDetails);

  return (
    <div className="w-full h-fit bg-slate-700 hover:bg-slate-700/60 transition-all duration-500 flex flex-col justify-start p-6 m-5 rounded-lg">
      <div className="mb-5">
        <div className="flex justify-between items-center">
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-stone-300 mb-4">
            Major Service: {' '}
            <span className="text-slate-100">£89</span>
          </h3>
          <ToggleButton showDetails={showDetails} toggleShowDetails={toggleShowDetails} />
        </div>
        <p className="text-slate-300 text-sm md:text-md lg:text-lg">
          The Major Service is the most comprehensive package we offer,
          providing an in-depth inspection and maintenance of every part of your
          vehicle. In addition to all the checks in the Basic, Interim, and Full
          Services, this package includes additional services like a brake fluid
          change, cabin filter replacement, and timing belt check. It&apos;s the
          ultimate care for your car or van, ensuring it remains in top
          condition for the long haul.
        </p>
      </div>

      {showDetails && (
        <div>
          <p className="text-slate-400 mb-4">Everything in basic plus:</p>
          <p className="text-slate-400 mb-4 bg-slate-900 px-2 py-1 rounded-lg">
            EXTERIOR / INTERIOR CHECKS
          </p>
          {[
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
            "Shock Absorbers"
          ].map((text, index) => (
            <ServiceDetail key={index} text={text} />
          ))}

          <p className="my-4 text-slate-400 bg-slate-900 px-2 py-1 rounded-lg">
            UNDER THE VEHICLE CHECKS
          </p>
          {[
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
            "Check shock absorbers"
          ].map((text, index) => (
            <ServiceDetail key={index} text={text} />
          ))}

          <p className="my-4 text-slate-400 mb-4 bg-slate-900 px-2 py-1 rounded-lg">
            UNDER THE BONNET CHECKS
          </p>
          {[
            "Replace pollen filter",
            "Replace air filter",
            "Check brake fluid level",
            "Top-up washer fluid",
            "Check cooling fan operation",
            "Check coolant level and concentration %",
            "Top up coolant",
            "Visual check of hoses and pipes",
            "Battery check",
            "Replace external fuel filter, diesel only",
            "Visual inspection of drive belts",
            "Check timing/cam belt (Interval check only)",
            "Replace spark plugs (Petrol Vehicles only)",
            "Lubricate bonnet latch and hinges"
          ].map((text, index) => (
            <ServiceDetail key={index} text={text} />
          ))}

          <p className="my-4 text-slate-400 bg-slate-900 px-2 py-1 rounded-lg">
            ROAD TEST
          </p>
          {[
            "Check gearbox operation",
            "Engine noises",
            "Check Clutch",
            "Exhausts operation",
            "Steering"
          ].map((text, index) => (
            <ServiceDetail key={index} text={text} />
          ))}

          <p className="my-4 bg-slate-900 px-2 py-1 text-slate-400 rounded-lg">
            FINAL CHECKS
          </p>
          {[
            "Recheck engine oil levels",
            "Check/adjust wheel nut torque",
            "Service book stamped"
          ].map((text, index) => (
            <ServiceDetail key={index} text={text} />
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

export default MajorService;

