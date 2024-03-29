import React,{useRef, Fragment} from "react";
import { HashLink } from "react-router-hash-link";

import HelloYou from "../components/HelloYou/index";
import ContactForm from "../components/Form/ContactForm";
import Header from "../components/Navbar/navbar"
import Clients from '../components/Clients/clients'
import Projects from "../components/Projects/projects";
import Frameworks from "../components/Frameworks/InfoBigText"
import AboutMe from "../components/AboutMe/aboutMe";
import Footer from "../components/Footer/footer"

import styles from '../css/inicio.css';
import '../css/font.css'
import "../css/projects.css"
import "../css/proyectos.css"
import "../css/template.css"
import "../components/AboutMe/aboutMe.css"
import "../components/Frameworks/InfoBigText.css"


import front from "../assets/json/front.json"
import back from "../assets/json/back.json"
import db from "../assets/json/db.json"

import goodgame from "./ProjectsPage/GoodGame/smallestGoodgame.png"
import crecer from "./ProjectsPage/Crecer/smallestCrecer.png"
import sgr from "./ProjectsPage/SGR/smallestSGR.png"
import profile from "../assets/img/profile.png"

class Index extends React.Component {
  state = {
  }

  render() {
    
    return (
    <>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    </style>

    <Header/>
    <div style={{backgroundColor: "#141621"}}>
    <section className="HelloYou flex h-screen">
        <Fragment>
          <HelloYou appearBaseDelay={80} appearElementsDelay={300} />
        </Fragment>
    </section>

    <section className="seccionAU">
      <div className="">

          <div className="aboutme">
            <AboutMe
              title="Hey, I'm Juan Cruz."
              text="I'm studying Computer Science at UADE (Argentine University of Enterprise) 🇦🇷."
              link=""
              text2=" Recently finished a Backend course on CoderHouse, and worked at Pwc . This is a curated list of stuff I've done over the years!"
              footer="📖 More about me"
              img={profile}
            />
          </div>

          <div className="clients">
            <Clients/>
          </div>

          <div className="frameworks" id="frameworks">
            <Frameworks
              title="These are the technologies and languages I've"
              color=" worked with!"
              bodytitle="Through the development of new projects, I acquired good practices, new methodologies, and critical thinking skills."
              front={front}
              back={back}
              db={db}
            />
          </div>

          </div>
          </section>

          <section className="section-contact">

            <div className="projects">
              <div id="projects">
              <Projects
                title1="GoodGame"
                text1="Is a platform that connects testers with video games studios, testers can be hired to report bugs or give feedback through the site."
                img1={goodgame}
                link1="/goodgame"

                title2="Crecer"
                text2="Is a web application that allows parents to register pediatric controls, measurements and vaccines. Also edit and create new profiles for your children."
                img2={crecer}
                link2="/crecer"

                title3="Sociedad de Garantía Recíproca"
                text3="Is a Java desktop application to manage bank guarantees, savings accounts, credit cooperatives, customers, and suppliers."
                img3={sgr}
                link3="/sgr"
              />
              </div>
            </div>

            <div className="form">
              <ContactForm/> 
            </div>

            <Footer/>

          </section>
          </div>
  </>

    )
  }
}

export default Index; //