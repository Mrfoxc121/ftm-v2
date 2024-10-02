import { Link } from "react-router-dom";
import WELDING from "../assets/welder.svg";


const WeldingServices = () => {
  return (
      <div className="col-start-1 lg:col-start-2 col-span-12 lg:col-span-10 bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-md rounded-lg p-6 mt-10">
        <div className="flex flex-col g lg:flex-row mb-20 p-6">
          <div className="w-full lg:w-1/2">
            <h1 className="text-xl md:text-2xl lg:text-3xl  font-bold mb-6 bg-slate-100 text-slate-800 px-2 py-1 rounded-lg">
              Full Throttle Welding Services
            </h1>
            <p className=" w-full lg:w-full text-slate-300 text-sm md:text-md lg:text-lg  mb-10">
              At Full Throttle Maps, we offer specialized welding services to
              meet all your vehicle repair needs. Whether you require minor
              touch-ups or extensive welding work, our skilled technicians
              ensure your car or van receives precise and durable repairs.
              Choose the welding service that fits your requirements and drive
              with confidence, knowing your vehicle is in expert hands.{" "}
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
            <img src={WELDING} className="w-[400px]" alt="" />
          </div>
        </div>
        <div className="p-6">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-1/3">
              <h1 className="text-xl md:text-2xl lg:text-3xl  font-bold mb-6 capitalize bg-slate-100 text-slate-800 px-2 py-1 rounded-lg">
                Benefits of quality welding
              </h1>
              <p className=" w-full text-slate-300 text-sm md:text-md lg:text-lg mb-2">
                Quality welding is essential for maintaining the structural
                integrity and safety of your vehicle. Expertly executed welding
                repairs provide a strong, durable bond that can extend the life
                of your car or van, preventing further damage and costly future
                repairs.{" "}
              </p>
              <p className=" w-full text-slate-300 text-sm md:text-md lg:text-lg">
                With precision welding, you ensure that your vehicle remains
                safe on the road, offering peace of mind and long-term
                reliability. Investing in quality welding also enhances your
                vehicle&apos;s overall performance, ensuring it remains in top
                condition for years to come.{" "}
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
                    <h3 className="text-lg font-bold">MIG Welding</h3>
                    <p className="text-sm mt-2 text-slate-300">
                      Versatile welding technique suitable for various metals.
                    </p>
                    <ul className="mt-2 list-disc pl-5 text-slate-300 text-xs">
                      <li> Automotive bodywork</li>
                      <li>structural repairs</li>
                      <li>custom fabrication</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">TIG Welding</h3>
                    <p className=" text-sm mt-2 text-slate-300">
                      The precision welding method is ideal for thin materials
                      and detailed work.
                    </p>
                    <ul className="mt-2 list-disc pl-5 text-slate-300 text-xs">
                      <li> Exhaust systems</li>
                      <li>Aluminium repairs</li>
                      <li>Intricate fabrications</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">ARC Welding</h3>
                    <p className="mt-2 text-slate-300 text-sm">
                      Strong and durable welding method, ideal for heavy-duty
                      repairs.
                    </p>
                    <ul className="mt-2 list-disc pl-5 text-slate-300 text-xs">
                      <li>Frame repairs</li>
                      <li>Suspension components</li>
                      <li>Heavy machinery</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">Spot Welding</h3>
                    <p className="mt-2 text-slate-300 text-sm">
                      Fast and efficient method for joining overlapping sheets.
                    </p>
                    <ul className="mt-2 list-disc pl-5 text-slate-300 text-xs">
                      <li>Body panel repairs</li>
                      <li>Automotive assembly</li>
                      <li>Fabrication projects</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">Welding Repairs</h3>
                    <p className="mt-2 text-slate-300 text-sm">
                      Comprehensive repair services for damaged or rusted
                      components.
                    </p>
                    <ul className="mt-2 list-disc pl-5 text-slate-300 text-xs">
                      <li>Frame straightening</li>
                      <li>Exhaust system repairs</li>
                      <li>Rust repair and prevention</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">Custom Fabrication</h3>
                    <p className="mt-2 text-slate-300 text-sm">
                      Tailored welding solutions to create unique parts or
                      modifications.
                    </p>
                    <ul className="mt-2 list-disc pl-5 text-slate-300 text-xs">
                      <li>Custom exhaust systems</li>
                      <li>Roll cages</li>
                      <li>Specialised brackets</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">Welding Consultation</h3>
                    <p className="mt-2 text-slate-300 text-sm">
                      Expert advice on the best welding solutions for specific
                      projects
                    </p>
                    <ul className="mt-2 list-disc pl-5 text-slate-300 text-xs">
                      <li>Services Offered:</li>
                      <li>Material selection</li>
                      <li>Design recommendations for custom projects</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">Welding Inspections</h3>
                    <p className="mt-2 text-slate-300 text-sm">
                      Professional assessments to ensure the integrity and
                      safety of welded joints.
                    </p>
                    <ul className="mt-2 list-disc pl-5 text-slate-300 text-xs">
                      <li>Services Offered:</li>
                      <li>Visual inspections</li>
                      <li>Non-destructive testing (if applicable)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">
                      Emergency Welding Services
                    </h3>
                    <p className="mt-2 text-slate-300 text-sm">
                      On-the-spot welding repairs for urgent situations.
                    </p>
                    <p className="mt-2 text-slate-300 text-sm">
                      {" "}
                      Roadside repairs for broken components or emergency fixes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default WeldingServices;
