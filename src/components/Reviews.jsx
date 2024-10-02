import { useRef } from "react";
import { FaStar } from "react-icons/fa";
import { useScroll, motion } from "framer-motion";

const Reviews = () => {
  const ref = useRef(HTMLDivElement);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  return (
    <motion.div
      id="about"
      ref={ref}
      style={{
        opacity: scrollYProgress,
        scale: scrollYProgress,
      }}
      className="bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-sm  shadow-slate-700 lg:col-start-2 col-span-6 lg:col-span-3 row-span-1 flex flex-col justify-center items-center rounded-xl p-6"
    >
      <h2 className="font-lato tracking-wide text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
        99%
      </h2>
      <div className="flex gap-2 text-2xl  md:text-3xl lg:text-4xl text-orange-500 mb-4">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p className="text-white text-md md:text-xl">Five Star</p>
      <p className="text-white text-xl md:text-2xl lg:text-3xl">Reviews</p>
    </motion.div>
  );
};

export default Reviews;
