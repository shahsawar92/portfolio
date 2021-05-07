import { useState } from 'react';
import { motion } from "framer-motion";
import { animateScroll as scroll, Link } from "react-scroll";
import '../style.css';

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
     const [navClicked, setNavClicked] = useState(false);
     let offset = -70;

     const handleClick = () => {
       setNavClicked(!navClicked);
     };
   
     const changeNav = () => {
       if (window.scrollY >= 50) {
         setNavbar(true);
       } else {
         setNavbar(false);
       }
     };
   
     window.addEventListener("scroll", changeNav);
    return (
    <div className={navbar ? "nav-wrapper active" : "nav-wrapper"}>
           
        <motion.div 
            id="navbar"
            className="navbar"
            initial={{
                opacity:0,
            }}
            animate={
                {
                    opacity:2,
                }
            }
            transition={{
                duration: 1.19,
              }}
            > 
            <span className="logo" onClick={() => scroll.scrollToTop()}>
            &lt; Shah Sawar /&gt;
            </span>
            <div className="menu-icon" onClick={handleClick}>
              <i className={navClicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            {/* links  */}
            <ul className={navClicked ? "nav-links active" : "nav-links"}>
             <li className="link">
            <Link
              className={navbar ? "anchor scrolled" : "anchor"}
              activeClass="active"
              to="Main"
              spy={true}
              hashSpy={true}
              smooth={true}
              delay={1000}
              offset={offset}
              duration={5000}
            >
              Home 🏡
            </Link>
          </li>
          <li className="link">
            <Link
              className={navbar ? "anchor scrolled" : "anchor"}
              activeClass="active"
              to="skills"
              spy={true}
              hashSpy={true}
              smooth={true}
              delay={100}
              offset={offset}
              duration={500}
            >
              Services 🌄
            </Link>
          </li> <li className="link">
            <Link
              className={navbar ? "anchor scrolled" : "anchor"}
              activeClass="active"
              to="skills"
              spy={true}
              hashSpy={true}
              smooth={true}
              delay={100}
              offset={offset}
              duration={500}
            >
              Profile 🍖
            </Link>
          </li> <li className="link">
            <Link
              className={navbar ? "anchor scrolled" : "anchor"}
              activeClass="active"
              to="skills"
              spy={true}
              hashSpy={true}
              smooth={true}
              delay={100}
              offset={offset}
              duration={500}
            >
              Skills 🎭
            </Link>
          </li> <li className="link">
            <Link
              className={navbar ? "anchor scrolled" : "anchor"}
              activeClass="active"
              to="Contact"
              spy={true}
              hashSpy={true}
              smooth={true}
              delay={100}
              offset={offset}
              duration={500}
            >
              Contact 🐥
            </Link>
          </li>
          </ul>
        </motion.div>
    </div>
    )
}
