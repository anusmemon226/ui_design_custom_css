import React from "react";
import Card from "../components/Card";
import ServiceContainerStyle from "../css/ServicesStyling/ServiceCard.module.css"
import buildingIcon from "../assets/icons/building-icon.png"
import flashIcon from "../assets/icons/flash-icon.png"
import bulbIcon from "../assets/icons/bulb-icon.png"
import industrialIcon from "../assets/icons/industrial-icon.png"
function ServicesCards() {
  return (
    <div className={ServiceContainerStyle.servicesContainer}>
      <Card icon={buildingIcon} heading="Residential Services" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, quis
          nihil. Distinctio ex facilis eos necessitatibus iure, aspernatur qui,
          quis, enim ad ab a! Ipsam error tempora omnis sequi architecto."/>
      <Card icon={flashIcon} heading="Commercial Services" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, quis
          nihil. Distinctio ex facilis eos necessitatibus iure, aspernatur qui,
          quis, enim ad ab a! Ipsam error tempora omnis sequi architecto."/>
      <Card icon={bulbIcon} heading="Electrical Services" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, quis
          nihil. Distinctio ex facilis eos necessitatibus iure, aspernatur qui,
          quis, enim ad ab a! Ipsam error tempora omnis sequi architecto."/>
      <Card icon={industrialIcon} heading="Industrial Services" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, quis
          nihil. Distinctio ex facilis eos necessitatibus iure, aspernatur qui,
          quis, enim ad ab a! Ipsam error tempora omnis sequi architecto."/>
    </div>
  );
}

export default ServicesCards;
