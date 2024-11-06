import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import AboutImage from "../assets/about-img.png";
import AboutStyle from "../css/AboutStyling/AboutStyle.module.css";
function AboutSection() {
  return (
    <div className={AboutStyle.aboutSection}>
      <div className={AboutStyle.aboutContent}>
        <h2>Slightly believable. If you are going</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isnt anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet.
        </p>
        <div>
          <CustomButton title="Read More" />
        </div>
      </div>
      <div className={AboutStyle.aboutImage}>
        <Image alt="about-img" src={AboutImage} />
      </div>
    </div>
  );
}

export default AboutSection;
