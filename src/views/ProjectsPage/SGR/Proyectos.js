import React from "react";
import Header from "../../../components/Header/Header"
import { Icon } from '@iconify/react';

import HalfBig from "../../../components/HalfBig/half_and_half"
import TitleProjects from "../../../components/TitleProjects/titleBig"
import InfoBigTextProjects from "../../../components/InfoBigTextProjects/InfoBigText";
import UpNext from "../../../components/UpNext/upNext";
import Footer from "../../../components/Footers/Footer2";

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
        titlecolor="Sistema SGR " 
        title="Entidades financieras que facilitan el acceso al crédito."  />
      </div>

      {/********** HALF AND HALF ***************/}
      <section>
        <div class="split-two-image-sgr left-two-image">
          <img src={imgLeft} className="img-mockup-window-sgr" />
        </div>

        <div class="split-two-image-sgr right-two-image">
          <img src={imgRight} className="img-mockup-screens-sgr" />
        </div>
      </section>

     {/********** INFO BIG ***************/}
     <InfoBigTextProjects title="Prototipado y desarrollo del sistema que se ocupa" 
     bodytitle="De la prestación de avales ante bancos, manejo de cajas de ahorros y cooperativas de créditos, clientes y proveedores." 
     />

      {/********** MACBOOK ***************/}
      <section className="section-mockup-macbook-SGR">
        <div className="wrapper-mockup-macbook-SGR">
          <img src={macbook} className="img-mockup-macbook-SGR" />
        </div>
      </section>

      {/********** ALL DEVICES ***************/}
      <section>
        <div className="wrapper-mockup-devices-SGR">
          <img src={devices} className="img-mockup-devices-SGR" />
          <div className="wrapper-text-SGR">
            <h2 className='bold title-text-sgr'>Diseño de UX/UI</h2>
            <p className='regular subtitle-text-sgr'>Específicamente diseñado para empleados relacionados al sistema bancario.</p>
          </div>
        </div>
      </section>

      {/********** LOGOS ***************/}
      <div class="wrapper-framework-white">
        <p className='bold title-framework-white'>Frameworks Utilizados</p>
        <ul className="horizontal-container-frameworks">
          <li> <Icon icon="logos:java" width={this.state.width} height={this.state.height} /> </li>
          <li> <Icon icon="logos:spring-icon" width={this.state.width} height={this.state.height} /> </li>
          <li> <Icon icon="logos:figma" width={this.state.width} height={this.state.height} /> </li>
          <li> <Icon icon="simple-icons:junit5" width={this.state.width} height={this.state.height} /> </li>
          <li> <Icon icon="logos:mysql" width={this.state.width} height={this.state.height} /> </li>
        </ul>
      </div>

      {/********** HALF BIG ***************/}
      <HalfBig 
      title="Aplicación desktop desarrollada en Java" 
      text="Se utilizo Swing para el front-end, Spring Boot para el back-end y Hibernate para mapear la base de datos. Esta aplicación local guarda información localmente pero tambien utiliza una base de datos para actualizarse."
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