import { lazy, Suspense, useEffect, useState } from "react";
import AnimatedPage from "../components/AnimatedPage";

// Lazy load components with correct spelling
const ExpertDiagnostics = lazy(() => import("../components/ExpertDiagnostics"));
const MaintenanceAndRepair = lazy(() =>
  import("../components/MaintenanceAndRepair")
);
const ServicesPackage = lazy(() => import("../components/ServicesPackage"));

const EssentialMaintenance = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // 0.3 seconds delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatedPage>
      <div
        id="services"
        className={`grid grid-cols-12 text-slate-100 mt-5 lg:mt-20 transition-opacity duration-500 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          {/* Essential Maintenance */}
          <MaintenanceAndRepair />
          {/* Expert Diagnostics */}
          <ExpertDiagnostics />
          {/* Service Packages */}
          <ServicesPackage />
        </Suspense>
      </div>
    </AnimatedPage>
  );
};

export default EssentialMaintenance;
