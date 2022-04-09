import styles from './titleBig.css'
import { css } from '@emotion/css'


const TitleBig = (props) => {

    const {title}=props;
    
    let {color}=props;
    console.log(color);
    if (color==undefined){
        color="default"
    }

    return (
        <>
        <div className='body-about-info-title-big'>
            <div className='container-titles-info-title-big'>
                <p className={`black title-info-title-big ${color+"-title"}`}>{title}</p>
            </div>
        </div>
        </>
    )
  }
  
  export default TitleBig