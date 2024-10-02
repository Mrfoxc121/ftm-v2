import { FaArrowAltCircleRight } from "react-icons/fa";
import { useRef, useState } from "react";
import { useScroll, motion} from "framer-motion";
import { RiCloseCircleFill } from "react-icons/ri";
import LOYALTY from "../assets/loyalty.svg";
import Modal from "./Modal";
const SevenDay = () => {
  const [open, setOpen] = useState(false);

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
  
    className="relative bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-sm  shadow-slate-700 col-span-6 lg:col-span-3 row-span-1 flex  flex-col justify-center items-center rounded-xl text-slate-100 p-6 ">

<Modal className="" open={open} onClose={() => setOpen(false)}>
          <div className={`absolute flex flex-col justify-center p-4 top-0 left-0 w-full h-full bg-slate-900/95 text-slate-300 z-50 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
            <RiCloseCircleFill className="absolute right-2 top-2 md:top-4 md:right-4 text-slate-100 text-xl cursor-pointer" onClick={() => setOpen(false)}/>
            
            <p className="text-xs md:text-sm mb-2">At<b className="text-orange-500 text-md"> Full Throttle Maps</b>, we value your loyalty and believe in rewarding your continued trust in us. Our Loyalty Rewards are designed to show our appreciation to every return customer.</p>
            <p className="text-xs md:text-sm"> As a valued customer, you&apos;ll receive exclusive benefits, special offers.</p>
           
          </div>
        </Modal>

      <img
        className="h-[70px] md:h-[90px] lg:h-[110px] mb-4"
        src={LOYALTY}
        alt=""
      />
      <p className="text-md md:text-xl">We Reward</p>
      <p className=" text-xl md:text-2xl lg:text-3xl mb-8">Loyalty</p>
      <motion.div 
      whileHover={{ scale: 1.03, textShadow: "0px 0px 4px rgb(255,255,255)", boxShadow: "0px 0px 4px rgb(255,255,255)", }}
      onClick={() => setOpen(true)} 
      className="flex bg-slate-100 text-slate-900 items-center text-left gap-2 hover:bg-white py-1 px-4 rounded-lg">
        <button  className="text-sm md:text-base">Look Inside</button>
        <FaArrowAltCircleRight />
      </motion.div>
    </motion.div>
  );
};

export default SevenDay;
