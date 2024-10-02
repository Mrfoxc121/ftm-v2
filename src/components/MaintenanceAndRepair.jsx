import { FaCheckCircle } from "react-icons/fa";
import { MdCarRepair } from "react-icons/md";
import { Link } from "react-router-dom";


const MaintenanceAndRepair = () => {
  return (
    <div className="col-start-1 lg:col-start-2 col-span-12 lg:col-span-10 bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-md rounded-lg p-6 mb-5 mt-10">
      <div className="flex flex-col lg:flex-row">
        <div className="flex lg:w-1/2 flex-col p-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <MdCarRepair className="text-3xl text-orange-500" />
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold bg-slate-100 text-slate-800 px-2 py-1 rounded-lg">
                Essential Mantanance & Repairs
              </h2>
            </div>
            <div>
              <p className="mt-5 text-slate-300 text-sm md:text-md lg:text-lg">
                Full Throttle Maps is your go-to independent garage in
                Clacton-on-Sea, offering expert car and van repairs,
                maintenance, and servicing tailored for fleet vehicle owners,
                commuters, family car owners, and young drivers.{" "}
              </p>
              <p className="mt-5 text-slate-300 text-sm md:text-md lg:text-lg mb-5 md:mb-10">
                With our years of experience, we ensure top-quality, reliable
                service you can trust. Whether managing a fleet or driving your
                first car, choose Full Throttle Maps for honest, dependable care
                that keeps you on the road with confidence.{" "}
              </p>
            </div>
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

        <div className="flex lg:w-1/2 flex-col p-6">
          <h2 className=" text-xl md:text-2xl lg:text-3xl font-bold bg-slate-100 text-slate-800 px-2 py-1 rounded-lg">Our Expert Services:</h2>

          <p className="mt-5 text-slate-300 text-sm md:text-md lg:text-lg ">
            Whether you need a quick tune-up, brake service, or a complete
            engine overhaul, our skilled technicians are equipped to handle it
            all with precision and care. Trust us to keep your car or van in
            peak condition, ensuring safe and reliable performance on the road{" "}
          </p>
          <div className="flex flex-col md:flex-row justify-between gap-4 my-5">
            <div className="flex w-full justify-between items-center">
              <div>
                <p className="text-xs">
                  Oil Changes <br />& Filter Replacements
                </p>
              </div>
              <div className="text-green-500">
                <FaCheckCircle />
              </div>
            </div>
            <div className="flex w-full justify-between items-center">
              <div>
                <p className="text-xs">Brake Inspection & Repair</p>
              </div>
              <div className="text-green-500">
                <FaCheckCircle />
              </div>
            </div>
            <div className="flex w-full justify-between items-center">
              <div>
                <p className="text-xs">
                  Battery Testing <br /> & Replacement
                </p>
              </div>
              <div className="text-green-500">
                <FaCheckCircle />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4 my-5">
            <div className="flex w-full justify-between items-center">
              <div>
                <p className="text-xs">
                  Tire Rotation, <br />
                  Balancing & Replacement
                </p>
              </div>
              <div className="text-green-500">
                <FaCheckCircle />
              </div>
            </div>
            <div className="flex w-full justify-between items-center">
              <div>
                <p className="text-xs">
                  Fluid Level Checks <br /> & Top-Ups
                </p>
              </div>
              <div className="text-green-500">
                <FaCheckCircle />
              </div>
            </div>
            <div className="flex w-full justify-between items-center">
              <div>
                <p className="text-xs">Exhaust System Repairs</p>
              </div>
              <div className="text-green-500">
                <FaCheckCircle />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4 my-5">
            <div className="flex w-full justify-between items-center">
              <div>
                <p className="text-xs">Timing Belt Replacement</p>
              </div>
              <div className="text-green-500">
                <FaCheckCircle />
              </div>
            </div>
            <div className="flex w-full justify-between items-center">
              <div>
                <p className="text-xs">
                  Air Conditioning Servicing <br /> & Repair
                </p>
              </div>
              <div className="text-green-500">
                <FaCheckCircle />
              </div>
            </div>
            <div className="flex w-full justify-between items-center">
              <div>
                <p className="text-xs">Suspension & Steering Repairs</p>
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

export default MaintenanceAndRepair;
