import React, { useState } from "react";
import './productFilters.css';
import './Cards/card.scss'
import { ControlTranslate } from '../Parallax/ControlTranslate';
import { ScrollableArea } from '../Parallax/ScrollableArea';
import JSONGENERAL from "../../assets/Inicio/producto.json"
import JSONDESARROLLO from "../../assets/Inicio/desarrollo.json"
import JSONSITIO from "../../assets/Inicio/sitio.json"
import JSONACTUALIZAR from "../../assets/Inicio/actualizar.json"
import JSONNEGOCIO from "../../assets/Inicio/negocios.json"



function ProductsFilter(){
    const renderCard=(card,index)=>{
          return(
            <div class="card-container">
            <div class="card card--dark">
                <a href={card.url}>
                <div class="card--display ">
                    <h1 class="bold card-title-single">{card.title}</h1>
                    <h2 className="regular card-text-products" >{card.text}</h2>
                </div>
                <div class="card--hover">
                    <h2>{card.titleInfo}</h2>
                    <p>{card.info}</p>
                    <p class="link">Click para más Info.</p>
                </div>
                </a>
                <div class="card--border"></div>
            </div>
        </div>
          )
    }
    
    const [searchTerm, setSearchTerm] = useState(JSONGENERAL);
    return (
        <>
            <div className="section-product">
                <div className="wrap-product">
                    <a href="#" filter="default" className="bold text-hoover text-hoover1" onClick={(event)=>{
                      event.preventDefault()
                      setSearchTerm(JSONGENERAL)
                    }}>General</a>
                    <a href="#" filter="desarrollo" className="bold text-hoover text-hoover2" onClick={(event)=>{
                      event.preventDefault()
                      setSearchTerm(JSONDESARROLLO)
                    }}>Desarrollo</a>
                    <a href="#" filter="sitio" className="bold text-hoover text-hoover3" onClick={(event)=>{
                      event.preventDefault()
                      setSearchTerm(JSONSITIO)
                    }}>Sitio Web</a>
                    <a href="#" className="bold text-hoover text-hoover4" onClick={(event)=>{
                      event.preventDefault()
                      setSearchTerm(JSONACTUALIZAR)
                    }}>Actualizar</a>
                    <a href="#" className="bold text-hoover text-hoover5" onClick={(event)=>{
                      event.preventDefault()
                      setSearchTerm(JSONNEGOCIO)
                    }}>Nuevos Negocios</a>
                </div>

                <div className="container-product">
                    {searchTerm.map(renderCard)}
                </div>
            </div>

        </>
        )
}
export default ProductsFilter