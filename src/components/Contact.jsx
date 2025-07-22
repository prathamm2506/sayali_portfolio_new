import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v6kgaki', 'template_37gtb6n', form.current, 'e_4GZJ4zkAZXmNdwg')
    e.target.reset()
  };
  return (
    <div className="flex flex-row eduu respoproj py-12" id="contactsec">
      <div className="w-2/4 conttext">
        <h1>Have a Project Idea? Let's Talk!</h1>
        <p>I'm always excited to collaborate on innovative tech ideas, whether it's app development, AI integration, or solving real-world problems. Feel free to reach out if you'd like to brainstorm ideas, discuss a project, or work on something impactful together. Let's learn, build, and create meaningful solutions! </p>
        <div>
          <small>Email me at</small>
          <p>prathammatkar2506@gmail.com</p>
        </div>
        <div>
            <small>Follow</small>
            <div className="socials">
                <a href="https://www.instagram.com/pratham_2506_/" target="_blank"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/pratham-matkar-a2bb77257/" target="_blank"><FaLinkedinIn /></a>
                <a href="https://github.com/prathamm2506" target="_blank"><FaGithub /></a>
            </div>
        </div>
      </div>

      <div className="w-2/4 formdiv">
        <form ref={form} onSubmit={sendEmail}>
        <div className="webcont mb-6">
            <input type="text" placeholder="Your name" name="name" />
          </div>

          {/* <div className="flex flex-row gap-8 mb-6">
            <input type="text" placeholder="Your number" />
            <input type="text" placeholder="Your address" />
          </div> */}
          <div className="webcont">
            <input type="text" placeholder="Your email" name="email"/>
          </div>
          <div className="webcont">
            <textarea
            rows="4"
              name="message"
              placeholder="Project details, context, how can I help ..."
            ></textarea>
          </div>

          <button className="button mt-6" type="submit">Get in touch</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;