import React from 'react'
import ButtonStyle from "../css/Button.module.css"
function CustomButton({title}:{title:string}) {
  return (
    <button className={ButtonStyle.btn} style={(title=="Call Now")?{backgroundColor:"white",color:"black"}:{}}>{title}</button>
  )
}

export default CustomButton