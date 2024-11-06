"use client";
import React from "react";
import NavLinkStyle from "../css/NavbarStyling/NavLink.module.css";
import NavLink from "./NavLink";
function NavLinks({showToggler,setShowToggler}:{showToggler:boolean,setShowToggler:(status:boolean)=>void}) {
  window.onresize = function(){
    if(window.innerWidth>767){
        setShowToggler(false)
    }
  }
  return (
    <>
      <div className={`${NavLinkStyle.navlinkContainer} ${showToggler?NavLinkStyle.togglerActive:""}`}>
        <NavLink label="Home" href="/"/>
        <NavLink label="About" href="/about"/>
        <NavLink label="Contact" href="/contact"/>
      </div>
    </>
  );
}

export default NavLinks;
