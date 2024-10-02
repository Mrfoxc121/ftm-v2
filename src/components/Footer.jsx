import { useEffect, useState, useRef } from "react";
import FOOTER from "../assets/fullthrottle-logo.svg";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  const ref = useRef(null);
  const [activeSection, setActiveSection] = useState("#home");

  // Function to check if the link is active
  const isActive = (hash) => activeSection === hash;

  useEffect(() => {
    const sections = ["#home", "#services", "#about", "#contact"];
    const sectionElements = sections.map((id) => document.querySelector(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 } // Adjust this value to control when the section is considered in view
    );

    sectionElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <motion.div
      ref={ref}
      className="col-span-12 row-span-1 flex flex-col justify-center items-center"
    >
      <a href="/">
        <img src={FOOTER} alt="" className="h-[40px] mt-20 mb-10" />
      </a>
      <div className="text-slate-100 mb-10 font-lato tracking-wide">
        <ul className="flex gap-10 md:gap-20 text-xs md:text-xl cursor-pointer">
          <li
            className={`hover:border-orange-500 border-b-2 ${
              isActive("#home")
                ? "text-orange-500 border-orange-500 border-b-2"
                : ""
            }`}
          >
            <Link
              smooth
              to="/#home"
              id="home"
              onClick={() => handleClick("#home")}
            >
              Home
            </Link>
          </li>

          <li
            className={`hover:border-orange-500 border-b-2 ${
              isActive("#services")
                ? "text-orange-500 border-orange-500 border-b-2"
                : ""
            }`}
          >
            <Link
              smooth
              to="/#services"
              id="services"
              onClick={() => handleClick("#services")}
            >
              Services
            </Link>
          </li>
          <li
            className={`hover:border-orange-500 border-b-2 ${
              isActive("#about")
                ? "text-orange-500 border-orange-500 border-b-2"
                : ""
            }`}
          >
            <Link
              smooth
              to="/#about"
              id="about"
              onClick={() => handleClick("#about")}
            >
              About
            </Link>
          </li>
          <li
            className={`hover:border-orange-500 border-b-2 ${
              isActive("#contact")
                ? "text-orange-500 border-orange-500 border-b-2"
                : ""
            }`}
          >
            <Link
              smooth
              to="/#contact"
              id="contact"
              onClick={() => handleClick("#contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-5 md:gap-10 mb-10">
        <a href="">
          <FaFacebook className="text-slate-400 md:text-2xl hover:text-orange-500" />
        </a>
        <a href="">
          <FaTiktok className="text-slate-400 md:text-2xl hover:text-orange-500" />
        </a>
        <a href="">
          <FaInstagram className="text-slate-400 md:text-2xl hover:text-orange-500" />
        </a>
        <a href="">
          <FaYoutube className="text-slate-400 md:text-2xl hover:text-orange-500" />
        </a>
      </div>
      <div className="text-xs text-slate-400 flex gap-2 mb-4">
        <div>
          <Link className="hover:text-orange-500" to="/terms-conditions">
            Terms & Conditions
          </Link>
        </div>
        <div>
          <Link className="hover:text-orange-500" to="/privacy-policy">
            Privacy Policy
          </Link>
        </div>
      </div>
      <p className="text-xs text-slate-400 mb-10">
        Copyright © 2024 Full Throttle Garage. All rights reserved.
      </p>
    </motion.div>
  );
};

export default Footer;
