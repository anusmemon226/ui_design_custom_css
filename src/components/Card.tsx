import React from "react";
import CustomButton from "./CustomButton";
import Image, { StaticImageData } from "next/image";
import ServiceCardStyle from "../css/ServicesStyling/ServiceCard.module.css"
function Card({icon,heading,description}:{icon:StaticImageData,heading:string,description:string}) {
  return (
    <div className={ServiceCardStyle.serviceCard}>
      <div className={ServiceCardStyle.cardContent}>
        <Image alt="" src={icon}/>
        <h3 style={{fontSize:"26px",padding:"20px 0"}}>{heading}</h3>
        <p style={{fontSize:"17px"}}>
          {description}
        </p>
      </div>
      <div>
        <CustomButton title="Read More"/>
      </div>
    </div>
  );
}

export default Card;
