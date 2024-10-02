import { FaArrowAltCircleRight } from "react-icons/fa";
import MOT from "../assets/MOT.svg";
import { Link } from "react-router-dom";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const Mot = () => {
  const [showMore, setShowMore] = useState(false);

  const ref = useRef(HTMLDivElement);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  return (
    
    <motion.div
      ref={ref}
      style={{
        opacity: scrollYProgress,
        scale: scrollYProgress,
      }}
      id="services"
      className="bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-sm  shadow-slate-700 col-span-12 lg:col-start-2 lg:col-span-6 row-span-1  flex py-6 rounded-xl "
    >
      <div className="flex flex-col lg:flex-row  w-full ">
        <div className="lg:w-1/2 flex justify-center items-center mb-6">
          <img src={MOT} className="h-[150px]" alt="" />
        </div>
        <div className="lg:w-1/2 flex flex-col items-start justify-between center px-6 text-slate-100">
          <div>
            <h2 className="font-lato tracking-wide text-2xl lg:text-3xl xl:text-4xl font-bold my-4 text-left">
              Return Your Car to MOT Standard
            </h2>
    
              <p className=" text-sm mb-1 text-slate-300 leading-6 ">
                Ensure your vehicle meets MOT standards with our expert
                services. At Full Throttle Maps, we specialize in identifying and
                repairing any issues that could cause your car to fail its MOT
                test.{' '}</p> {showMore && (
                  <span className="text-sm mb-10 text-slate-300 leading-6 mb-4">
                    From welding repairs to brake checks and emissions testing,
                    we provide everything you need to bring your car back to
                    roadworthy condition. Trust us to get your vehicle
                    MOT-ready, so you can drive with confidence and safety.
                  </span>
                )} 
                {" "}
                
              
             {!showMore ? (
                <button
                  onClick={() => setShowMore(!showMore)}
                  className=" flex hover:text-orange-500 mb-4 text-slate-400 items-center  gap-2 text-xs"
                >
                  Read more...
                </button>
              ) : (
                <button
                  onClick={() => setShowMore(!showMore)}
                  className=" flex mb-4 text-slate-400 text-xs items-center gap-2 hover:text-orange-500"
                >
                  Read less...
                </button>
              )}
          </div>

          <motion.div 
          whileHover={{ scale: 1.03, textShadow: "0px 0px 4px rgb(255,255,255)", boxShadow: "0px 0px 4px rgb(255,255,255)", }}
          className="flex bg-slate-100 text-slate-900 items-center text-left gap-2 py-1 px-4 rounded-lg">
            <Link
              to={"mot-checkup"}
              className="  font-semibold text-sm md:text-base"
            >
              Look Inside
            </Link>
            <FaArrowAltCircleRight />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Mot;
