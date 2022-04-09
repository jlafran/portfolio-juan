import React,{Fragment} from "react";
import img from "../../assets/Mockups/Macbook.png"
import styles from "./half_and_half.css"

const HalfHalf=(props)=> {
  const {imgLeft,imgRight}=props;
    
    return (
    <>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    </style>
    <section>
      <div class="split-two-image left-two-image">
        <img src={imgLeft} className="img-mockup-half-horizontal" />
      </div>

      <div class="split-two-image right-two-image">
        <img src={imgRight} className="img-mockup-half-vertical" />
      </div>
    </section>
  </>

    )
  }

export default HalfHalf; //