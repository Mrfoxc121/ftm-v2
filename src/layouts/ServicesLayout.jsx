import { lazy, Suspense } from "react";

const ServicesNavbar = lazy(() => import("../components/ServicesNavbar"));
const Footer = lazy(() => import("../components/ServicesFooter"));

const ServicesLayout = ({ children }) => {
  return (
    <>
      <Suspense fallback={<div className="text-center">Loading Services...</div>}>
        <ServicesNavbar />
        {children}
        <Footer />
      </Suspense>
    </>
  );
};

export default ServicesLayout;
