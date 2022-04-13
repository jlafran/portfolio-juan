import React from "react";
import styles from './footer2.css'
import Logo from '../../assets/img/logoEmpresa.JPG'


export default function Footer() {
  return (
    <>
    <div class='containerFooter medium'>
    <div className="line-footer"/>
      <div class='row'>
        <div class='col'>
          <img src={Logo} class='logo'></img>
          <p>Calccitanium, animate, potenciate, rescatate. </p>
          </div>
          <div class='col'>
          <h3>Office <div class='underline'><span></span></div></h3>
          <p>ITPL Road</p>
          <p>Whitefield, Bangalore</p>
          <p>Tuvieja, Tuvieja</p>
          <p className='email-id'>tuvieja@hotmail.com</p>
          <h4>+54 113500335</h4></div>
          <div class='col'>
            <h3>Links<div class='underline'><span></span></div></h3>
            <ul>
              <li><a href=''>Inicio</a></li>
              <li><a href=''>Servicios</a></li>
              <li><a href=''>Nosotros</a></li>
              <li><a href=''>Blog</a></li>
              <li><a href=''>Contacto</a></li>
            </ul>
            
            
            </div>
          <div class='col'>
            <h3>Newsletter<div class='underline'><span></span></div></h3>
            <form>
              <i class='far fa-envelope'></i>
              <input placeholder='Contacta con nosotros' required></input>
              <button type='submit'><i class='fas fa-arrow-right'></i></button></form>
            <div class='social-icons'>
              <i class='fab fa-facebook-f'></i>
              <i class='fab fa-twitter'></i>
              <i class='fab fa-whatsapp'></i>
              <i class='fab fa-pinterest'></i>

              </div>
            </div>
            <p class='copyright'>Calccitanium - Todos los derechos reservados</p>
        </div>
        </div>
    </>
  );
}
