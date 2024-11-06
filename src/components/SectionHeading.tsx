import React from "react";
import HeadingStyle from "../css/ServicesStyling/Heading.module.css"
function SectionHeading({ heading }: { heading: string }) {
  return (
    <div className={HeadingStyle.containerStyle}>
      <h2 className={HeadingStyle.headingStyle}>{heading}</h2>
      <span className={HeadingStyle.lineStyle}></span>
    </div>
  );
}

export default SectionHeading;
