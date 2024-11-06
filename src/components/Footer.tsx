import React from "react";
import FooterStyle from "../css/FooterStyling/FooterStyle.module.css";
import Link from "next/link";
import CustomButton from "./CustomButton";
import Image from "next/image";
import fbIcon from "../assets/icons/facebook.svg"
import twitterIcon from "../assets/icons/twitter.svg"
import linkedinIcon from "../assets/icons/linkedin.svg"
function Footer() {
  return (
    <div className={FooterStyle.footerContainer}>
      <div className={FooterStyle.footerController}>
        <div className={FooterStyle.footerUpper}>
          <div className={FooterStyle.qlContainer}>
            <h3>Quick Links</h3>
            <div className={FooterStyle.quickLinks}>
              <Link href={"/"}>Home</Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/contact"}>Contact</Link>
            </div>
          </div>
          <div className={FooterStyle.blogContainer}>
            <h3>Blog</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered
            </p>
            <div>
                <Image width={22} alt="facebook-icon" src={fbIcon}/>
                <Image width={22} alt="twitter-icon" src={twitterIcon}/>
                <Image width={22} alt="linkedin-icon" src={linkedinIcon}/>
            </div>
          </div>
          <div className={FooterStyle.newsletterContainer}>
            <h3>Newsletter</h3>
            <input type="text" placeholder="Enter Your Email" />
            <div>
              <CustomButton title="Subscribe" />
            </div>
          </div>
        </div>
      </div>
      <div className={FooterStyle.footerLower}>
        <p>2024 All Rights Reserved. Design by Muhammad Anus</p>
      </div>
    </div>
  );
}

export default Footer;
