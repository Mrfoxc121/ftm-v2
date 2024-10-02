import { Link } from "react-router-dom";
import MOT from "../assets/mot.svg";


const PreMotServices = () => {
  return (
    <div className="col-start-1 lg:col-start-2 col-span-12 lg:col-span-10 bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-md rounded-lg p-6 lg:mb-10 lg:m-0">
      <div className="flex flex-col g lg:flex-row mb-20 p-6">
        <div className="w-full lg:w-1/2">
          <h1 className="text-xl md:text-2xl lg:text-3xl  font-bold mb-6 bg-slate-100 text-slate-800 px-2 py-1 rounded-lg">
            Full Throttle Pre-MOT Services
          </h1>
          <p className=" w-full lg:w-full text-slate-300 text-sm md:text-md lg:text-lg  mb-10">
            Ensure your vehicle is fully prepared for its MOT with our
            comprehensive Pre-MOT Services. Our expert technicians conduct a
            thorough inspection, identifying any potential issues that could
            lead to a failed MOT. From checking lights and brakes to assessing
            emissions and tyre condition, we cover all critical areas to give
            you peace of mind. With our Pre-MOT Services, you can avoid
            surprises and drive confidently, knowing your car or van is ready to
            pass its MOT with flying colors.{" "}
          </p>
          <div className="flex justify-start">
            <Link
              className="py-1 px-2 md:py-2 md:px-4 bg-slate-100 text-slate-900 text-sm md:text-base text-center rounded-lg font-semibold shadow-sm md:shadow-md mb-10"
              to="/#contact"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        <div className=" flex items-center justify-center mx-auto">
          <img src={MOT} className="w-[400px]" alt="" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-1/3">
            <h1 className="text-xl md:text-2xl lg:text-3xl  font-bold mb-6 capitalize bg-slate-100 text-slate-800 px-2 py-1 rounded-lg">
              Benefits of Pre-MOT Checks
            </h1>
            <p className=" w-full text-slate-300 text-sm md:text-md lg:text-lg mb-2">
              Pre-MOT checks offer peace of mind by identifying potential issues
              before your vehicle undergoes its MOT test. By addressing these
              problems in advance, you can avoid unexpected failures, reduce
              repair costs, and ensure a smoother, faster MOT process. Regular
              pre-MOT checks help keep your car or van in optimal condition,
              improving safety and reliability on the road while increasing the
              likelihood of passing the MOT on the first attempt.{" "}
            </p>
            <p className=" w-full text-slate-300 text-sm md:text-md lg:text-lg">
              Regular pre-MOT checks help keep your car or van in optimal
              condition, improving safety and reliability on the road while
              increasing the likelihood of passing the MOT on the first attempt.{" "}
            </p>
          </div>
          <div className=" w-wull lg:w-2/3">
            <h1 className="text-xl md:text-2xl lg:text-3xl  font-bold mb-6 capitalize bg-slate-100 text-slate-800 px-2 py-1 rounded-lg">
              {" "}
              services we offer:
            </h1>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-bold">
                    Comprehensive Inspection
                  </h3>
                  <p className="text-sm mt-2 text-slate-300">
                    A thorough examination of key vehicle components to ensure
                    they meet safety and emissions standards.
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-slate-300 text-xs">
                    <li>Brakes</li>
                    <li>Tires and wheels</li>
                    <li>Suspension and steering</li>
                    <li>Lights and indicators</li>
                    <li>Exhaust system</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold">Brake System Assessment</h3>
                  <p className=" text-sm mt-2 text-slate-300">
                    Detailed inspection of the braking system for performance
                    and safety.
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-slate-300 text-xs">
                    <li>Brake pads and discs condition</li>
                    <li>Brake fluid level and quality</li>
                    <li>Handbrake functionality</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                    Lighting and Visibility Test
                  </h3>
                  <p className="mt-2 text-slate-300 text-sm">
                    Ensure all lights and visibility features are functioning
                    correctly.
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-slate-300 text-xs">
                    <li>Headlights, brake lights, and turn signals</li>
                    <li>Indicators and hazard lights</li>
                    <li>Windscreen wipers and washers</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                    Tire Condition and Pressure Check
                  </h3>
                  <p className="mt-2 text-slate-300 text-sm">
                    Evaluate tire tread depth, pressure, and overall condition.
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-slate-300 text-xs">
                    <li>Ensures legal tread depth</li>
                    <li>Identifies uneven wear or damage</li>
                    <li>Proper tire pressure for safety and efficiency</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                    Suspension and Steering Inspection
                  </h3>
                  <p className="mt-2 text-slate-300 text-sm">
                    Assess the vehicle’s suspension and steering components for
                    safety and stability.
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-slate-300 text-xs">
                    <li>Shock absorbers and struts</li>
                    <li>Steering linkage and play</li>
                    <li>Wheel alignment</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                    Exhaust System Evaluation
                  </h3>
                  <p className="mt-2 text-slate-300 text-sm">
                    <strong>Description:</strong> Inspect the exhaust system for
                    leaks and compliance with emissions standards.
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-slate-300 text-xs">
                    <li>Condition of exhaust pipes and silencer</li>
                    <li>Emissions output testing (if applicable)</li>
                    <li>Mounting integrity</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                    Fluid Levels and Condition Check
                  </h3>
                  <p className="mt-2 text-slate-300 text-sm">
                    Review all essential fluid levels and their condition.
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-slate-300 text-xs">
                    <li>
                      Engine oil, coolant, brake fluid, and transmission fluid
                    </li>
                    <li>Fluid leaks and contamination</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                    Battery and Electrical System Assessment
                  </h3>
                  <p className="mt-2 text-slate-300 text-sm">
                    Check the battery condition and overall electrical system
                    functionality.
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-slate-300 text-xs">
                    <li>Battery charge and age</li>
                    <li>Alternator performance</li>
                    <li>Fuse and wiring integrity</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold">Pre-MOT Advisory Report</h3>
                  <p className="mt-2 text-slate-300 text-sm">
                    Provide a detailed report on any issues found during the
                    inspection.
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-slate-300 text-xs">
                    <li>Clear overview of necessary repairs before MOT</li>
                    <li>Recommendations for addressing any concerns</li>
                    <li>Peace of mind before the official MOT appointment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreMotServices;
