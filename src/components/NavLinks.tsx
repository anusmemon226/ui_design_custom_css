"use client";
import React from "react";
import NavLinkStyle from "../css/NavbarStyling/NavLink.module.css";
import NavLink from "./NavLink";
function NavLinks({showToggler,setShowToggler}:{showToggler:boolean,setShowToggler:Function}) {
  window.onresize = function(){
    if(window.innerWidth>767){
        setShowToggler(false)
    }
  }
  return (
    <>
      <div className={`${NavLinkStyle.navlinkContainer} ${showToggler?NavLinkStyle.togglerActive:""}`}>
        <NavLink label="Home" href="/"/>
        <NavLink label="About" href="/About"/>
        <NavLink label="Contact" href="/Contact"/>
      </div>
    </>
  );
}

export default NavLinks;
