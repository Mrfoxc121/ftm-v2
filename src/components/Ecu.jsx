import { FaArrowAltCircleRight } from "react-icons/fa";
import ECU from "../assets/ECU.svg";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";

const Ecu = () => {
  
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
        scale: scrollYProgress 
      }}
    className="bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-sm  shadow-slate-700 col-span-6 lg:col-span-2 row-span-1 flex flex-col justify-center items-center rounded-xl text-slate-100 p-6">
    <div className="flex flex-col justify-center items-center mb-6">
      <h2 className="font-lato tracking-wide text-2xl mt-4 md:text-3xl font-bold text-white">ECU</h2>
      <p className="font-lato tracking-wide mb-6">Re-Mapping</p>
      <img className="mb-20 h-[80px] md:h-[150px]" src={ECU} alt="" />
    </div>
    <motion.div 
          whileHover={{ scale: 1.03, textShadow: "0px 0px 4px rgb(255,255,255)", boxShadow: "0px 0px 4px rgb(255,255,255)", }}
          className="flex bg-slate-100 text-slate-900 items-center text-left gap-2 py-1 px-4 rounded-lg">
          <Link id="services" to={"/ecu-info"} className="font-semibold text-sm md:text-base">Look Inside</Link>
          <FaArrowAltCircleRight />
        </motion.div>
  </motion.div>
  );
};

export default Ecu;
