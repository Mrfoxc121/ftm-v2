import { useEffect, useState } from "react";
import AnimatedPage from "../components/AnimatedPage";

const PrivacyPolicy = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // 1 second delay
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
          Privacy Policy
        </h1>
        <div className="text-slate-300 grid grid-cols-12 gap-6 p-6 rounded-lg p-24">
          {/* Introduction Section */}
          <section className="col-span-12 text-center mb-10">
            <h2 className="text-lg lg:text-2xl font-semibold mb-2 bg-slate-100 text-slate-900 py-1 px-6 rounded-lg inline-block">
              Introduction
            </h2>
            <p className="mt-4 mx-auto w-full md:w-2/3 lg:w-1/2 text-sm lg:text-lg">
              We are committed to protecting your privacy and ensuring that your
              personal data is handled in accordance with UK law, including the
              UK General Data Protection Regulation (UK GDPR). This privacy
              policy explains how we collect, use, and protect your personal
              information.
            </p>
          </section>

          {/* First Two Columns */}
          <section className="col-span-12 md:col-span-6 flex flex-col items-center bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-md p-6 rounded-lg">
            <h2 className="text-lg lg:text-2xl font-semibold mb-6 bg-slate-100 text-slate-900 py-1 px-6 rounded-lg">
              Information We Collect
            </h2>
            <p className="text-sm lg:text-lg ">We may collect the following types of personal information:</p>
            <ul className="list-disc list-inside ml-4 mt-2 text-sm lg:text-lg">
              <li>
                Contact details such as name, email address, and phone number.
              </li>
              <li>
                Demographic information such as postcode, preferences, and
                interests.
              </li>
              <li>
                Technical data including IP address, browser type, and operating
                system.
              </li>
              <li>
                Any other information relevant to customer surveys, feedback, or
                offers.
              </li>
            </ul>
          </section>

          <section className="col-span-12 md:col-span-6 flex flex-col items-center bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-md p-6 rounded-lg">
            <h2 className="text-lg lg:text-2xl font-semibold mb-6 bg-slate-100 text-slate-900 py-1 px-6 rounded-lg">
              How We Use Your Information
            </h2>
            <p className="text-sm lg:text-lg">We use your personal information to:</p>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Provide and manage our services to you.</li>
              <li>
                Communicate with you about your account or any services you have
                requested.
              </li>
              <li>
                Improve our products and services through feedback and research.
              </li>
              <li>
                Comply with legal obligations and protect our legal rights.
              </li>
            </ul>
          </section>

          {/* Second Two Columns */}
          <section className="col-span-12 md:col-span-6 flex flex-col items-center bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-md p-6 rounded-lg">
            <h2 className="text-lg lg:text-2xl font-semibold mb-6 bg-slate-100 text-slate-900 py-1 px-6 rounded-lg">
              Data Security
            </h2>
            <p className="text-sm lg:text-lg">
              We are committed to ensuring that your information is secure. In
              order to prevent unauthorized access or disclosure, we have put in
              place suitable physical, electronic, and managerial procedures to
              safeguard and secure the information we collect.
            </p>
          </section>

          <section className="col-span-12 md:col-span-6 flex flex-col items-center bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-md p-6 rounded-lg">
            <h2 className="text-lg lg:text-2xl font-semibold mb-6 bg-slate-100 text-slate-900 py-1 px-6 rounded-lg">
              Your Rights
            </h2>
            <p className="text-sm lg:text-lg">Under UK GDPR, you have the right to:</p>
            <ul className="list-disc list-inside ml-4 mt-2 text-sm lg:text-lg">
              <li>Access the personal data we hold about you.</li>
              <li>Request the correction of inaccurate or incomplete data.</li>
              <li>Request the deletion of your personal data.</li>
              <li>Object to the processing of your personal data.</li>
              <li>Request the restriction of processing your personal data.</li>
              <li>
                Data portability, allowing you to obtain and reuse your personal
                data across different services.
              </li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at [Your
              Contact Email].
            </p>
          </section>

          <section className="col-span-12 md:col-span-6 flex flex-col items-center bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-md p-6 rounded-lg">
            <h2 className="text-lg lg{text-2xl font-semibold mb-6 bg-slate-100 text-slate-900 py-1 px-6 rounded-lg">
              Cookies
            </h2>
            <p className="text-sm lg:text-lg">
              Our website uses cookies to enhance your experience. By using our
              website, you agree to the use of cookies as described in our
              <a className="text-orange-500" href="/cookie-policy">{" "}Cookie Policy</a>. You can control your cookie preferences in your
              browser settings.
            </p>
          </section>

          <section className="col-span-12 md:col-span-6 flex flex-col items-center bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-md p-6 rounded-lg">
            <h2 className="text-lg lg:text-2xl font-semibold mb-6 bg-slate-100 text-slate-900 py-1 px-6 rounded-lg">
              Changes to This Policy
            </h2>
            <p className="text-sm lg:text-lg">
              We may update this privacy policy from time to time to reflect
              changes in our practices or legal requirements. We encourage you
              to review this page periodically to stay informed about how we
              protect your information.
            </p>
          </section>

          <section className="col-span-12 flex flex-col items-center justify-center my-6 text-center">
            <h2 className="text-lg lg:text-2xl font-semibold mb-2">Contact Us</h2>
            <p className="text-sm lg:text-lg">
              If you have any questions about this privacy policy or how we
              handle your personal data, please contact us at:
            </p>
            <address className="not-italic text-sm lg:text-lg">
              Danial Carrington <br />
              Full Throttle Maps, Old House Farm, Harwich Road, Beaumont,
              Clacton on Sea Essex, CO160AU <br />
              Email:{" "}
              <a
                href="mailto:fullthrottlemaps@gmail.com"
                className="text-orange-500 text-sm lg:text-lg"
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

export default PrivacyPolicy;
