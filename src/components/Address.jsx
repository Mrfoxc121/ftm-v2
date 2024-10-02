
import ADDRESS from "../assets/telephone.svg";
import { useRef } from "react";
import { useScroll, motion} from "framer-motion";

const Address = () => {
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
    className="bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-md col-span-6 p-12 lg:col-span-4 lg:row-span-1 flex flex-col justify-center items-center text-slate-100 font-lato tracking-wide rounded-lg">
      <img src={ADDRESS} alt="" className="h-[50px] mb-4" />
      <h2 className="font-semibold">
        CALL US <span className="text-orange-400">NOW!</span>
      </h2>
      <p className="mb-4 font-kumbhSans">07412566217</p>
    </motion.div>
  );
};

export default Address;
