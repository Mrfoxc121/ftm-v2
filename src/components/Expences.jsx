import FORD from "../assets/Ford Logo.svg";
import AUDI from "../assets/Audi Logo.svg";
import MINI from "../assets/Bmw Mini 1 Logo.svg";
import VAUXHALL from "../assets/vauxhall.svg";
import BMW from "../assets/bmw-logo.svg";
import { useRef } from "react";
import { useScroll, motion} from "framer-motion";
const images = [FORD, AUDI, MINI, VAUXHALL, BMW];

const Expences = () => {
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
    className="col-span-12 row-span-1 flex flex-col justify-center items-center rounded-xl text-slate-100 p-8">
      <h2 className="font-lato tracking-wide text-2xl md:text-3xl font-bold text-white text-left my-6">
          Extensive Experience with all popular models
        </h2>
        <div className="flex justify-center items-center gap-7 md:gap-20 my-6">
          {images.map((image, index) => (
            <img key={index} className="flex flex-col h-[40px] md:h-[60px]" src={image} alt={`Gallery image ${index + 1}`} />
          ))}
        </div>
      </motion.div>
  );
};

export default Expences;
