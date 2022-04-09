import styles from './upNext.css'
import { css } from '@emotion/css'

const UpNext = (props) => {

    const {smallPrevious,smallNext,urlPrevious,urlNext }=props;
    
    return (
        <section className="section-up-next">
        <div className="semibold wrapper-up-next">

          <div className="previous-up-next">
            <a href={urlPrevious}>
            <h1> Previous Project </h1>
            <div className="img-container-next">
                <img src={smallPrevious} alt="Ceramic Vase"
                height="400vw"
                width="400vw" 
                ></img>
            </div>
            </a>
          </div>
          
          <div className="next-up-next">
            <a href={urlNext}>
              <h1> Next Project </h1>
              <div className="img-container-next-next">
                  <img src={smallNext} alt="Ceramic Vase"
                  height="400vw"
                  width="400vw" 
                  ></img>
              </div>
            </a>
          </div>

        </div>
      </section>
    )
  }
  
  export default UpNext