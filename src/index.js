import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";

import { GlobalScrollProvider } from './hooks/useGlobalScroll';
import { GlobalMouseMoveProvider } from './hooks/useGlobalMouseMove';

import Inicio from './views/inicio'

import Crecer from './views/ProjectsPage/Crecer/Proyectos'
import SGR from './views/ProjectsPage/SGR/Proyectos'
import GoodGame from './views/ProjectsPage/GoodGame/Proyectos'
import AboutMe from "./views/aboutMe";


function Wrapper({ children }) {
  return (
    <GlobalScrollProvider>
      <GlobalMouseMoveProvider>{children}</GlobalMouseMoveProvider>
    </GlobalScrollProvider>
  );
}


ReactDOM.render(
  <Wrapper>
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/" exact component={Inicio} />

      <Route path='/me' exact component={AboutMe}/>
      
      <Route path='/proyectos/crecer' exact component={Crecer}/>
      <Route path='/proyectos/sgr' exact component={SGR}/>
      <Route path='/proyectos/goodgame' exact component={GoodGame}/>

      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>
  </Wrapper>,
  document.getElementById("root")
);
