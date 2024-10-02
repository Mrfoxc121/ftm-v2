import AnimatedPage from "../components/AnimatedPage";
import EcuServices from "../components/EcuServices";
import { useEffect, useState } from "react";

const EcuInfo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a timer to change the visibility state after 300ms
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // 300ms delay
    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <AnimatedPage>
      <div
        className={`grid grid-cols-12 text-slate-100 mt-5 lg:mt-20 transition-opacity duration-500 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* EcuServices component rendering */}
        <EcuServices />
      </div>
    </AnimatedPage>
  );
};

export default EcuInfo;

