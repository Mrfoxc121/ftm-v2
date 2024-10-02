import { lazy, Suspense, useEffect, useState } from "react";
import AnimatedPage from "../components/AnimatedPage";

// Lazy load PreMotServices component
const PreMotServices = lazy(() => import("../components/PreMotServices"));

const MotCheckup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // 0.3 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatedPage>
      <section
        className={`grid grid-cols-12 text-slate-100 mt-5 lg:mt-20 transition-opacity duration-500 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Pre-MOT Services */}
        <Suspense fallback={<div className="text-center">Loading Pre-MOT Services...</div>}>
          <PreMotServices />
        </Suspense>
      </section>
    </AnimatedPage>
  );
};

export default MotCheckup;
