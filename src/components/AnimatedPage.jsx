/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const animations = {
    initial: { y: 100, scale: 0.8 },
    animate: {  y: 0, scale: 1 },
    exit: { y: -100, scale: 0.8 },
}
const AnimatedPage = ({ children }) => {
  return (
  
  <motion.div  variants={animations} initial="initial" animate="animate" exit="exit" transition={{ duration: 1 }}>
    {children}
    </motion.div>

)
}

export default AnimatedPage;
