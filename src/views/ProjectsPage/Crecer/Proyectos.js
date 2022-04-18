import React from "react";
import Header from "../../../components/Navbar/navbar"
import { Icon } from '@iconify/react';

import Macbook from '../../../components/MacbookVideo/macbook';
import TitleProjects from "../../../components/TitleProjects/titleBig"
import InfoBigTextProjects from "../../../components/InfoBigTextProjects/InfoBigText"
import HalfBig from '../../../components/HalfBig/half_and_half';
import UpNext from "../../../components/UpNext/upNext";
import Footer from "../../../components/Footer/footer";
import HelloYou from "../../../components/HelloYou";

import video from "../../../assets/Videos/Crecer_1080p.mp4"
import imgLeft from "./portrait.png"
import imgRight from "./ipads.png"
import devices from "./allDevices.png"
import halfBig from './devices2.png'
import smallNext from "../SGR/smallSGR.png"
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
          <Header/>
          <section className='containerProyectos'>
            {/********** TITLE ***************/}
            <div>
              <TitleProjects color="blue" 
              titlecolor="Crecer " 
              title="platform that simplifies the pediatric follow-up of children."  />
            </div>
            {/********** HALF AND HALF ***************/}
            <section>
              <div class="split-two-image left-two-image">
                <img loading="lazy" src={imgLeft} className="img-mockup-portrait" />
              </div>

              <div class="split-two-image right-two-image">
                <img loading="lazy" src={imgRight} className="img-mockup-ipads" />
              </div>
            </section>

            {/********** INFO BIG ***************/}
            <InfoBigTextProjects title="This WebApp was developed to help parents through child's early years." 
            bodytitle="This system has an institutional site. Each user can register pediatric controls, add vaccines to the calendar and consult percentiles on multiple children." 
            />

            {/********** MACBOOK ***************/}
            <Macbook  video={video}/>

            {/********** TEXT ***************/}
            <div className="long-text-project">
              <h1 className="semibold" >Overview</h1>
              <p className="regular">This project was my introduction to web aplications, we were a team of two, both of us developers. We had to develop an institutional landing page for a pediatric clinic and as a service for their costumers they wanted a web aplication.</p>
              <p className="regular">It has a sign in and this will take you to the manager where you can see every pediatric control, messurements and vaccines calendar and also be able to edit and create new profiles for your children.</p>
            </div>

            <div className="long-text-project">
              <h1 className="semibold" >First Steps</h1>
              <p className="regular">For the first time the business requirements were simple and intuitive, which is always a plus. But it it was our first time developing a fully web aplication. And our first time using React and Node.</p>
              <p className="regular">The API was a fairly simple and direct CRUD (Create, Read, Update and Delete) Which meant that right away we concetrated on developing and testing the backend.</p>
            </div>


            {/********** ALL DEVICES ***************/}
            <section>
              <div className="wrapper-mockup-devices">
                <img loading="lazy" src={devices} className="img-mockup-devices" />

              </div>
            </section>

            {/********** TEXT ***************/}
            <div className="long-text-project padding-top">
              <h1 className="semibold" >Front to Back</h1>
              <p className="regular" >Node and Express where great tools to work with, and comming from Java the code seemed slimmer and readable.</p>
              <p className="regular" >Once we set up the end points, we proceed to work on the frontend, we choose Mui to get the work done quickly.</p>
              <p className="regular" >This was a great choise since that was the aesthetic they were hoping to get and for us it meant less work on the development and design of custom assets.</p>
              <p className="regular" >We used Mongoose to connect the data base to Express, it was fairly direct and we didn't have any issues.</p>
            </div>

            {/********** LOGOS ***************/}
            <div class="wrapper-framework-white">
              <p className='bold title-framework-white'>Frameworks Utilizados</p>
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
            title="Conclusion" 
            text="My first project with the MERN Stack has been straight foward. I will seriously consider this Stack for future Web Aplication projects, since it's fairly intuitive and fast."
            text2="I'm happy with the result and it only took 1 month to develop part-time."
            text3="Thanks for reading, hope every project goes as smoothly!!"
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