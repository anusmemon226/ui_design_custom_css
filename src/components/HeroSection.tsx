import React from "react";
import HeroStyle from "../css/HeroStyling/HeroStyle.module.css";
import CustomButton from "./CustomButton";
function HeroSection() {
  return (
    <div className={HeroStyle.heroContainer}>
      <div>
        <h1 className={HeroStyle.heroHeading}>ELECTRICITY SERVICES</h1>
        <p>
          Anything embarrassing hidden in the middle of text. All the Lorem
          Ipsuanything embarrassing h
        </p>
        <CustomButton title="Read More"/>
      </div>
    </div>
  );
}

export default HeroSection;
