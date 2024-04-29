/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import AboutCSS from "./../About/About.module.css";
import About_img from "./../../../public/about.jpg";

function About() {
  return (
    <>
      <section id="about">
        <div className={AboutCSS.about}>
          <div
            className={AboutCSS.about_img}
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            <img src={About_img} alt="" />
          </div>

          <div className={AboutCSS.about_info}>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="400"
            >
              About Me
            </p>
            <h2
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="600"
            >
              Ibukun Obideyi
            </h2>
            <h3
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="800"
            >
              I am self-taught <span>MERN Stack</span> Developer who possess a
              unique set of qualities, including autonomy, resourcefulness,
              adaptability, and a relentless drive for learning and improvement,
              which enable me to progress in the ever-evolving field of software
              development.
            </h3>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="1000"
            >
              As a MERN stack developer I specializes in building web
              applications using the MERN stack technologies, which consists of
              MongoDB, Express.js, React.js, and Node.js.
            </p>
            <button
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="1200"
            >
              Download CV
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
