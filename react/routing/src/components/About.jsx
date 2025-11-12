import React from "react";
import "./css/About.css";

const About = () => {
  return (
    <section className="about">
      <h2 className="about__title">About Us</h2>
      <p className="about__text">This demo app shows basic routing with Home, About and Contact pages.</p>
      <div className="about__cards">
        <article className="about__card">
          <h4>Our Mission</h4>
          <p>Build small, focused UI examples to learn React Router.</p>
        </article>
        <article className="about__card">
          <h4>Our Values</h4>
          <p>Clarity, simplicity, and hands-on learning.</p>
        </article>
      </div>
    </section>
  );
}

export default About;