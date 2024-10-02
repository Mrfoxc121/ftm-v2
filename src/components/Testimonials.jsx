import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useRef } from "react";
import { useScroll, motion} from "framer-motion";
const Testimonials = () => {
  const ref = useRef(HTMLDivElement);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  
  const names = [
    "Sarah L.",
    "Tom W.",
    "Emma R.",
    "James H",
    "Claire M.",
  ];
  const titles = [
    "Quick and Professional MOT Repairs",
    "Reliable Fleet Vehicle Maintenance",
    "Trustworthy Service for Young Drivers",
    "Expert Welding Work That Lasts",
    "Comprehensive Service for Family Safety",
  ];
  const paragraphs = [
    "'I took my car to Full Throttle Maps for a full service, and I’m so glad I did. The team was incredibly knowledgeable, and they went above and beyond to make sure everything was perfect. I now have peace of mind knowing my car is road-ready and safe for my family.'",
    "'I needed some welding work done on my van, and Full Throttle Maps exceeded my expectations. The repairs were flawless, and my van feels like new. Plus, the staff were friendly and kept me informed throughout. Great service all around!'",
    "'As a young driver, finding a garage I can trust was important to me. Full Throttle Maps made everything easy and stress-free. Their full service package was thorough, and I left feeling confident that my car was in great shape. I’ll definitely be back!'",
    "'I’ve been bringing my fleet vehicles to Full Throttle Maps for years, and they never disappoint. Their comprehensive service packages keep my vehicles running smoothly, and their welding services are top-notch. Reliable, efficient, and always professional—highly recommend!'",
    "'Full Throttle Maps saved the day! My car needed urgent repairs before an MOT, and they handled everything quickly and professionally. The team was so friendly and explained the whole process. My car passed the MOT with flying colors, and I couldn’t be happier with the service!'",
  ];

  const date = ["- July 15, 2024", "- August 3, 2024", "- June 28, 2024", "- May 22, 2024", "- August 10, 2024"];

  const stars = [
    <div className="flex gap-2" key="1">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
    </div>,
    <div className="flex gap-2" key="2">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
    </div>,
    <div className="flex gap-2"  key="3">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
    </div>,
    <div className="flex gap-2" key="4">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
    </div>,
    <div className="flex gap-2" key="5">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
    </div>,
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 4000);

    return () => clearTimeout(timer); // Cleanup to prevent memory leaks
  }, [index, names.length]);

  return (
    <motion.div 
    ref={ref}
    style={{
      opacity: scrollYProgress,
      scale: scrollYProgress,
    }}
    className="bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-sm  shadow-slate-700 col-span-12 lg:col-span-4 row-span-2  rounded-xl p-6 text-slate-100">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-lato tracking-wide text-2xl lg:text-3xl xl:text-4xl font-bold mb-8 lg:mb-20">
          Talk of the Town
        </h2>
        <h3 className="font-lato tracking-wide text-md lg:text-lg xl:text-xl text-slate-800 bg-slate-100 px-4 py-1 rounded-lg font-bold mb-6">
          {titles[index]}
        </h3>
        <p className="w-[80%] text-slate-300 text-sm mb-2">
          {paragraphs[index]}
        </p>
      </div>
      <div className="flex flex-col justify-center items-end mt-5 mr-20">
        <div className="flex gap-2 text-orange-500 mb-2">
          {stars[index]}
        </div>
        <p className="text-slate-100 text-xs md:text-sm">{names[index]}</p>
        <p className=" text-xs text-slate-400">{date[index]}</p>
      </div>
    </motion.div>
  );
};

export default Testimonials;
