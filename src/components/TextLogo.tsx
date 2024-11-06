import Link from "next/link";
import React from "react";
import TxtLogo from "../css/NavbarStyling/TextLogo.module.css"

function TextLogo({ title }: { title: string }) {
  return (
    <div className={TxtLogo.textLogo}>
      <Link href={"/"}>
        <h1>{title}</h1>
      </Link>
    </div>
  );
}

export default TextLogo;
