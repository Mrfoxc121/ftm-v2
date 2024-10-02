import { useEffect, useState } from "react";
import AnimatedPage from "../components/AnimatedPage";

const TermsAndConditions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // 0.3 second delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatedPage>
      <div
        className={`flex flex-col justify-center items-center m-10 p-8 transition-opacity duration-500 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-slate-100 text-2xl lg:text-4xl font-bold text-center mb-6">
          Terms and Conditions
        </h1>
        <div className="text-slate-300 grid grid-cols-12 gap-6 p-6 rounded-lg">
          {/* Introduction Section */}
          <section className="col-span-12 text-center mb-10">
            <h2 className="text-lg lg:text-2xl font-semibold mb-2 bg-slate-100 text-slate-900 py-1 px-6 rounded-lg inline-block">
              Introduction
            </h2>
            <p className="mt-4 mx-auto w-full md:w-2/3 lg:w-1/2 text-sm lg:text-lg">
              These Terms and Conditions ("Terms") govern your use of our
              website and services. By accessing or using our website, you agree
              to be bound by these Terms. If you do not agree to these Terms,
              please do not use our website.
            </p>
          </section>

          {/* First Two Columns */}
          <section className="col-span-12 md:col-span-6 flex flex-col items-center bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-md p-6 rounded-lg">
            <h2 className="text-lg lg:text-2xl font-semibold mb-6 bg-slate-100 text-slate-900 py-1 px-6 rounded-lg">
              Use of Website
            </h2>
            <p className="text-sm lg:text-lg">
              You agree to use our website only for lawful purposes. You must
              not use our website in any way that breaches any applicable local,
              national, or international law or regulation.
            </p>
          </section>

          <section className="col-span-12 md:col-span-6 flex flex-col items-center bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-md p-6 rounded-lg">
            <h2 className="text-lg lg:text-2xl font-semibold mb-6 bg-slate-100 text-slate-900 py-1 px-6 rounded-lg">
              Intellectual Property
            </h2>
            <p className="text-sm lg:text-lg">
              All content on our website, including text, graphics, logos, and
              images, is the property of Full Throttle Maps and is protected by
              UK and international copyright laws. You may not reproduce,
              distribute, or otherwise use any content from our website without
              our prior written consent.
            </p>
          </section>

          {/* Second Two Columns */}
          <section className="col-span-12 md:col-span-6 flex flex-col items-center bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-md p-6 rounded-lg">
            <h2 className="text-lg lg:text-2xl font-semibold mb-6 bg-slate-100 text-slate-900 py-1 px-6 rounded-lg">
              Limitation of Liability
            </h2>
            <p className="text-sm lg:text-lg">
              We shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising out of your use or
              inability to use our website or services, even if we have been
              advised of the possibility of such damages.
            </p>
          </section>

          <section className="col-span-12 md:col-span-6 flex flex-col items-center bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-md p-6 rounded-lg">
            <h2 className="text-lg lg:text-2xl font-semibold mb-6 bg-slate-100 text-slate-900 py-1 px-6 rounded-lg">
              Governing Law
            </h2>
            <p className="text-sm lg:text-lg">
              These Terms and any disputes arising under or related to these
              Terms shall be governed by the laws of England and Wales. Any
              legal proceedings must be brought in the courts of England and
              Wales.
            </p>
          </section>

          <section className="col-span-12 md:col-span-6 flex flex-col items-center bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-md p-6 rounded-lg">
            <h2 className="text-lg lg:text-2xl font-semibold mb-6 bg-slate-100 text-slate-900 py-1 px-6 rounded-lg">
              Changes to These Terms
            </h2>
            <p className="text-sm lg:text-lg">
              We may update these Terms from time to time. Any changes will be
              posted on this page, and you are encouraged to review these Terms
              periodically. Your continued use of our website after any changes
              constitutes your acceptance of the new Terms.
            </p>
          </section>

          {/* Contact Information */}
          <section className="col-span-12 flex flex-col items-center justify-center my-6 text-center">
            <h2 className="text-lg lg:text-2xl font-semibold mb-2">Contact Us</h2>
            <p className="text-sm lg:text-lg">
              If you have any questions about our terms and conditions, please contact us at:
            </p>
            <address className="not-italic text-sm lg:text-lg">
              Danial Carrington <br />
              Full Throttle Maps, Old House Farm, Harwich Road, Beaumont,
              Clacton on Sea, Essex, CO16 0AU <br />
              Email:{" "}
              <a
                href="mailto:fullthrottlemaps@gmail.com"
                className="text-blue-500 text-sm lg:text-lg"
              >
                fullthrottlemaps@gmail.com
              </a>{" "}
              <br />
              Phone: 07412566217
            </address>
          </section>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default TermsAndConditions;
