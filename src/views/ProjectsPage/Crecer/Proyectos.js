import React from "react";
import Navbar from "../../../components/Navbars/Navbar5";
import { Icon } from '@iconify/react';

import Macbook from '../../../components/MacbookVideo/macbook';
import TitleProjects from "../../../components/TitleProjects/titleBig"
import InfoBigTextProjects from "../../../components/InfoBigTextProjects/InfoBigText"
import HalfBig from '../../../components/HalfBig/half_and_half';
import UpNext from "../../../components/UpNext/upNext";
import Footer from "../../../components/Footers/Footer2";
import HelloYou from "../../../components/HelloYou";

import video from "../../../assets/Videos/Crecer_1080p.mp4"
import imgLeft from "./portrait.png"
import imgRight from "./ipads.png"
import devices from "./allDevices.png"
import halfBig from './devices2.png'
import smallNext from "../SGR/bigwindow.png"
import smallPrevious from "../GoodGame/smallGoodgame.png"

import alldevices from "./allDevices.css"
import half from "./half_and_half.css"
import halfGrande from "./halfImagenGrande.css"



export default class Crecer extends React.Component {
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
              <TitleProjects color="blue" 
              titlecolor="Crecer " 
              title="plataforma que simplifica el seguimiento pediatrico de niños."  />
            </div>
            <HelloYou/>
            {/********** HALF AND HALF ***************/}
            <section>
              <div class="split-two-image left-two-image">
                <img src={imgLeft} className="img-mockup-portrait" />
              </div>

              <div class="split-two-image right-two-image">
                <img src={imgRight} className="img-mockup-ipads" />
              </div>
            </section>

            {/********** INFO BIG ***************/}
            <InfoBigTextProjects title="Prototipado y desarrollo de una aplicación web robusta." 
            bodytitle="Este sistema tiene un sitio institucional. Cada usuario puede crear un perfil, con sus hijos en el cual puede registrar controles pediatricos, agregar vacunas al calendario y consultar percentiles." 
            />

            {/********** MACBOOK ***************/}
            <Macbook video={video}/>

            {/********** ALL DEVICES ***************/}
            <section>
              <div className="wrapper-mockup-devices">
                <img src={devices} className="img-mockup-devices" />

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
            title="Aplicación Web desarrollada" 
            text="a través de React.Js utilizando HTML y CSS para el front-end. También, el back-end fue realizado utilizando Node.js, vinculandolo a una base de datos con MongoDb."
            imgRight={halfBig} />

            {/********** UP NEXT ***************/}
            <UpNext
              smallNext={smallNext}
              smallPrevious={smallPrevious}
              urlPrevious="/proyectos/goodgame"
              urlNext="/proyectos/sgr"
            />

            {/********** FOOTER ***************/}
            <Footer/>

          </section>

    </>
    );
  }
}