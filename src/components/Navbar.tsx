"use client"
import React, { useState } from "react";
import TextLogo from "./TextLogo";
import NavLinks from "./NavLinks";
import NavBarStyle from "../css/NavbarStyling/Navbar.module.css";
import Toggler from "./Toggler";

function Navbar() {
  const [showToggler, setShowToggler] = useState(false);
  return (
    <div className={`${NavBarStyle.navbar} ${showToggler?NavBarStyle.active:""}`}>
      <div className={NavBarStyle.navbarController}>
        <TextLogo title="Electricca" />
        <NavLinks showToggler={showToggler} setShowToggler={setShowToggler}/>
        <Toggler showToggler={showToggler} setShowToggler={setShowToggler}/>
      </div>
    </div>
  );
}

export default Navbar;
