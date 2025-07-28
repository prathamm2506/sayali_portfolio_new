import React, { useRef } from "react";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_0o96foj",
      "template_teghqii",
      form.current,
      "e_4GZJ4zkAZXmNdwg"
    );
    e.target.reset();
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-12 py-12 px-4 max-w-6xl mx-auto pt-24 md:pt-0" id="contact">
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">Collaborate With Me – Let’s Create Together</h1>
        <p className="text-2xl text-gray-800">
          Whether you’re a brand, fellow creator, or someone with a fun idea — I’d love to hear from you!
        </p>
        <p className="text-2xl text-gray-800">I’m open to partnerships, UGC content, and creative collabs. Let’s make something unforgettable 💫</p>
        <div>
          <small className="text-xl text-gray-800">Email me at</small>
          <p className="text-2xl font-medium">sayali.nikam004@gmail.com</p>
        </div>
        <div>
          <small className="text-xl text-gray-800">DM me on Instagram</small>
          <div className="flex gap-4 mt-2">
            <a href="https://www.instagram.com/sayaleee_u_know_/" target="_blank" rel="noopener noreferrer" className="bg-black text-white text-xl p-2 rounded-full hover:bg-[#ffadc1] transform hover:-translate-y-1 transition">
              <FaInstagram />
            </a>
            {/* <a href="https://www.linkedin.com/in/pratham-matkar-a2bb77257/" target="_blank" rel="noopener noreferrer" className="bg-black text-white text-xl p-2 rounded-full hover:bg-[#ffadc1] transform hover:-translate-y-1 transition">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/prathamm2506" target="_blank" rel="noopener noreferrer" className="bg-black text-white text-xl p-2 rounded-full hover:bg-[#ffadc1] transform hover:-translate-y-1 transition">
              <FaGithub />
            </a> */}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full px-4 py-3 text-lg rounded-lg border-2 border-black shadow-md focus:outline-none focus:ring-2 focus:ring-[#ffadc1]"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full px-4 py-3 text-lg rounded-lg border-2 border-black shadow-md focus:outline-none focus:ring-2 focus:ring-[#ffadc1]"
            />
          </div>
          <div>
            <textarea
              name="message"
              rows="4"
              placeholder="Project details, context, how can I help ..."
              className="w-full px-4 py-3 text-lg rounded-lg border-2 border-black shadow-md focus:outline-none focus:ring-2 focus:ring-[#ffadc1]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-block px-6 py-3 text-lg font-medium text-black bg-[#ffadc1] border-2 border-black rounded-full shadow-md hover:shadow-lg transition hover:-translate-y-1"
          >
            Get in touch
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
