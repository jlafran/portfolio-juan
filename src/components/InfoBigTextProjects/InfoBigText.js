import styles from './InfoBigText.css'
import { css } from '@emotion/css'


const InfoBigTextProjects = (props) => {

    const {title,bodytitle}=props;
    
    let {color}=props;
    if (color==undefined){
        color="default"
    }
    
    return (
        <section className="wrapper-all-projects-big">
        <div className= "body-about-info-text-big">
            <p className= 'medium title-info-text-big-projects'>{title}</p>
            
            <div className='container-body-info-text-big-projects'>
                <p className='medium body-info-text-big'>{bodytitle}</p>
            </div>
        </div>
        </section>
    )
  }
  
  export default InfoBigTextProjects