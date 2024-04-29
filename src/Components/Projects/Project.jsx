/* eslint-disable no-unused-vars */
import React from "react";
import ProjectCSS from "./../Projects/Project.module.css";
import Img1 from "./../../../public/project1.png";
import Img2 from "./../../../public/project2.png";
import Img3 from "./../../../public/project3.png";
import Img4 from "./../../../public/project4.png";

function Project() {
  AOS.init();
  return (
    <>
      <section id="projects">
        <div className={ProjectCSS.project}>
          <h2
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="100"
          >
            Projects
          </h2>
          <p
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            I single handedly built my personal website portfolio to gain
            recognition across the tech industry after going and reading through
            various contents, attending and watching different online tutorials
            to master the art of software developments.
          </p>
          <div className={ProjectCSS.project_cards}>
            <div
              className={ProjectCSS.project_card}
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="500"
            >
              <img src={Img1} alt="Project-img-1" />

              <div>
                <h4>Fitness Website</h4>
                <p>
                  I am a full stack web developer professional who is versatile
                  and proficient in both frontend and backend web development, I
                  am capable and agile of building complete web applications
                  from start to finish. With expertise in frontend technologies,
                  backend programming languages, databases management, version
                  control, deployment, problem-solving, and continuous learning,
                  I play a crucial role in designing, developing, and
                  maintaining modern web solutions.
                </p>
                <a href="#">
                  Read more <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>

            <div
              className={ProjectCSS.project_card}
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="1000"
            >
              <img src={Img2} alt="Project-img-2" />

              <div>
                <h4>Personal Portfolio</h4>
                <p>
                  I am a full stack web developer professional who is versatile
                  and proficient in both frontend and backend web development, I
                  am capable and agile of building complete web applications
                  from start to finish. With expertise in frontend technologies,
                  backend programming languages, databases management, version
                  control, deployment, problem-solving, and continuous learning,
                  I play a crucial role in designing, developing, and
                  maintaining modern web solutions.
                </p>
                <a href="#">
                  Read more <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>

            <div
              className={ProjectCSS.project_card}
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="2000"
            >
              <img src={Img3} alt="Project-img-3" />

              <div>
                <h4>Restaurant Website</h4>
                <p>
                  I am a full stack web developer professional who is versatile
                  and proficient in both frontend and backend web development, I
                  am capable and agile of building complete web applications
                  from start to finish. With expertise in frontend technologies,
                  backend programming languages, databases management, version
                  control, deployment, problem-solving, and continuous learning,
                  I play a crucial role in designing, developing, and
                  maintaining modern web solutions.
                </p>
                <a href="#">
                  Read more <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>

            <div
              className={ProjectCSS.project_card}
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="2500"
            >
              <img src={Img4} alt="Project-img-4" />

              <div>
                <h4>Footwear Website</h4>
                <p>
                  I am a full stack web developer professional who is versatile
                  and proficient in both frontend and backend web development, I
                  am capable and agile of building complete web applications
                  from start to finish. With expertise in frontend technologies,
                  backend programming languages, databases management, version
                  control, deployment, problem-solving, and continuous learning,
                  I play a crucial role in designing, developing, and
                  maintaining modern web solutions.
                </p>
                <a href="#">
                  Read more <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
