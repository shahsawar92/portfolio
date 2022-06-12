import React from "react";
import LinearProgress from "../Css/linearProgres";

const Skills = () => {
  return (
    <section
      data-aos="fade-right"
      data-aos-delay="150"
      data-aos-duration="2000"
      className="skills-container"
      name="skills"
      id="skills"
    >
      <h1 className="heading">I Am Good At:</h1>

      <LinearProgress label="ReactJs" value={95} color={"green"} />
      <LinearProgress label="StoryBook" value={85} color={"green"} />
      <LinearProgress label="Redux" value={85} color={"green"} />
      <LinearProgress label="HTML" value={100} color={"green"} />
      <LinearProgress label="CSS" value={95} color={"green"} />
      <LinearProgress label="Bootstrap" value={95} color={"green"} />
      <LinearProgress label="Material UI" value={90} color={"green"} />
      <LinearProgress label="Typescript" value={60} color={"green"} />
      <LinearProgress label="NodeJs" value={80} color={"green"} />
      <LinearProgress label="Core PHP" value={85} color={"green"} />
      <LinearProgress label="MySql" value={90} color={"green"} />
      <LinearProgress label="GraphQl / Rest-API" value={85} color={"green"} />
      <LinearProgress label="Firebase" value={80} color={"green"} />
      <LinearProgress label="Python" value={75} color={"green"} />
      <LinearProgress label="ML Library(keras)" value={50} color={"green"} />

    </section>
  );
};

export default Skills;