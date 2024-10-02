import { lazy, Suspense } from "react";

const MainNavbar = lazy(() => import("../components/MainNavbar"));
const Footer = lazy(() => import("../components/Footer"));

const MainLayout = ({ children }) => {
  return (
    <>
      {/* Separate Suspense for Navbar */}
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <MainNavbar />
      </Suspense>

      {/* Children of the page */}
      {children}

      {/* Separate Suspense for Footer */}
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default MainLayout;

