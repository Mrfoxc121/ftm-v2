import { useEffect, useState } from "react";
import AnimatedPage from "../components/AnimatedPage";

const CookiePolicy = () => {
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
          Cookie Policy
        </h1>
        <div className="text-slate-300 grid grid-cols-12 gap-6 p-6 rounded-lg">
          {/* Introduction Section */}
          <section className="col-span-12 text-center mb-10">
            <h2 className="text-lg lg:text-2xl font-semibold mb-2 bg-slate-100 text-slate-900 py-1 px-6 rounded-lg inline-block">
              Introduction
            </h2>
            <p className="mt-4 mx-auto w-full md:w-2/3 lg:w-1/2 text-sm lg:text-lg">
              This Cookie Policy explains how we use cookies and similar technologies on our website. By continuing to browse or use our site, you agree to our use of cookies as described in this policy. If you do not agree with our use of cookies, you can change your browser settings at any time.
            </p>
          </section>

          {/* What are Cookies? */}
          <section className="col-span-12 md:col-span-6 flex flex-col items-center bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-md p-6 rounded-lg">
            <h2 className="text-lg lg:text-2xl font-semibold mb-6 bg-slate-100 text-slate-900 py-1 px-6 rounded-lg">
              What are Cookies?
            </h2>
            <p className="text-sm lg:text-lg">
              Cookies are small text files that are placed on your device to help our website provide a better user experience. Cookies are widely used to make websites work efficiently, as well as to provide information to the owners of the site.
            </p>
          </section>

          {/* Types of Cookies We Use */}
          <section className="col-span-12 md:col-span-6 flex flex-col items-center bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-md p-6 rounded-lg">
            <h2 className="text-lg lg:text-2xl font-semibold mb-6 bg-slate-100 text-slate-900 py-1 px-6 rounded-lg">
              Types of Cookies We Use
            </h2>
            <p className="text-sm lg:text-lg">
              We use the following types of cookies on our website:
            </p>
            <ul className="list-disc list-inside ml-4 mt-2 text-sm lg:text-lg">
              <li>
                <strong>Strictly Necessary Cookies:</strong> These cookies are essential for the operation of our website and cannot be turned off in our systems.
              </li>
              <li>
                <strong>Performance Cookies:</strong> These cookies collect information about how visitors use our site, allowing us to improve its performance.
              </li>
              <li>
                <strong>Functional Cookies:</strong> These cookies allow our website to remember choices you make and provide enhanced, personalized features.
              </li>
              <li>
                <strong>Targeting Cookies:</strong> These cookies are used to deliver adverts that are more relevant to you and your interests.
              </li>
            </ul>
          </section>

          {/* Managing Cookies */}
          <section className="col-span-12 md:col-span-6 flex flex-col items-center bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-md p-6 rounded-lg">
            <h2 className="text-lg lg:text-2xl font-semibold mb-6 bg-slate-100 text-slate-900 py-1 px-6 rounded-lg">
              Managing Cookies
            </h2>
            <p className="text-sm lg:text-lg">
              You can control and manage cookies through your browser settings. Most browsers allow you to refuse the setting of all or some cookies. However, blocking all cookies will affect the usability of many websites, including ours.
            </p>
            <p className="mt-4 text-sm lg:text-lg">
              For more information on how to manage cookies, visit{" "}
              <a
                href="https://www.aboutcookies.org/"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                aboutcookies.org
              </a>.
            </p>
          </section>

          {/* Third-Party Cookies */}
          <section className="col-span-12 md:col-span-6 flex flex-col items-center bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-md p-6 rounded-lg">
            <h2 className="text-lg lg:text-2xl font-semibold mb-6 bg-slate-100 text-slate-900 py-1 px-6 rounded-lg">
              Third-Party Cookies
            </h2>
            <p className="text-sm lg:text-lg">
              Some cookies on our website are placed by third parties, such as Google Analytics, to collect data on user behavior. These cookies are subject to the respective privacy policies of these third parties.
            </p>
          </section>

          {/* Updates to This Cookie Policy */}
          <section className="col-span-12 md:col-span-6 flex flex-col items-center bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700 shadow-md p-6 rounded-lg">
            <h2 className="text-lg lg:text-2xl font-semibold mb-6 bg-slate-100 text-slate-900 py-1 px-6 rounded-lg">
              Updates to This Cookie Policy
            </h2>
            <p className="text-sm lg:text-lg">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this page periodically to stay informed about our use of cookies.
            </p>
          </section>

          {/* Contact Information */}
          <section className="col-span-12 flex flex-col items-center justify-center my-6 text-center">
            <h2 className="text-lg lg:text-2xl font-semibold mb-2">Contact Us</h2>
            <p className="text-sm lg:text-lg">
              If you have any questions about our cookie policy, please contact us at:
            </p>
            <address className="not-italic text-sm lg:text-lg">
              Danial Carrington <br />
              Full Throttle Maps, Old House Farm, Harwich Road, Beaumont,
              Clacton on Sea, Essex, CO160AU <br />
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

export default CookiePolicy;
