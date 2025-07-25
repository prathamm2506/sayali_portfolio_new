import React, { useRef } from "react";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_v6kgaki",
      "template_37gtb6n",
      form.current,
      "e_4GZJ4zkAZXmNdwg"
    );
    e.target.reset();
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between gap-12 py-12 px-4 max-w-6xl mx-auto" id="contactsec">
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">Have a Project Idea? Let's Talk!</h1>
        <p className="text-lg text-gray-800">
          I'm always excited to collaborate on innovative tech ideas, whether it's app development, AI integration, or solving real-world problems. Feel free to reach out if you'd like to brainstorm ideas, discuss a project, or work on something impactful together. Let's learn, build, and create meaningful solutions!
        </p>
        <div>
          <small className="text-base text-gray-600">Email me at</small>
          <p className="text-lg font-medium">prathammatkar2506@gmail.com</p>
        </div>
        <div>
          <small className="text-base text-gray-600">Follow</small>
          <div className="flex gap-4 mt-2">
            <a href="https://www.instagram.com/pratham_2506_/" target="_blank" rel="noopener noreferrer" className="bg-black text-white text-xl p-2 rounded-full hover:bg-yellow-500 transform hover:-translate-y-1 transition">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/pratham-matkar-a2bb77257/" target="_blank" rel="noopener noreferrer" className="bg-black text-white text-xl p-2 rounded-full hover:bg-yellow-500 transform hover:-translate-y-1 transition">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/prathamm2506" target="_blank" rel="noopener noreferrer" className="bg-black text-white text-xl p-2 rounded-full hover:bg-yellow-500 transform hover:-translate-y-1 transition">
              <FaGithub />
            </a>
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
              className="w-full px-4 py-3 text-lg rounded-lg border-2 border-black shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full px-4 py-3 text-lg rounded-lg border-2 border-black shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div>
            <textarea
              name="message"
              rows="4"
              placeholder="Project details, context, how can I help ..."
              className="w-full px-4 py-3 text-lg rounded-lg border-2 border-black shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-block px-6 py-3 text-lg font-medium text-black bg-yellow-400 border-2 border-black rounded-md shadow-md hover:shadow-lg transition hover:-translate-y-1"
          >
            Get in touch
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
