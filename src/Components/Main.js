import React, { useState, useEffect } from "react";
import "../style.css";
import img3 from "../images/img3.svg";
import { motion, AnimatePresence } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";
import Divider from "./Divider";

const contentVariants = {
    initial: {
      translateY: "-100vh",
      opacity: 0,
    },
  
    animate: {
      translateY: "0vh",
      opacity: 1,
      transition: {
        duration: 3,
        when: "beforeChildren",
        // staggerChildren: 0.4,
      },
    },
  };
  const childrenVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
  
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        type: "spring",
        delay: 0.5,
      },
    },
  
    exit: {
      opacity: 0,
      y: -200,
      transition: { duration: 0.5 },
    },
  };

function Main() {
    const [showHeadingOne, setShowHeadingOne] = useState(true);
    const [showHeadingTwo, setShowHeadingTwo] = useState(false);
  
    // Timeout
    useEffect(() => {
      setTimeout(() => {
        if (showHeadingOne) {
          setShowHeadingOne(false);
          setShowHeadingTwo(true);
        } else {
          setShowHeadingOne(true);
          setShowHeadingTwo(false);
        }
      }, 3000);
    }, [showHeadingOne, showHeadingTwo]);

    return (
        <section className="home-container" id="home" name="home">
        <motion.div
          className="content-container"
          variants={contentVariants}
          initial="initial"
          animate="animate"
        >
              <h4 className="welcome-content">Hi,<motion.span
            drag={true}
            dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
            className="hand"
            animate={{ rotate: [0, 20, 0, 20, 0, 0, 0, 0, 0, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
          >
            <span role="img" aria-label="Hand waving">
              👋
            </span>
          </motion.span>
               <span>I am</span> </h4>
        <br />
        <h1 className="main-content">
        Muhammad Shah Sawar🎓
          
        </h1>
        <div className="skill-animation">
          <AnimatePresence>
            {showHeadingOne && (
              <motion.h2
                className="skill-content"
                variants={childrenVariants}
                exit="exit"
                animate="animate"
                initial="initial"
              >
                MERN Stack Developer
              </motion.h2>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {showHeadingTwo && (
              <motion.h2
                className="skill-content"
                variants={childrenVariants}
                exit="exit"
                animate="animate"
                initial="initial"
              >
              Digital Marketer
              </motion.h2>
            )}
          </AnimatePresence>
          </div>
          <h1>
          {" "}
          from Pakistan{" "}
          <span role="img" aria-label="Pakistan Flag">
            🇵🇰 🗺
          </span>
        </h1>
        {/* ............................................................... */}
        <div className="button-wrapper">
          <button
            className="button contact-btn"
            onClick={() => scroll.scrollToBottom()}
          >
            Contact Me
          </button>
          <a
            href="https://drive.google.com/file/d/1lVASI1uransbO1WHbbc5UKJu8gBoLzfR/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">Resume</button>
          </a>
        </div>
        </motion.div>
        {/* image */}
        <motion.div
        className="svg-container"
        animate={{ translateX: [-20, 0, 0, -20] }}
        transition={{ repeat: Infinity, duration: 6 }}
      >
        <img className="svg" src={img3} alt="" />
      </motion.div>
     
        </section>
       
    )
}


export default Main
