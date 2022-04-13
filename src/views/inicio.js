import React,{Fragment} from "react";
import Footer from "../components/Footers/Footer2";
import HelloYou from "../components/HelloYou/index";
import ContactForm from "../components/Form/ContactForm";
import Header from "../components/Header/Header"
import Clients from '../components/Clients/clients'
import Projects from "../components/Projects/projects";
import Frameworks from "../components/Frameworks/InfoBigText"
import AboutMe from "../components/AboutMe/aboutMe";

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

import goodgame from "./ProjectsPage/GoodGame/smallGoodgame.png"
import crecer from "./ProjectsPage/Crecer/smallCrecer.png"
import sgr from "./ProjectsPage/SGR/bigwindow.png"
import profile from "../assets/img/profile.jpg"

class Index extends React.Component {
  state = {
    
  }

  render() {
    
    return (
    <>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    </style>


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
              text="I'm studying software engineer studying at UADE (Argentine University of Enterprise) 🇦🇷."
              link=""
              text2=" Finished a MERN Backend course on CoderHouse, and worked at Pwc. This is a collection of the things I've learned over the years!"
              footer="📖 More about me"
              img={profile}
            />
          </div>

          <div className="clients">
            <Clients/>
          </div>

          <div className="frameworks">
            <Frameworks
              title="This are the technologies and languages i've"
              color=" worked with!"
              bodytitle="Through development of new projects, i acquired good practices, new methodologies and critical thinking skills."
              front={front}
              back={back}
              db={db}
            />
          </div>

          </div>
          </section>

          <section className="section-contact">

            <div className="projects">
              <Projects
                title1="GoodGame"
                text1="GoodGame es una plataforma que conecta testers con estudios de video juegos, donde los testers son contratados para reportar bugs o dar feedback a traves del sitio."
                img1={goodgame}
                link1="/proyectos/goodgame"

                title2="Crecer"
                text2="Crecer es una aplicación web que permite a padres registrar las vacunas, visitas pediatricas, historial medico, percentil perteneciente, alturay peso de sus hijos."
                img2={crecer}
                link2="/proyectos/crecer"

                title3="Sociedad de Garantía Recíproca"
                text3="Crecer es una aplicación web que permite a padres registrar las vacunas, visitas pediatricas, historial medico, percentil perteneciente, alturay peso de sus hijos."
                img3={sgr}
                link3="/proyectos/sgr"
              />
            </div>

            <div className="form">
              <ContactForm/> 
            </div>

            <div className="footer">
              <Footer/>
            </div>

          </section>
  </>

    )
  }
}

export default Index; //