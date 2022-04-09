import styles from './recomended.scss'
import { css } from '@emotion/css'


const RecomendedProjects = (props) => {

    const {title1,text1,img1,title2,text2,img2,title3,text3,img3}=props;
    
    return (
        <section className='wrapper-card-proyecto'>
            <p class="bold title-next">Otros Proyectos </p>
            <div class="containerCardProyecto-recomended">
                <div class="cardProyecto-recomended">
                  <img src= {img1} alt="" class="cardProyecto-recomended__img"/>
                  <h4 class="medium cardProyecto-recomended__title">{title1}</h4>
                  <p class="medium cardProyecto-recomended__description">{text1} </p>
                </div>

                <div class="cardProyecto-recomended">
                  <img src= {img2} alt="" class="cardProyecto-recomended__img"/>
                  <h4 class="medium cardProyecto-recomended__title">{title2}</h4>
                  <p class="medium cardProyecto-recomended__description">{text2} </p>
                </div>

                <div class="cardProyecto-recomended">
                  <img src= {img3} alt="" class="cardProyecto-recomended__img"/>
                  <h4 class="medium cardProyecto-recomended__title">{title3}</h4>
                  <p class="medium cardProyecto-recomended__description">{text3} </p>
                </div>
      
            </div>
        </section>
    )
  }
  
  export default RecomendedProjects