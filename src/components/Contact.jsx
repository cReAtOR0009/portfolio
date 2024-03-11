// require('dotenv').config()
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { socials } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!form.name || !form.email || !form.message) {
      toast.error("Oops, something went wrong. An Empty Field Detected", {
        autoClose: 3000,
      });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Creator",
          from_email: form.email,
          to_email: import.meta.env.VITE_EMAIL,
          message: `${form.message}${form.email}`,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success(
            "Thank you!. I will get back to you as soon as possible, ",
            {
              autoClose: 3000,
            }
          );
          // alert("Thank you!. I will get back to you as soon as possible, ");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          toast.error("Oops, something went wrong. Please try again.!", {
            autoClose: 3000,
          });
          console.error(error);

          // alert("Oops, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      styles={{ justifyContent: "start" }}
    >
      <motion.div
        variants={slideIn("up", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Reach Me Here</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="tell me what you want"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className={`bg-[#804dee] ${loading?"bg-[red]":""} py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        <motion.div className="flex gap-4 py-2 flex-wrap">
          {socials.map((social, index) => (
            <motion.div
              key={social.name}
              onClick={() => window.open(social.link, "_blank")}
              className="w-[35px] h-[35px] text-center justify-center text-[#fff] border-2 border-tertiary  cursor-pointer rounded-[50%] p-[10px]"
            >
              <div className="flex flex-col justify-center items-center">
                <h1>
                  <social.icon fontSize="1em" color="#915eff" />
                </h1>
                <p style={{ fontSize: "10px" }}>{social.platform}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        variants={slideIn("up", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] sm:h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
