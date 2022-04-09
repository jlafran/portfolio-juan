import React,{Fragment} from "react";
import styles from "./half_and_half.css"

const HalfBig=(props)=> {
  const {imgRight,title,text}=props;
    
    return (
    <>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    </style>

    <section className="section-half-big">
        <div className='filler-white-half-big' />

        <div class="split-two-big-text left-two-text-img">
          <div className="wrapper-text-half-big">
            <h2 className='semibold title-text-half-big'>{title}</h2>
            <p className='medium subtitle-text-half-big'>{text}</p>
          </div>
        </div>

        <div class="split-two-big-image right-big-image-half">
          <img src={imgRight} className="img-mockup-website-big" />
        </div>

        <div className='filler-white-half-big' />
        
      </section>
  </>

    )
  }

export default HalfBig; //