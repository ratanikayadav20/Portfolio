import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_o1tcypj",
      "template_r5cpnft",
      form.current,
      "-NDh169ktS5B86mdn"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__icon" />
            <h4>Email</h4>
            <h5>dummymail@gmail.com</h5>
            <Link to="mailto:dummymail@gmail.com" target="_blank">
              Send a Messsage
            </Link>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__icon" />
            <h4>Messenger</h4>
            <h5>dummyprofile</h5>
            <Link to="https://m.me/dummyprofile" target="_blank">
              Send a Messsage
            </Link>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__icon" />
            <h4>Whatsapp</h4>
            <h5>+91-12345-67890</h5>
            <Link
              to="https://api.whatsapp.com/send?phone=+91-12345-67890"
              target="_blank"
            >
              Send a Messsage
            </Link>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
