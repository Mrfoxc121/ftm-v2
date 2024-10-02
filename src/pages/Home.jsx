import { lazy, Suspense, useEffect, useState } from "react";
import { useLocation } from "react-router";

// Corrected import paths
const Address = lazy(() => import("../components/Address"));
const Contact = lazy(() => import("../components/Contact"));
const Expenses = lazy(() => import("../components/Expences"));
const Ecu = lazy(() => import("../components/Ecu"));
const Health = lazy(() => import("../components/Health"));
const Hero = lazy(() => import("../components/Hero"));
const Loyalty = lazy(() => import("../components/Loyalty"));
const Map = lazy(() => import("../components/Map"));
const Mechanic = lazy(() => import("../components/Mechanic"));
const Mot = lazy(() => import("../components/Mot"));
const News = lazy(() => import("../components/News"));
const Reviews = lazy(() => import("../components/Reviews"));
const SevenDay = lazy(() => import("../components/SevenDay"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const Welding = lazy(() => import("../components/Welding"));

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // 0.3 second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      className={`flex relative justify-center items-center w-full bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 scroll-smooth transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="grid grid-cols-12 gap-4 w-full">
        {/* Separate Suspense blocks for each component */}
        <Suspense fallback={<div>Loading Hero...</div>}>
          <Hero />
        </Suspense>

        <Suspense fallback={<div>Loading Mot...</div>}>
          <Mot />
        </Suspense>

        <Suspense fallback={<div>Loading Ecu...</div>}>
          <Ecu />
        </Suspense>

        <Suspense fallback={<div>Loading Welding...</div>}>
          <Welding />
        </Suspense>

        <Suspense fallback={<div>Loading Mechanic...</div>}>
          <Mechanic />
        </Suspense>

        <Suspense fallback={<div>Loading Expenses...</div>}>
          <Expenses />
        </Suspense>

        <Suspense fallback={<div>Loading Reviews...</div>}>
          <Reviews />
        </Suspense>

        <Suspense fallback={<div>Loading Loyalty...</div>}>
          <Loyalty />
        </Suspense>

        <Suspense fallback={<div>Loading Testimonials...</div>}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<div>Loading Health...</div>}>
          <Health />
        </Suspense>

        <Suspense fallback={<div>Loading Seven Day...</div>}>
          <SevenDay />
        </Suspense>

        <Suspense fallback={<div>Loading News...</div>}>
          <News />
        </Suspense>

        <Suspense fallback={<div>Loading Contact...</div>}>
          <Contact />
        </Suspense>

        <Suspense fallback={<div>Loading Map...</div>}>
          <Map />
        </Suspense>

        <Suspense fallback={<div>Loading Address...</div>}>
          <Address />
        </Suspense>
      </div>
    </main>
  );
};

export default Home;
