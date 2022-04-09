import styles from './InfoBigText.css'
import { css } from '@emotion/css'


const InfoBigText = (props) => {

    const {title,text}=props;
    
    let {color}=props;
    console.log(color);
    if (color==undefined){
        color="default"
    }
    
    return (
        <>
        <div className='body-about-info-text-big'>
            <div className='container-titles-info-text-big'>
                <p className= {`extrabold title-info-text-big ${color+"-big-text"}`}>{title}</p>
            </div>
            
            <div className='container-body-info-text-big'>
                <p className='medium information-info-text-big space-bottom body-info-text-big'>{text}</p>
            </div>
        </div>
        </>
    )
  }
  
  export default InfoBigText