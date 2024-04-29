/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import FooterCSS from "./../Footer/Footer.module.css";

function Footer() {
  AOS.init();
  return (
    <>
      <section>
        <div className={FooterCSS.footer}>
          <div
            className={FooterCSS.links}
            data-aos="fade"
            data-aos-duration="1500"
            data-aos-delay="100"
          >
            <h1>Ibukun Obideyi</h1>
            <div>
              <p>A MERN developer</p>
              <div className={FooterCSS.social}>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-github"></i>
              </div>
            </div>
          </div>
          <div
            className={FooterCSS.links}
            data-aos="fade"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            <h3>Useful Links</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Project</a>
              </li>
            </ul>
          </div>
          <div
            className={FooterCSS.links}
            data-aos="fade"
            data-aos-duration="1500"
            data-aos-delay="1000"
          >
            <h3>Information</h3>
            <ul>
              <li>
                <a href="#">Membership</a>
              </li>
              <li>
                <a href="#">Privacy & Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
