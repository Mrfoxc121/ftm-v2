import { useRef, useState } from "react";
import SPANNER from "../assets/spanner.svg";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useScroll, motion } from "framer-motion";


const News = () => {
  const [email, setEmail] = useState("");

  const ref = useRef(HTMLDivElement);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your Emailjs serviceID, templateID, and public key
    const serviceID = "service_sernlrm";
    const templateID = "template_btta2bt";
    const publicKey = "EIFwnNTDelBkKS_6O";

    // create an object that contains dynamic template params
    const templateParams = {
      from_email: email,
      to_name: "Admin",
    };

    // use emailjs to send your email
    try {
      const res = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );
      console.log(res);
      toast.success("Email sent successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setEmail(""); // Clear the email input
    } catch (err) {
      console.log("Error sending email", err);
      toast.error("Email not sent!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  
  return (
    <motion.div
      ref={ref}
      style={{
        opacity: scrollYProgress,
        scale: scrollYProgress,
      }}
      id="news"
      className="col-span-12 row-span-1 flex flex-col justify-center items-center rounded-xl text-slate-100 my-10"
    >
      <div className="flex fle-col gap-4 items-center justify-center mb-4">
        <img src={SPANNER} alt="" className="h-[50px] lg:h-[100px]" />
        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold font-lato tracking-wide">
          Want <span className="text-orange-400">10%</span> off?
        </h2>
      </div>
      <p className=" w-[70%] md:w-full text-sm text-center text-slate-100 mb-4">
        Get weekly car maintenance tips sent to your inbox and 10% off your
        first service
      </p>
      <form
        className="flex justify-center items-center gap-2"
        onSubmit={handleSubmit}
      >
        <label htmlFor="" className="hidden">
          Email
        </label>
        <input
          type="email"
          placeholder="youremail.address.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border border-1 border-orange-400 py-3 px-10 rounded-lg placeholder:text-slate-300 text-sm"
        />
        <motion.button 
        whileHover={{ scale: 1.03, textShadow: "0px 0px 4px rgb(255,255,255)", boxShadow: "0px 0px 4px rgb(255,255,255)", }}
        className="py-3 px-6 bg-slate-100   text-slate-900 font-bold rounded-lg text-sm">
          Subscribe
        </motion.button>
        <ToastContainer />
      </form>
    </motion.div>
  );
};

export default News;
