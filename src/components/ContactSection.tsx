import React from "react";
import ContactStyle from "../css/ContactStyling/ContactStyle.module.css";
import CustomButton from "./CustomButton";
function ContactSection() {
  return (
    <div className={ContactStyle.contactContainer}>
      <div className={ContactStyle.contactController}>
        <div className={ContactStyle.contactForm}>
            <h2>Get In Touch</h2>
            <div className={ContactStyle.form}>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Phone Number"/>
                <input type="text" placeholder="Email"/>
                <textarea name="" id="" placeholder="Message" rows={10}></textarea>
                <div>
                    <CustomButton title="Send"/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
