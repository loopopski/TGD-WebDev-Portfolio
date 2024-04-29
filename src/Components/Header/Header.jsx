/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import HeaderCSS from "./../../Components/Header/Header.module.css";
import element1 from "./../../../public/element1.png";
import Hero from "./../../../public/hero.jpg";

function Header() {
  AOS.init();
  return (
    <>
      <section id="home">
        <div className={HeaderCSS.hero}>
          <div className={HeaderCSS.hero_info}>
            <h1
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="1000"
            >
              Hi, I am{" "}
              <span>
                Ibukun Obideyi <img src={element1} alt="Hero-element1" />
              </span>
            </h1>

            <p
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="1100"
            >
              A passionate and enthusiastic developer, I love and enjoy creating
              awesome websites and applications.
            </p>

            <div className={HeaderCSS.social_icons}>
              <i
                className="fa-brands fa-linkedin"
                data-aos="fade"
                data-aos-duration="1500"
                data-aos-delay="1200"
              ></i>
              <i
                className="fa-brands fa-facebook"
                data-aos="fade"
                data-aos-duration="1500"
                data-aos-delay="1300"
              ></i>
              <i
                className="fa-brands fa-whatsapp"
                data-aos="fade"
                data-aos-duration="1500"
                data-aos-delay="1400"
              ></i>
              <i
                className="fa-brands fa-instagram"
                data-aos="fade"
                data-aos-duration="1500"
                data-aos-delay="1500"
              ></i>
              <i
                className="fa-brands fa-github"
                data-aos="fade"
                data-aos-duration="1500"
                data-aos-delay="1600"
              ></i>
            </div>

            <div className={HeaderCSS.hero_btns}>
              <button
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-delay="1600"
              >
                Projects
              </button>
              <button
                data-aos="fade-right"
                data-aos-duration="1500"
                data-aos-delay="1700"
              >
                Contact
              </button>
            </div>
          </div>

          <div
            className={HeaderCSS.hero_img}
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-delay="1800"
          >
            <img src={Hero} alt="Hero_img" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
