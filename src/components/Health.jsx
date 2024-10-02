import { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import HEALTH from "../assets/heart-icon.svg";
import { RiCloseCircleFill } from "react-icons/ri";
import Modal from "./Modal";
import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
const Health = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(HTMLDivElement);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  return (
    <>
      <motion.div
        ref={ref}
        style={{
          opacity: scrollYProgress,
          scale: scrollYProgress,
        }}
        className="relative bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-sm  shadow-slate-700 col-span-6 lg:col-start-2 lg:col-span-3 row-span-1 flex flex-col justify-center items-center rounded-xl p-6 text-slate-100"
      >
        <Modal className="" open={open} onClose={() => setOpen(false)}>
          <div
            className={`absolute flex flex-col justify-center p-4 top-0 left-0 w-full h-full bg-slate-900/95 text-slate-300 z-50 transition-all ${
              open ? "scale-100 opacity-100" : "scale-125 opacity-0"
            }`}
          >
            <RiCloseCircleFill
              className="absolute right-2 top-2 md:top-4 md:right-4 text-slate-100 text-xl cursor-pointer"
              onClick={() => setOpen(false)}
            />

            <p className="text-xs md:text-sm mb-2">
              <b className="text-orange-500 text-md">
                Take advantage of our Free Health Inspections
              </b>{" "}
              to keep your vehicle in top shape. Our expert technicians will
              perform a thorough check-up, identifying any potential issues
              before they become costly problems.
            </p>
            <p className="text-xs md:text-sm">
              Whether you&apos;re maintaining a single car or managing a fleet,
              our complimentary inspection service gives you peace of mind and
              ensures your vehicle stays safe and reliable on the road.
            </p>
          </div>
        </Modal>

        <img
          className="h-[60px] md:h-[80px] lg:h-[100px] mb-4"
          src={HEALTH}
          alt=""
        />
        <p className="text-md md:text-xl">Free Health</p>
        <p className="text-xl md:text-2xl lg:text-3xl mb-8">Inspections</p>

        <motion.div
          whileHover={{
            scale: 1.03,
            textShadow: "0px 0px 4px rgb(255,255,255)",
            boxShadow: "0px 0px 4px rgb(255,255,255)",
          }}
          onClick={() => setOpen(true)}
          className="flex bg-slate-100 text-slate-900 items-center text-left gap-2 hover:bg-white py-1 px-4 rounded-lg"
        >
          <button className="text-sm md:text-base">Look Inside</button>
          <FaArrowAltCircleRight />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Health;
