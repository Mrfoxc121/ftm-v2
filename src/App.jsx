import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "./layouts/MainLayout.jsx";
import ServicesLayout from "./layouts/ServicesLayout.jsx";
import ScrollToTop from "../utils/ScrollToTop.jsx";
import { AnimatePresence } from "framer-motion";

// Lazy load the Home component
const Home = lazy(() => import("./pages/Home.jsx"));
const MotCheckup  = lazy(() => import("./pages/MotCheckup.jsx"));
const EcuInfo  = lazy(() => import("./pages/EcuInfo.jsx"));
const WeildingWork  = lazy(() => import("./pages/WeldingWork.jsx"));
const EssentialMaintenance = lazy(() => import("./pages/EssentialMaintenance.jsx"));
const PrivacyPolicy  = lazy(() => import("./pages/Privacy.jsx"));
const TermsAndConditions   = lazy(() => import("./pages/TermsAndConditions.jsx"));
const CookiePolicy   = lazy(() => import("./pages/CookiePolicy.jsx"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <AnimatedRoutes />
      </AnimatePresence>
    </Router>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      {/* Suspense is used to wrap the lazy-loaded component, not as an empty wrapper */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Suspense fallback={<div className="flex items-center justify-center text-slate-100">Loading...</div>}>
              <Home />
            </Suspense>
          </MainLayout>
        }
      />
      <Route
        path="/mot-checkup"
        element={
          <ServicesLayout>
            <Suspense fallback={<div className="flex items-center justify-center text-slate-100">Loading...</div>}></Suspense>
            <MotCheckup />
          </ServicesLayout>
        }
      />
      <Route
        path="/ecu-info"
        element={
          <ServicesLayout>
            <Suspense fallback={<div className="flex items-center justify-center text-slate-100">Loading...</div>}></Suspense>
            <EcuInfo />
          </ServicesLayout>
        }
      />
      <Route
        path="/weilding-work"
        element={
          <ServicesLayout>
            <Suspense fallback={<div className="flex items-center justify-center text-slate-100">Loading...</div>}></Suspense>
            <WeildingWork />
          </ServicesLayout>
        }
      />
      <Route
        path="/essential-maintenance"
        element={
          <ServicesLayout>
            <Suspense fallback={<div className="flex items-center justify-center text-slate-100">Loading...</div>}></Suspense>
            <EssentialMaintenance />
          </ServicesLayout>
        }
      />
      <Route
        path="/privacy-policy"
        element={
          <ServicesLayout>
            <Suspense fallback={<div className="flex items-center justify-center text-slate-100">Loading...</div>}></Suspense>
            <PrivacyPolicy />
          </ServicesLayout>
        }
      />
      <Route
        path="/terms-conditions"
        element={
          <ServicesLayout>
            <Suspense fallback={<div className="flex items-center justify-center text-slate-100">Loading...</div>}></Suspense>
            <TermsAndConditions />
          </ServicesLayout>
        }
      />
      <Route
        path="/cookie-policy"
        element={
          <ServicesLayout>
            <Suspense fallback={<div className="flex items-center justify-center text-slate-100">Loading...</div>}></Suspense>
            <CookiePolicy />
          </ServicesLayout>
        }
      />
    </Routes>
  );
}

export default App;
