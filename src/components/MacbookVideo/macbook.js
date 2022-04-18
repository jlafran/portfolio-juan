import React,{Fragment} from "react";
import img from "../../assets/Mockups/Macbook.png"
import styles from "./macbook.css"

const Macbook=(props)=> {
  const {video}=props;
    
    return (
    <>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    </style>
    <section className="section-mockup">
    <div className="wrapper-mockup">
      <div className="wrapper-mockup-macbook">
        <div className="video-goodgame">
            <video loading="lazy" src={video} autoPlay muted loop ></video>
        </div>
        <img src={img} className="img-goodgame" />
      </div>
    </div>
    </section>
  </>

    )
  }

export default Macbook; //