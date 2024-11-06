"use client"
import React from "react";
import FooterStyle from "../css/FooterStyling/FooterStyle.module.css";
import Link from "next/link";
import CustomButton from "./CustomButton";
import Image from "next/image";
function Footer() {
  return (
    <div className={FooterStyle.footerContainer}>
      <div className={FooterStyle.footerController}>
        <div className={FooterStyle.footerUpper}>
          <div className={FooterStyle.qlContainer}>
            <h3>Quick Links</h3>
            <div className={FooterStyle.quickLinks}>
              <Link href={"/"}>Home</Link>
              <Link href={"/About"}>About</Link>
              <Link href={"/Contact"}>Contact</Link>
            </div>
          </div>
          <div className={FooterStyle.blogContainer}>
            <h3>Blog</h3>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered
            </p>
            <div>
                <Image width={22} alt="facebook-icon" src={require("../assets/icons/facebook.svg")}/>
                <Image width={22} alt="twitter-icon" src={require("../assets/icons/twitter.svg")}/>
                <Image width={22} alt="linkedin-icon" src={require("../assets/icons/linkedin.svg")}/>
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