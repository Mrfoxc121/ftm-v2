import { useEffect, useState, Suspense, lazy } from "react";
import AnimatedPage from "../components/AnimatedPage";

// Lazy load WeldingServices component
const WeldingServices = lazy(() => import("../components/WeldingServices"));

const WeldingWork = () => {
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
        {/* Welding Work */}
        <Suspense fallback={<div className="text-center">Loading Welding Services...</div>}>
          <WeldingServices />
        </Suspense>
      </section>
    </AnimatedPage>
  );
};

export default WeldingWork;
