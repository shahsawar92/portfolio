import React from 'react'
import '../style.css';
import imga from '../images/web.svg';
import img from '../images/react.svg';

export default function Services() {
    return (
    <section
      data-aos="zoom-in"
      data-aos-delay="150"
      data-aos-duration="2000"
      className="services-container"
      name="services"
      id="services"
    >
      <h1 className="heading">Services I Provide</h1>
      <div className="services-wrapper">
        <div className="services">
          <li>
            <img src={img} alt="" />
            <p>Full Stack Web Development</p>
          </li>
        </div>
        <div className="services">
          <li>
            <img src={imga} alt="" />
            <p>ReactJs Development</p>
          </li>
        </div>
        
      </div>
    </section>
       
    )
}
