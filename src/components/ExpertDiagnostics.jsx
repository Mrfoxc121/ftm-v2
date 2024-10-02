import { FaCheckCircle } from "react-icons/fa";
import { GiHealthCapsule } from "react-icons/gi";
import { Link } from "react-router-dom";


const ExpertDiagnostics = () => {
  return (
    <div className="col-start-1 lg:col-start-2 col-span-12 lg:col-span-10 bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-md rounded-lg p-6 mb-5 lg:mb-10">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col lg:w-1/2 p-6">
          <div className="flex flex-col">
            <div>
              <div className="flex items-center gap-2">
                <GiHealthCapsule className="text-3xl text-orange-500" />
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold bg-slate-100 text-slate-800 px-2 py-1 rounded-lg">
                  Expert Diagnostics
                </h2>
              </div>

              <p className="mt-5 text-slate-300 text-sm md:text-md lg:text-lg">
                Our Engine Diagnostics service is designed to keep your vehicle
                running at its best. Whether you’re a fleet manager, a busy
                commuter, a family car owner, or a young driver, we provide
                expert diagnostics to quickly identify and resolve any engine
                issues.{" "}
              </p>
              <p className="mt-5 text-slate-300 text-sm md:text-md lg:text-lg mb-5  lg:mb-10">
                Using state-of-the-art technology, our skilled technicians can
                detect problems early, preventing costly repairs down the road.
                Trust Full Throttle Maps to keep your engine performing
                optimally, ensuring a smooth, reliable, and safe driving
                experience every time you’re behind the wheel.{" "}
              </p>
            </div>
            <div>
              <Link
                className="py-1 px-2 md:py-2 md:px-4 w-[30%] shadow-sm md:shadow-md bg-slate-100 text-slate-900 text-sm md:text-base text-center rounded-lg font-semibold transform scale-105 text-shadow-sm hover:shadow-[0px_0px_4px_rgb(255,255,255)]"
                to="/#contact"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:w-1/2 p-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-bold capitalize bg-slate-100 text-slate-800 px-2 py-1 rounded-lg">
            What can we do for you?
          </h2>

          <p className="mt-5 text-slate-300 text-sm md:text-md lg:text-lg">
            We provide comprehensive engine diagnostics to quickly identify and
            fix any issues, ensuring your vehicle runs smoothly and efficiently.
            Our expert technicians use advanced tools to detect problems early,
            helping you avoid costly repairs and keeping your car or van in top
            condition. Whether you are managing a fleet, commuting, or driving
            with your family, we arehere to deliver reliable service you can
            trust.{" "}
          </p>
          <div className="flex flex-col md:flex-row justify-between gap-4 my-5">
            <div className="flex w-full items-center justify-between">
              <div>
                <p className="text-xs">Check Engine Light Analysis</p>
              </div>
              <div className="text-green-500">
                <FaCheckCircle />
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <div>
                <p className="text-xs">Fuel System Inspection</p>
              </div>
              <div className="text-green-500">
                <FaCheckCircle />
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <div>
                <p className="text-xs">Ignition System Testing</p>
              </div>
              <div className="text-green-500">
                <FaCheckCircle />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-between my-5">
            <div className="flex w-full items-center justify-between">
              <div>
                <p className="text-xs">Airflow Sensor Testing</p>
              </div>
              <div className="text-green-500">
                <FaCheckCircle />
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <div>
                <p className="text-xs">Oxygen Sensor Monitoring</p>
              </div>
              <div className="text-green-500">
                <FaCheckCircle />
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <div>
                <p className="text-xs">Throttle Response Testing</p>
              </div>
              <div className="text-green-500">
                <FaCheckCircle />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-between my-5">
            <div className="flex w-full items-center justify-between">
              <div>
                <p className="text-xs">Injector Performance Testing</p>
              </div>
              <div className="text-green-500">
                <FaCheckCircle />
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <div>
                <p className="text-xs">Cooling System Check</p>
              </div>
              <div className="text-green-500">
                <FaCheckCircle />
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <div>
                <p className="text-xs">Fault Code Reading & Analysis</p>
              </div>
              <div className="text-green-500">
                <FaCheckCircle />
              </div>
            </div>
          </div>
          <p className="text-xs">And much more...</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertDiagnostics;
