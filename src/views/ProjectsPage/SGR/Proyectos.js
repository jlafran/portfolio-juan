import React from "react";
import Header from "../../../components/Navbar/navbar"
import { Icon } from '@iconify/react';

import HalfBig from "../../../components/HalfBig/half_and_half"
import TitleProjects from "../../../components/TitleProjects/titleBig"
import InfoBigTextProjects from "../../../components/InfoBigTextProjects/InfoBigText";
import UpNext from "../../../components/UpNext/upNext";
import Footer from "../../../components/Footer/footer";

import imgLeft from "./left.png"
import imgRight from "./multipleCards.png"
import devices from "./multipleMonitors.png"
import macbook from "./macbook.png"
import bigWindow from "./bigwindow.png"
import smallNext from "../GoodGame/smallGoodgame.png"
import smallPrevious from "../Crecer/smallCrecer.png"

import half from "./half_and_half.css"
import alldevices from "./allDevices.css"
import macbok from "./macbook.css"
import halfGrande from "./halfImagenGrande.css"

export default class SGR extends React.Component {
  state = {
    width:"6.5vw", 
    height:"4.5vw",
  }

  render() {

    return (
        <>
    <Header/>
    
    <section className='containerProyectos'>

      {/********** TITLE ***************/}
      <div>
        <TitleProjects color="blue" 
        titlecolor="Mutual guarantee company " 
        title="finantial enteities that facilitate access to credit."  />
      </div>

      {/********** HALF AND HALF ***************/}
      <section>
        <div class="split-two-image-sgr left-two-image">
          <img src={imgLeft} loading="lazy" className="img-mockup-window-sgr" />
        </div>

        <div class="split-two-image-sgr right-two-image">
          <img src={imgRight} loading="lazy" className="img-mockup-screens-sgr" />
        </div>
      </section>

     {/********** INFO BIG ***************/}
     <InfoBigTextProjects title="We were aproached to develop a manager to keep tabs of the credit." 
     bodytitle="The system had to manage bank guarantees, savings accounts, credit cooperatives, customers and suppliers." 
     />

      {/********** MACBOOK ***************/}
      <section className="section-mockup-macbook-SGR">
        <div className="wrapper-mockup-macbook-SGR">
          <img src={macbook} loading="lazy" className="img-mockup-macbook-SGR" />
        </div>
      </section>

      {/********** TEXT ***************/}
      <div className="long-text-project">
              <h1 className="semibold" >Overview</h1>
              <p className="regular">This project was developed by a team of 6, throught 3 months from the idea to a fully working system. This was my first time using the MVC (Model-View-Controller) architecture pattern, at it was the first time i was using a complete Java enviroment. It also meant I was able to put into practice my knowledge in the OOP (Object Oriented Programming) paradigm.</p>
              <p className="regular">Through a brief interview with the SGR (Mutual guarantee company) we had the main business needs. And we where able to understand the way each process worked.</p>
            </div>

            <div className="long-text-project">
              <h1 className="semibold" >Needs</h1>
              <p className="regular">I'll try to give you a brief explanaition. Bank guarantees are a way for banks to take responsability for the guarantor in the event that it fails to fulfill its obligations. </p>
              <p className="regular">SGR makes this guarantees available to small and medium companies also known in Argentina as PYMES, in order to keep track of the documentation and which company and shareholders asked for the loan the SGR needed the system. Also it had to manage credit cooperatives which are financial institution similar to banks, but is a member-owned nonprofit financial cooperative.</p>
            </div>
      {/********** ALL DEVICES ***************/}
      <section>
        <div className="wrapper-mockup-devices-SGR">
          <img src={devices} loading="lazy" className="img-mockup-devices-SGR" />
          <div className="wrapper-text-SGR">
            <h2 className='bold title-text-sgr'>UX/UI Design</h2>
            <p className='regular subtitle-text-sgr'>The aplication had to have a UI similar to a legacy system that they previously used to manage their accounts.</p>
          </div>
        </div>
      </section>

      {/********** TEXT ***************/}
      <div className="long-text-project padding-top">
              <h1 className="semibold" >Development</h1>
              <p className="regular" >After that we had to design the class diagram and sequence diagram. With this information we were able to start programming the system logic working with Java. And another team was in charge of designing the view with Swing.</p>
              <p className="regular" >Since it was the first time developing an MVC system, we had our fare share of issues, specially with the controllers. Since they were doing too many things, so once we understood this problem we had to redesign most of our controllers and services.</p>
              <p className="regular" >We had a data base in MySQL, this meant we needed an API to consume this data. We choose Spring Boot since it also had Hibernate to map the model into our relational data base.</p>
            </div>

      {/********** LOGOS ***************/}
      <div class="wrapper-framework-white">
        <p className='bold title-framework-white'>Frameworks Utilizados</p>
        <ul className="horizontal-container-frameworks">
          <li> <Icon icon="logos:java" width={this.state.width} height={this.state.height} /> </li>
          <li> <Icon icon="logos:spring-icon" width={this.state.width} height={this.state.height} /> </li>
          <li> <Icon icon="logos:hibernate" width={this.state.width} height={this.state.height} /> </li>
          <li> <Icon icon="logos:mysql" width={this.state.width} height={this.state.height} /> </li>
          <li> <Icon icon="logos:figma" width={this.state.width} height={this.state.height} /> </li>
        </ul>
      </div>

      {/********** HALF BIG ***************/}
      <HalfBig 
        title="Conclusion" 
        text="Through the 3 months of development i learned lots of things. From interviewing and looking for business needs, to developing an MVC system and getting in touch with Java 8 and Spring."
        text2="The business needs were complex and intricate, but pretty simple to code once you understood them."
        text3="Thanks for reading all the way."
      imgRight={bigWindow} />

      {/********** UP NEXT ***************/}
      <UpNext
        smallNext={smallNext}
        smallPrevious={smallPrevious}
        urlPrevious="/proyectos/crecer"
        urlNext="/proyectos/goodgame"
      />
      
      {/********** FOOTER ***************/}
      <Footer/>
      
    </section>

    </>
    );
  }
}