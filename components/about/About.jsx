import React from "react";
import "./about.css";
import IM from "../../assets/me.jpeg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={IM} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about_card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about_card">
              <FaAward className="about__icon" />
              <h5>Degree</h5>
              <small>B-Tech</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
            I'm very ambitious fullstak developer and a Competative Programmer
            ready for the problem solving.
            <br />I am multitasking,ambitious,and open to work with new
            technology...
          </p>

          <Link to="/contact" className="btn btn-primary">
            Let's Talk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
