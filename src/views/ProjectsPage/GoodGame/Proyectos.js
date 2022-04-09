import React from "react";
import Navbar from '../../../components/Navbars/Navbar5';
import { Icon } from '@iconify/react';

import Macbook from '../../../components/MacbookVideo/macbook';
import TitleProjects from "../../../components/TitleProjects/titleBig"
import InfoBigTextProjects from "../../../components/InfoBigTextProjects/InfoBigText"
import HalfBig from '../../../components/HalfBig/half_and_half';
import Footer from "../../../components/Footers/Footer2";
import UpNext from "../../../components/UpNext/upNext";

import video from "../../../assets/Videos/GoodGame_1080p.mp4"
import imgLeft from "./portrait.png"
import imgRight from "./ipads.png"
import devices from "./allDevices.png"
import smallNext from "../Crecer/smallCrecer.png"
import smallPrevious from "../SGR/bigwindow.png"
import halfBig from './devices.png'

import half from "./half_and_half.css"
import alldevices from "./allDevices.css"
import halfGrande from "./halfImagenGrande.css"


export default class GoodGame extends React.Component {
  state = {
    width:"6.5vw", 
    height:"4.5vw",
  }

  render() {
    return (
        <>
          <Navbar></Navbar>
          <section className='containerProyectos'>

            {/********** TITLE ***************/}
            <div>
              <TitleProjects color="green" 
              titlecolor="GoodGame " 
              title="conecta testers con estudios de videojuegos."  />
            </div>
            
            {/********** HALF AND HALF ***************/}
            <section>
              <div class="split-two-image left-two-image-goodgame">
                <img src={imgLeft} className="img-mockup-portrait-goodgame" />
              </div>

              <div class="split-two-image right-two-image-goodgame">
                <img src={imgRight} className="img-mockup-ipads-goodgame" />
              </div>
            </section>

            {/********** INFO BIG ***************/}
            <InfoBigTextProjects title="Esta Aplicación Web les permite a testers independientes descargar builds y reportar errores." 
            bodytitle="Ademas los testers pueden dar feedback y cobrar a traves de la plataforma. Y los estudios de videojuegos puede contratar testers, hacer el seguimiento y el pago de los mismos." 
            />

            {/********** MACBOOK ***************/}
            <Macbook video={video}/>

            {/********** ALL DEVICES ***************/}
            <section>
            <div className="wrapper-mockup-devices-goodgame">
              <img src={devices} className="img-mockup-devices-goodgame" />
                <div className="wrapper-text-goodgame">
                  <h2 className='bold title-text-goodgame'>Diseño Accesible</h2>
                  <p className='regular subtitle-text-goodgame'>Siendo una WebApp esta tiene que ser complejo pero accesible en cualquier dispositivo.</p>
                </div>
              </div>
            </section>

            {/********** LOGOS ***************/}
            <div class="wrapper-framework-white">
              <p className='bold title-framework-white'>Frameworks Utilizados</p>
              <ul className="horizontal-container-frameworks">
                <li> <Icon icon="logos:react" width={this.state.width} height={this.state.height} /> </li>
                <li> <Icon icon="logos:figma" width={this.state.width} height={this.state.height} /> </li>
                <li> <Icon icon="vscode-icons:file-type-css" width={this.state.width} height={this.state.height} /> </li>
                <li> <Icon icon="logos:nodejs" width={this.state.width} height={this.state.height} /> </li>
                <li> <Icon icon="logos:express" width={this.state.width} height={this.state.height} /> </li>
                <li> <Icon icon="vscode-icons:file-type-mongo" width={this.state.width} height={this.state.height} /> </li>
                <li> <Icon icon="logos:mocha" width={this.state.width} height={this.state.height} /> </li>
              </ul>
            </div>


            {/********** HALF BIG ***************/}
            <HalfBig 
            title="Aplicación Web desarrollada con MERN Stack" 
            text="Se utilizo React con Mui para el front-end, Node y Express para desarrollar el back-end y MongoDb para la base de datos. Unit testing realizado con Mocha"
            imgRight={halfBig} />

            {/********** UP NEXT ***************/}
            <UpNext
              smallNext={smallNext}
              smallPrevious={smallPrevious}
              urlPrevious="/proyectos/sgr"
              urlNext="/proyectos/crecer"
            />
            {/********** FOOTER ***************/}
            <Footer/>

          </section>
        </>
    );
  }
}