"use client"
import Link from "next/link";
import React from "react";
import NavLinkStyle from "../css/NavbarStyling/NavLink.module.css";
import { usePathname } from "next/navigation";
function NavLink({label,href}:{label:string,href:string}) {
  const currentPath = usePathname();
  return (
    <Link
      href={href}
      className={`${NavLinkStyle.navlink} ${
        currentPath === href ? NavLinkStyle.active : ""
      }`}
    >
      {label}
    </Link>
  );
}

export default NavLink;
