/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import ContactCSS from "./../Contact/Contact.module.css";

function Contact() {
  AOS.init();
  return (
    <>
      <section id="contact">
        <div className={ContactCSS.contact}>
          <div>
            <h2
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
              Contact Me
            </h2>
            <p
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="800"
            >
              Let us make something beautiful together. We would love to hear
              from you! Drop us a line, or give us a heads up if you are
              interested in visiting us.
            </p>
          </div>

          <form
            onSubmit={""}
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="1000"
            noValidate=""
          >
            <label htmlFor="">Name :</label>
            <input type="text" placeholder="Enter Name *" id="name" required />
            <label htmlFor="">Email :</label>
            <input
              type="email"
              placeholder="Enter Email *"
              id="email"
              required
            />
            <label htmlFor="">Phone :</label>
            <input
              type="text"
              placeholder="Enter Phone *"
              id="phone"
              required
            />

            <button type="submit" disabled="">
              Contact
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
