/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import ServiceCSS from "./../Services/Service.module.css";

function Service() {
  AOS.init();
  return (
    <>
      <section id="service">
        <div className={ServiceCSS.service}>
          <h2
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="100"
          >
            Services
          </h2>
          <p
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="500"
          >
            MERN stack services refer to the essential components used in
            developing web applications using the MERN technology stack. My
            stack services encompass MongoDB for data storage, Express.js for
            server-side development, React.js for client-side user interface
            development, and Node.js for server-side execution and backend
            logic. Together, these services form a powerful and versatile
            technology stack for developing modern web applications.
          </p>

          <div className={ServiceCSS.service_cards}>
            <div
              className={ServiceCSS.Service_card}
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="100"
            >
              <i className="fa-solid fa-display" id={ServiceCSS.icon}></i>
              <h3>Web Design</h3>
              <p>
                Web design involves the creation and arrangement of elements on
                a website to achieve a visually appealing and user-friendly
                interface. furthermore it encompasses various aspects, including
                user experience, visual design, responsiveness, accessibility,
                content strategy, performance optimization, and SEO. By focusing
                on these key areas, web designers create engaging,
                user-friendly, and effective websites that meet the needs of
                both users and businesses.
              </p>
              <a href="#">
                Read More <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>

            <div
              className={ServiceCSS.Service_card}
              data-aos="fade"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              <i className="fa-brands fa-codepen" id={ServiceCSS.icon}></i>
              <h3>UI / UX Design</h3>
              <p>
                UI/UX design, often referred to collectively as UX/UI design,
                focuses on creating engaging, intuitive, and user-friendly
                experiences for digital products such as websites, mobile apps,
                and software applications. UX/UI design combines principles of
                user interface design and user experience design to create
                digital products that are visually appealing, easy to use, and
                enjoyable to interact with. By understanding user needs,
                designing intuitive interfaces, and prioritizing usability and
                accessibility, UX/UI designers play a crucial role in shaping
                positive and meaningful user experiences.
              </p>
              <a href="#">
                Read More <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>

            <div
              className={ServiceCSS.Service_card}
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="1000"
            >
              <i className="fa-solid fa-chart-line" id={ServiceCSS.icon}></i>
              <h3>Digital Marketing</h3>
              <p>
                Digital marketing involves the use of digital channels,
                platforms, and technologies to promote products, services, and
                brands to target audiences. It encompasses a range of online
                strategies and tactics, including SEO, SEM, SMM, content
                marketing, email marketing, and analytics. By leveraging digital
                channels and technologies, businesses can effectively reach and
                engage with their target audiences, drive traffic and
                conversions, and achieve their marketing objectives.
              </p>
              <a href="#">
                Read More <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>

            <div
              className={ServiceCSS.Service_card}
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="1500"
            >
              <i className="fa-solid fa-code" id={ServiceCSS.icon}></i>
              <h3>Web Development</h3>
              <p>
                Web development involves the creation and maintenance of
                websites and web applications. It encompasses frontend and
                backend development, responsive design, version control,
                security, creation of high-quality, scalable, and secure
                websites and web applications that meet the needs of users and
                businesses.
              </p>
              <a href="#">
                Read More <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>

            <div
              className={ServiceCSS.Service_card}
              data-aos="fade"
              data-aos-duration="1500"
              data-aos-delay="2000"
            >
              <i className="fa-solid fa-mobile-screen" id={ServiceCSS.icon}></i>
              <h3>Mobile App Development</h3>
              <p>
                Mobile app development involves the creation and deployment of
                software applications designed to run on mobile devices such as
                smartphones and tablets. It also involves selecting a platform,
                choosing programming languages and frameworks, following a
                structured development process, designing intuitive user
                interfaces, developing backend services, testing for quality and
                performance, and deploying the app to app stores for
                distribution. By following best practices and focusing on user
                needs, mobile app developers create innovative and impactful
                applications that meet the demands of today's mobile-centric
                world.
              </p>
              <a href="#">
                Read More <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>

            <div
              className={ServiceCSS.Service_card}
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="2500"
            >
              <i className="fa-solid fa-gear" id={ServiceCSS.icon}></i>
              <h3>Other</h3>
              <p>
                Beyond traditional software development practices, several other
                developments are shaping the field of software engineering.
                Developments such as <b>DevOps</b>, <b>Cloud Computing</b>,{" "}
                <b>Microservices Architecture</b>,{" "}
                <b>Artificial Intelligence (AI) and Machine Learning (ML)</b>,{" "}
                <b>Containerization</b>,{" "}
                <b>Low-Code/No-Code Development and Cybersecurity</b>.
              </p>
              <a href="#">
                Read More <i className="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
