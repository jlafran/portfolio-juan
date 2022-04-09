import React,{Fragment} from "react";
import Footer from "../components/Footers/Footer2";
import HelloYou from "../components/HelloYou/index";
import ContactForm from "../components/Form/ContactForm";
import IndexNavbar from "../components/Navbars/Navbar5";
import Clients from '../components/Clients/clients'
import Projects from "../components/Projects/projects";
import Frameworks from "../components/Frameworks/InfoBigText"

import styles from '../css/inicio.css';
import '../css/font.css'
import "../css/projects.css"
import "../css/proyectos.css"
import "../css/template.css"

import json from "../assets/json/framework.json"

class Index extends React.Component {
  state = {
    
  }

  render() {
    
    return (
    <>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    </style>

    <IndexNavbar fixed />
    <section className="HelloYou flex h-screen">
        <Fragment>
          <HelloYou appearBaseDelay={80} appearElementsDelay={300} />
        </Fragment>
    </section>

    <section className="seccionAU">
      <div className="">

        {/********** START ZIGZAG ***************/}
    <div className="zig-zag indexz0"
          >
              <svg
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="d" x1="0%" x2="60.426%" y1="52.453%" y2="51.241%">
                    <stop offset="0%" stopColor="#FF39C4" />
                    <stop offset="100%" stopColor="#5F7CF1" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#d)"
                  d="M71.76 27.259c-2.35.58-6.473 3.095-12.052 7.51-11.729 9.28-29.473 26.54-53.158 51.725a3.5 3.5 0 0 1-5.1-4.795c23.903-25.417 41.85-42.873 53.915-52.42 6.318-4.999 11.118-7.926 14.716-8.816 5.241-1.295 8.801 1.7 8.801 7.15 0 12.33 1.079 35.961 2.64 52.39.83 8.747 1.785 15.59 2.817 19.944 5.31-11.268 20.2-33.64 34.563-51.903 8.22-10.453 15.475-18.553 20.859-23.091 3.351-2.826 6.064-4.403 8.558-4.57 4.062-.274 6.19 2.834 6.19 7.23 0 11.424 3.106 37.24 7.04 56.644 2.231 11.01 4.62 19.576 6.932 24.564.721 1.555 1.397 2.656 1.888 3.261.04-.056.082-.117.126-.183 1.82-2.725 2.286-3.554 11.671-20.542 7.541-13.65 13.025-23.254 19.102-33.193 8.708-14.243 16.844-26.073 24.585-35.362 14.542-17.454 27.243-25.483 38.4-21.207a3.5 3.5 0 1 1-2.506 6.536c-7.266-2.785-17.774 3.859-30.517 19.152-7.487 8.986-15.445 20.555-23.99 34.532-6.011 9.832-11.451 19.36-18.947 32.927-9.633 17.438-9.982 18.058-11.978 21.046-2.21 3.307-5.368 4.687-8.595 3.038-2.206-1.127-3.936-3.495-5.59-7.06-2.6-5.607-5.11-14.611-7.442-26.118-3.985-19.655-7.125-45.636-7.179-57.72-.816.483-1.931 1.276-3.237 2.377-4.932 4.158-11.919 11.959-19.867 22.066-15.136 19.246-30.985 43.345-34.653 52.661-.61 1.551-1.251 2.736-2.019 3.616-1.257 1.441-3 2.194-4.925 1.627-2.425-.714-3.592-2.802-4.667-6.397-1.396-4.673-2.58-12.605-3.588-23.212-1.582-16.654-2.671-40.506-2.671-53.052 0-.14-.004-.267-.011-.381a5.434 5.434 0 0 0-.11.026z"
                />
              </svg>
          </div>
          {/********** END ZIGZAG ***************/}

          

            {/********** CIRCLE ***************/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className='circle indexz0'
              >
                <defs>
                  <linearGradient id="a" x1="38.355%" x2="50%" y1="-19.876%" y2="119.385%">
                    <stop offset="0%" stopColor="#079BF6" />
                    <stop offset="100%" stopColor="#F82075" />
                  </linearGradient>
                </defs>

                <circle cx="100" cy="90" r="110" fill="url(#a)" overflow="visible" />
              </svg>
          {/********** END CIRCLE ***************/}

         

          {/********** TRIANGLE ***************/}
          <div className="triangulo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="b" x1="14.739%" x2="69.409%" y1="32%" y2="56.101%">
                    <stop offset="0%" stopColor="#EEE" />

                    <stop offset="100%" stopColor="#FF0F3E" />
                  </linearGradient>
                </defs>

                <path fill="url(#b)" fillRule="evenodd" d="M21.659 0L0 78l130-51.909z" />
              </svg>
            </div>
          {/********** END TRIANGLE ***************/}

            <div className="zig-zag2 indexz0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="267"
                height="120"
              >
                <defs>
                  <linearGradient id="h" x1="0%" x2="60.426%" y1="52.453%" y2="51.241%">
                    <stop offset="0%" stopColor="#1d5ca7" />
                    <stop offset="100%" stopColor="#eeaeca" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#h)"
                  d="M71.76 27.259c-2.35.58-6.473 3.095-12.052 7.51-11.729 9.28-29.473 26.54-53.158 51.725a3.5 3.5 0 0 1-5.1-4.795c23.903-25.417 41.85-42.873 53.915-52.42 6.318-4.999 11.118-7.926 14.716-8.816 5.241-1.295 8.801 1.7 8.801 7.15 0 12.33 1.079 35.961 2.64 52.39.83 8.747 1.785 15.59 2.817 19.944 5.31-11.268 20.2-33.64 34.563-51.903 8.22-10.453 15.475-18.553 20.859-23.091 3.351-2.826 6.064-4.403 8.558-4.57 4.062-.274 6.19 2.834 6.19 7.23 0 11.424 3.106 37.24 7.04 56.644 2.231 11.01 4.62 19.576 6.932 24.564.721 1.555 1.397 2.656 1.888 3.261.04-.056.082-.117.126-.183 1.82-2.725 2.286-3.554 11.671-20.542 7.541-13.65 13.025-23.254 19.102-33.193 8.708-14.243 16.844-26.073 24.585-35.362 14.542-17.454 27.243-25.483 38.4-21.207a3.5 3.5 0 1 1-2.506 6.536c-7.266-2.785-17.774 3.859-30.517 19.152-7.487 8.986-15.445 20.555-23.99 34.532-6.011 9.832-11.451 19.36-18.947 32.927-9.633 17.438-9.982 18.058-11.978 21.046-2.21 3.307-5.368 4.687-8.595 3.038-2.206-1.127-3.936-3.495-5.59-7.06-2.6-5.607-5.11-14.611-7.442-26.118-3.985-19.655-7.125-45.636-7.179-57.72-.816.483-1.931 1.276-3.237 2.377-4.932 4.158-11.919 11.959-19.867 22.066-15.136 19.246-30.985 43.345-34.653 52.661-.61 1.551-1.251 2.736-2.019 3.616-1.257 1.441-3 2.194-4.925 1.627-2.425-.714-3.592-2.802-4.667-6.397-1.396-4.673-2.58-12.605-3.588-23.212-1.582-16.654-2.671-40.506-2.671-53.052 0-.14-.004-.267-.011-.381a5.434 5.434 0 0 0-.11.026z"
                />
              </svg>
          </div>
    <Frameworks
      title="Estos son los lenguajes y frameworks"
      color=" que utilizó!"
      bodytitle="A través de los proyectos desarrollados aprendí a utilizar estas herramientas, junto a metodologías y solución de problemas."
      json={json}
    />
    <Clients className="adelante"/>
    </div>
    </section>

    <section className="section-contact">
      <Projects/>
      <ContactForm/> 
      <Footer/>
    </section>
  </>

    )
  }
}

export default Index; //