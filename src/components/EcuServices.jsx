import { Link } from "react-router-dom";
import ECU from "../assets/ecu.svg";


const EcuServices = () => {
  return (
    <div className="col-start-1 lg:col-start-2 col-span-12 lg:col-span-10 bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-md rounded-lg p-6 mt-10">
      <div className="flex flex-col g lg:flex-row mb-20 p-6">
        <div className="w-full lg:w-1/2 mb-10 lg:mb5">
          <h1 className="text-xl md:text-2xl lg:text-3xl  font-bold mb-6 bg-slate-100 text-slate-800 rounded-lg px-2 py-1">
            Full Throttle ECU Mapping
          </h1>
          <p className=" w-full lg:w-full text-slate-100 text-sm md:text-md lg:text-lg  mb-10">
            Unlock your vehicle&apos;s full potential with Full Throttle ECU
            Mapping. Our expert technicians fine-tune your engine&apos;s control
            unit (ECU) to enhance performance, boost power, and improve fuel
            efficiency. Whether you&apos;re looking for more horsepower, better
            throttle response, or optimized fuel economy, our custom ECU mapping
            service tailors your vehicle&apos;s settings to match your driving
            style. Trust Full Throttle to elevate your driving experience with
            precision and expertise.{" "}
          </p>
          <div className="flex justify-start">
            <Link
              className="py-1 px-2 md:py-2 md:px-4 bg-slate-100 text-slate-900 text-sm md:text-base text-center rounded-lg font-semibold shadow-sm md:shadow-md"
              to="/#contact"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        <div className=" flex items-center justify-center mx-auto">
          <img src={ECU} className="w-[400px]" alt="" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/3">
            <h1 className="text-xl md:text-2xl lg:text-3xl  font-bold mb-6 capitalize bg-slate-100 text-slate-800 px-2 py-1 rounded-lg">
              Benefits of ECU Mapping
            </h1>
            <p className=" w-full text-slate-300 text-sm md:text-md lg:text-lg mb-2">
              ECU mapping, or engine remapping, optimizes your vehicle&apos;s engine
              performance by fine-tuning the engine control unit (ECU) settings.
              This process can lead to significant benefits, including increased
              horsepower, improved fuel efficiency, and enhanced throttle
              response.{" "}
            </p>
            <p className=" w-full text-slate-300 text-sm md:text-md lg:text-lg">
            By adjusting the ECU, your vehicle can achieve smoother
              acceleration, better torque delivery, and a more responsive
              driving experience. ECU mapping also allows for customized tuning,
              tailored to your specific driving needs, whether you&apos;re looking
              for better performance, fuel economy, or a balance of both.{" "}
            </p>
          </div>
          <div className="lg:w-2/3">
            <h1 className="text-xl md:text-2xl lg:text-3xl  font-bold mb-6 capitalize bg-slate-100 text-slate-800 px-2 py-1 rounded-lg">
              {" "}
              services we offer:
            </h1>
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-bold">
                  Performance Remapping
                  </h3>
                  <p className="text-sm mt-2 text-slate-300">
                  Enhance your vehicle’s engine performance for increased power and responsiveness.
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-slate-300 text-xs">
                    <li>Improved horsepower and torque</li>
                    <li>Enhanced throttle response</li>
                    <li>Better acceleration</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold">Fuel Economy Remapping</h3>
                  <p className=" text-sm mt-2 text-slate-300">
                  Optimise engine parameters to improve fuel efficiency without sacrificing performance.
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-slate-300 text-xs">
                    <li>Enhanced miles per gallon (MPG)</li>
                    <li>Reduced fuel costs</li>
                    <li>Eco-friendly driving experience</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                  Tuning for Modified Vehicles
                  </h3>
                  <p className="mt-2 text-slate-300 text-sm">
                  Tailored remapping for cars with aftermarket modifications such as exhaust systems or turbochargers.
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-slate-300 text-xs">
                    <li>Maximised performance gains</li>
                    <li>Custom settings to match modifications</li>
                    <li>Improved vehicle reliability</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                  Rev Limiter Adjustment
                  </h3>
                  <p className="mt-2 text-slate-300 text-sm">
                  Adjust the engine&aps;s rev limit to enhance performance and driving experience.
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-slate-300 text-xs">
                    <li>Increased power band</li>
                    <li> Better performance in high RPM situations</li>
                    <li>Enhanced driving enjoyment</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                  Throttle Response Mapping
                  </h3>
                  <p className="mt-2 text-slate-300 text-sm">
                  Fine-tune throttle response for a more dynamic driving experience.
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-slate-300 text-xs">
                    <li>Smoother acceleration</li>
                    <li>Immediate response to driver inputs</li>
                    <li>Enhanced driving control</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                  DTC (Diagnostic Trouble Code) Deletion
                  </h3>
                  <p className="mt-2 text-slate-300 text-sm">
                  Safely remove error codes related to modifications or faults in the vehicle’s system.
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-slate-300 text-xs">
                    <li>Elimination of check engine lights</li>
                    <li>Improved vehicle diagnostics</li>
                    <li>Enhanced performance without warning issues</li>
                  </ul>
                </div>

               <div>
                  <h3 className="text-lg font-bold">ECU Flashing</h3>
                  <p className="mt-2 text-slate-300 text-sm">
                  Reprogram the ECU with updated software for improved performance and efficiency.
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-slate-300 text-xs">
                    <li>Latest manufacturer updates</li>
                    <li>Bug fixes and performance enhancements</li>
                    <li>Enhanced vehicle reliability</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                  Custom Remapping
                  </h3>
                  <p className="mt-2 text-slate-300 text-sm">
                  Personalised remapping solutions tailored to individual driving styles and preferences.
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-slate-300 text-xs">
                    <li>Unique tuning solutions</li>
                    <li>Enhanced performance based on user needs</li>
                    <li>Comprehensive consultation to understand customer goals</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold">
                  Free ECU Health Check
                  </h3>
                  <p className="mt-2 text-slate-300 text-sm">
                  Evaluate the current state of your ECU and its readiness for remapping.
                  </p>
                  <ul className="mt-2 list-disc pl-5 text-slate-300 text-xs">
                    <li>Identify potential issues before remapping</li>
                    <li>Comprehensive analysis of ECU performance</li>
                    <li>Peace of mind before proceeding with modifications</li>
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

export default EcuServices;
