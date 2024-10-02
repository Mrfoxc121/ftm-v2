import { FaArrowAltCircleRight } from "react-icons/fa";
import MECHANIC from "../assets/mechanic.svg";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useScroll, motion } from "framer-motion";
import {  } from "framer-motion";
const Mechanic = () => {
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
    className="bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-sm  shadow-slate-700 col-span-12 lg:col-start-2 lg:col-span-10 row-span-1 flex justify-center items-center rounded-xl text-slate-100 p-4">
      <div className="flex flex-col lg:flex-row w-full">
        <div className="lg:w-1/2 flex justify-center items-center">
          <img src={MECHANIC} className="h-[200px] md:h-[300px]" alt="" />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-between items-start px-6 text-slate-100 my-10">
          <div>
            <h2 className="font-lato tracking-wide text-left text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
              Essential Maintenance and Repair
            </h2>
            <p className="text-sm mb-2 text-slate-300 leading-6">
              Our Essential Maintenance and Repair services are designed to keep
              your vehicle running smoothly and safely. From routine oil changes
              and brake inspections to more complex repairs, we focus on the
              critical components that ensure your car or van remains reliable
              on the road. drive.
            </p>{showMore && (
            <span className="text-sm text-slate-300 leading-6 mb-10">
              {" "}
              Whether it&apos;s a quick fix or preventive maintenance, our
              expert technicians provide the care your vehicle needs to perform
              at its best, giving you peace of mind every time you
            </span> )}
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
          <Link id="services" to={"/essential-maintenance"} className="font-semibold text-sm md:text-base">Look Inside</Link>
          <FaArrowAltCircleRight />
        </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Mechanic;
