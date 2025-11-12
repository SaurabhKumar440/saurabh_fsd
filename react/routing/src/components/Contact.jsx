import React from "react";
import "./css/Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2 className="contact__title">Contact Us</h2>
      <p className="contact__text">Have questions? Send us a message.</p>
      <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
        <label className="contact__label">
          Name
          <input className="contact__input" type="text" name="name" placeholder="Your name" />
        </label>
        <label className="contact__label">
          Email
          <input className="contact__input" type="email" name="email" placeholder="you@example.com" />
        </label>
        <label className="contact__label">
          Message
          <textarea className="contact__textarea" name="message" rows="4" placeholder="Your message" />
        </label>
        <button className="contact__button" type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;