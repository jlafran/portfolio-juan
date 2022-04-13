import React from "react";
import Header from "../../../components/Header/Header"
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
import "./text.css"


export default class GoodGame extends React.Component {
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
              <TitleProjects color="green" 
              titlecolor="GoodGame " 
              title="conects testers with gaming studios."  />
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
            <InfoBigTextProjects title="This WebApp let's freelance testers download builds and report bugs." 
            bodytitle="Testers can give feedback,  and get paid throught the platform. And studios can hire testers, organize bug bounties and surveys." 
            />

            {/********** MACBOOK ***************/}
            <Macbook video={video}/>

            <div className="long-text-project">
              <h1 className="semibold" >Overview</h1>
              <p className="regular">This project was done for a university subject with 3 friends, this was developed throught 4 months from the idea to a fully working prototype. My role as a fullstack developer meant that i was responsible for the whole development of the project. But it also meant that i was able to experiment with a new languaje and new technologies.</p>
            </div>

            <div className="long-text-project">
              <h1 className="semibold" >The Problem</h1>
              <p className="regular">First we had a brainstorm to get a great problem. We arrived to an issue that bothered all 3 of us. It was bugs in games!!!</p>
              <p className="regular">Then we proceeded to investigate the main issues that cause games full with bugs. And through a questionnaire and an interview with a project manager in a gaming studio, we where able to pin point two main problems with small and medium gaming studios:</p>
              <p className="list-items regular">Lack of mass testing before launch.</p>
              <p className="list-items regular">Unavailable to hire large teams of full time testers.</p>
            </div>

            <div className="long-text-project" >
              <img src="https://i.pinimg.com/originals/98/5b/f4/985bf4fea1ac21cae8f91491448ff930.gif" alt="bug" />
            </div>

           

            {/********** ALL DEVICES ***************/}
            <section>
            <div className="wrapper-mockup-devices-goodgame">
              <img src={devices} className="img-mockup-devices-goodgame" />
                <div className="wrapper-text-goodgame">
                  <h2 className='bold title-text-goodgame'>Responsive Design</h2>
                  <p className='regular subtitle-text-goodgame'>Since this runs on a browser, I had to take into consideration the resposiveness of the website.</p>
                </div>
              </div>
            </section>

            <div className="long-text-project padding-top">
              <h1 className="semibold" >The Solution</h1>
              <p className="regular" >In the other half of the questionnaire, where questions for gamers and testers alike.</p>
              <p className="regular" >This testers and gammers where eager to work as freelance, either looking for bugs o giving feedback of the game. And were willing to sign an NDA.</p>
              <p className="regular" >The desition was made. We were going to build a platform in which gamers and testers could work with gaming studios.</p>
              <p className="regular" >The studios can hire testers or large groups of gamers and this people can give you feedback of your game, or test your game for bugs and report them.</p>
            </div>

            <div className="long-text-project">
              <h1 className="semibold" >Development</h1>
              <p className="regular" >One of my colleagues made the wireframing and another worked on the overall look and feel of the website.</p>
              <p className="regular" >I started development of the backend with node and express, the main issues i encountered were the structuring the information of each user and connecting the system with the payment API Stripe. Also it was my first time doing unit testing, so that was a beast of it's own, but it really helped specially for developing CRUD request and Mocha made it easier.</p>
              <p className="regular" >Once i managed to get the hang of it, and finished the backend i started with the fronend. Using my friends designs and wireframes i was able to make a clean design. It also helped that i previously worked with React.</p>
              <p className="regular" >Finally i mounted the cluster in mongo and both the backend and frontend in Heroku. After meddling with Heroku i had a fully functioning WebApp.</p>
            </div>

            {/********** LOGOS ***************/}
            <div class="wrapper-framework-white">
              <p className='bold title-framework-white'>Used Frameworks</p>
              <ul className="horizontal-container-frameworks">
                <li> <Icon icon="logos:react" width={this.state.width} height={this.state.height} /> </li>
                <li> <Icon icon="logos:figma" width={this.state.width} height={this.state.height} /> </li>
                <li> <Icon icon="vscode-icons:file-type-html" width={this.state.width} height={this.state.height} /> </li>
                <li> <Icon icon="vscode-icons:file-type-css" width={this.state.width} height={this.state.height} /> </li>
                <li> <Icon icon="logos:nodejs" width={this.state.width} height={this.state.height} /> </li>
                <li> <Icon icon="logos:express" width={this.state.width} height={this.state.height} /> </li>
                <li> <Icon icon="vscode-icons:file-type-mongo" width={this.state.width} height={this.state.height} /> </li>
                <li> <Icon icon="logos:mocha" width={this.state.width} height={this.state.height} /> </li>
              </ul>
            </div>
            
            {/********** HALF BIG ***************/}
            <HalfBig 
            title="The Result" 
            text="Through the 4 months of development i learned lots of things. From interviewing and looking for business needs, to developing a robust and complex API."
            text2="Also got to work with asynchronous functions, and integrate with external API's."
            text3="Thanks for reading all the way, hope this helps you out."
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