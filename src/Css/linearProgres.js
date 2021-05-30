import React from "react";
import "../Css/linear.css";

const LinearProgress = ({ value, style, label, color, styled }) => {
  const styles = {
    width: "60vw",
    fontSize: "1.3rem",
    fontFamily: "sans serif",
    margin: "1rem",
    boxShadow: "2px 2px 5px gray",
    padding: "1rem 2.5rem",
    borderRadius: "5px",
    border: "1px solid gray",
  };

  // If styled
  const applyStyles = styled ? { ...styles, ...style } : style;

  return (
    <div className="container" style={applyStyles}>
      <div className="skillbar">
        <p className="skillbarTitle">{label}</p>
        <p className="skillbarPercent">{value}%</p>
        <div className="skillbarBar">
          <div
            className="skillbarChild"
            style={{ width: `${value}%`, background: `${color}` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LinearProgress;