  
import React from "react";
import "../style.css";
import { motion } from "framer-motion";
import { images } from "../images";

const boxVariants = {
  hover: {
    scale: 1.02,
    transition: {
      type: "spring",
    },
  },
};

const Portfolio = () => {
  return (
    <section
      data-aos="fade-up"
       data-aos-delay="150"
      data-aos-duration="2000"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
      <h1 className="heading">Projects I have Built</h1>
      <div className="projects-container">
        {/* Project - Diaries Manager App */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="#"
          >
            <div className="project-images" id="diariesApp">
              <img className="portfolioimg" src={images.expensetracker} alt="" />
            </div>
          </a>
          <div className="project-links">
            <div className="text">
              <h3>Expense Tracker App</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/shahsawar92/ExpenseTrackerApp"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="http://www.expensetrackerbyshahsawar.surge.sh/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}

        {/* Project - Shoe Store */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="#"
          >
            <div className="project-images" id="shoeStore">
            <img className="portfolioimg" src={images.covidtracker} alt="covid19tracker application" />

            </div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Covid 19 Tracker</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/shahsawar92/covid19_tracker"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>
              <a
                rel="noopener noreferrer"
                href="http://coronatrackerbyshahsawar.surge.sh/"
                target="_blank"
              >
                {" "}
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}
        {/* Project - Todo List */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="#"
          >
            <div className="project-images" id="todoList">
            <img className="portfolioimg" src={images.scratchcard} alt="scratch cards in react" />

            </div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>React Scratch Card</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/shahsawar92/scratchCard"
              >
                <i
                  className="fab fa-github"
                  title="github repo"
                  id="github"
                ></i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://demo_card.surge.sh"
                target="_blank"
              >
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}
        {/* Project - Blog Site */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="#"
          >
            <div className="project-images" id="gatsbyBlog">
            <img className="portfolioimg" src={images.tutorapp} alt="tutor application in react" />

            </div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>Tuter App For Client</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/shahsawar92/proctorwebsite"
              >
                <i
                  className="fab fa-github"
                  title="github repo"
                  id="github"
                ></i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://proctor.surge.sh/"
                target="_blank"
              >
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}
        {/* Project - Uber Eats Landing */}
        
        {/* // */}

        {/* Project - Corona Tracker */}
        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="#"
          >
            <div className="project-images" id="quizapp">
            <img className="portfolioimg" src={images.quizImg} alt="React quiz application" />

            </div>
          </a>

          <div className="project-links">
            <div className="text">
              <h3>React Quiz App</h3>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/shahsawar92/react-quiz-app"
              >
                <i
                  className="fab fa-github"
                  title="github repo"
                  id="github"
                ></i>
              </a>
              <a
                rel="noopener noreferrer"
                href="https://quiz_shahsawar.surge.sh/"
                target="_blank"
              >
                <i
                  className="fas fa-external-link-alt"
                  title="live preview"
                  id="live"
                ></i>
              </a>
            </div>
          </div>
        </motion.div>
        {/* // */}
        
      </div>
      
    </section>
  );
};

export default Portfolio;