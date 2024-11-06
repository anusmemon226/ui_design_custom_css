import React from "react";
import NavBarToggler from "../css/NavbarStyling/Toggler.module.css"
function Toggler({showToggler,setShowToggler}:{showToggler:boolean,setShowToggler:Function}) {
  return (
    <div
      className={NavBarToggler.navbarToggler}
      onClick={() => setShowToggler(!showToggler)}
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Toggler;
