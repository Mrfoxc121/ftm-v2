import splitStringUsingRegex from "../../utils/splitStringUsingRegex.jsx";
import { motion } from "framer-motion";

const subHeading = "FULL THROTTLE GARAGE";
const heading =
  "Your Trusted Partner in Vehicle Repair and Maintenance Services";
const desc =
  "Whether you're commuting to work, managing a fleet of vehicles, or planning a family road trip, we've got you covered with our comprehensive services. From routine maintenance to specialized care, we ensure every vehicle in your fleet or personal garage is ready for the road, delivering safety, reliability, and peace of mind wherever your journey takes you.";

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};

const Hero = () => {
  const subHeadingChars = splitStringUsingRegex(subHeading);
  const headingChars = splitStringUsingRegex(heading);
  const descChars = splitStringUsingRegex(desc);

  return (
    <header id="hero" className="relative bg-[url('../src/assets/heroImg.webp')] bg-no-repeat shadow-md col-span-12 row-span-1 flex justify-center items-center rounded-b-xl bg-cover bg-center h-screen text-slate-100">
      <div id="home" className="h-full w-full bg-slate-900/70 flex flex-col items-start justify-center px-6 sm:px-10 md:px-20 lg:pl-48 text-center md:text-left">
        <motion.p
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.03 }}
          className="font-Lato text-orange-500 font-extrabold mb-2 text-lg sm:text-xl shadow-md"
        >
          {subHeadingChars.map((char) => (
            <motion.span
              key={`${char}`}
              transition={{ duration: 1 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>

        <motion.h1
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.03 }}
          className="font-lato tracking-wide text-left text-3xl sm:text-4xl md:text-5xl font-bold w-[80%] lg:w-[60%] md:text-white mb-6 shadow-md leading-8"
        >
          {headingChars.map((char) => (
            <motion.span
              key={`${char}`}
              transition={{ duration: 0.35 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="reveal"
          transition={{ staggerChildren: 0.002 }}
          className="text-sm md:text-md text-left w-full sm:w-[80%] md:w-[60%] lg:w-[40%] mb-6 shadow-md tracking-wide leading-6"
        >
          {descChars.map((char) => (
            <motion.span
              key={`${char}`}
              transition={{ duration: 0.55 }}
              variants={charVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.p>

        <div className="flex items-center gap-2 sm:gap-4">
          <div>
            <motion.a
              href="#contact"
              className="bg-slate-100 border border-2 hover:bg-white px-6 py-2 text-xs lg:text-lg text-slate-900 font-semibold rounded-lg shadow-md"
              whileHover={{ scale: 1.03, textShadow: "0px 0px 4px rgb(255,255,255)", boxShadow: "0px 0px 4px rgb(255,255,255)", }}
            >
              Get in Touch
            </motion.a>
          </div>
          <a
            href="#news"
            className="bg-transparent border border-1 text-xs lg:text-lg border-orange-500 hover:border-slate-200 text-slate-100 font-semibold py-2 px-6 rounded-lg shadow-md"
          >
            Subscribe to our Newsletter
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
