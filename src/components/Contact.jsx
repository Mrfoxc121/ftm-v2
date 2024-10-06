import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { useScroll, motion } from "framer-motion";

const InputField = ({ type, placeholder, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="py-2 px-6 mb-2 rounded-md text-slate-100 bg-slate-700 placeholder:text-slate-100 w-full"
  />
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    model: "",
    reg: "",
    message: "",
  });

  const { name, tel, email, model, reg, message } = formData;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!name || !tel || !email || !message) {
      toast.error("Please fill out all required fields!");
      return;
    }

    const serviceID = "service_sernlrm";
    const templateID = "template_z4b6f2h";
    const publicKey = "EIFwnNTDelBkKS_6O";

    const templateParams = {
      from_name: name,
      from_tel: tel,
      from_email: email,
      from_model: model,
      from_reg: reg,
      to_name: "Admin",
      message,
    };

    try {
      const res = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );
      console.log(res);
      toast.success("Email sent successfully!");

      // Clear the form after submission
      setFormData({
        name: "",
        tel: "",
        email: "",
        model: "",
        reg: "",
        message: "",
      });
    } catch (err) {
      console.error("Error sending email:", err);
      toast.error("Failed to send email!");
    }
  };

  return (
    <div
      id="contact"
      className="gap-10 lg:col-start-2 col-span-12 lg:col-span-6 row-span-2 flex flex-col justify-center items-center"
    >
      <motion.div
        ref={ref}
        style={{
          opacity: scrollYProgress,
          scale: scrollYProgress,
        }}
        className="bg-gradient-to-tl from-slate-800 via-slate-900 to-slate-800 hover:bg-gradient-to-tl hover:from-slate-800/40 hover:via-slate-900/40 hover:to-slate-800/40 transition-all duration-500 ring-1 hover:ring-2 ring-inset ring-slate-700  shadow-sm shadow-slate-700 p-4 rounded-xl"
      >
        <h2 className="text-3xl font-bold text-white my-10 font-lato tracking-wide">
          Contact Us
        </h2>
        <div className="w-[90%] md:w-[60%] lg:w-[70%]">
          <form className="flex flex-col gap-2 w-full" onSubmit={handleSubmit}>
            <InputField
              type="text"
              placeholder="Name"
              value={name}
              onChange={handleInputChange}
              name="name"
            />
            <InputField
              type="text"
              placeholder="Tel"
              value={tel}
              onChange={handleInputChange}
              name="tel"
            />
            <InputField
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleInputChange}
              name="email"
            />
            <div className="flex gap-2 my-2">
              <InputField
                type="text"
                placeholder="Model"
                value={model}
                onChange={handleInputChange}
                name="model"
              />
              <InputField
                type="text"
                placeholder="Reg"
                value={reg}
                onChange={handleInputChange}
                name="reg"
              />
            </div>
            <textarea
              className="w-full mb-2 py-2 px-6 rounded-md text-slate-100 bg-slate-700 placeholder:text-slate-100"
              placeholder="Write your problem here"
              value={message}
              onChange={handleInputChange}
              rows="6"
              name="message"
            ></textarea>
            <motion.button
              whileHover={{
                scale: 1.01,
                textShadow: "0px 0px 4px rgb(255,255,255)",
                boxShadow: "0px 0px 4px rgb(255,255,255)",
              }}
              className="py-3 px-6 bg-slate-100 hover:bg-white text-slate-900 font-bold rounded-lg text-sm w-full mb-6"
            >
              Send
            </motion.button>
            <ToastContainer />
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
