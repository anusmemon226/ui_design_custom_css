import SectionHeading from "@/components/SectionHeading";
import React from "react";
import AboutStyle from "../../css/AboutStyling/AboutStyle.module.css";
import AboutSection from "@/components/AboutSection";
function page() {
  return (
    <div className={AboutStyle.aboutContainer}>
      <div className={AboutStyle.aboutHeader}>
        <SectionHeading heading="About Our electricity Company" />
      </div>
      <AboutSection />
    </div>
  );
}

export default page;
