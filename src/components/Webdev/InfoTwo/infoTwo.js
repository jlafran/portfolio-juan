import styles from './infoTwo.css'
import { css } from '@emotion/css'


const InfoBig = (props) => {

    const {title,text}=props;
        
    let {color}=props;
    console.log(color);
    if (color==undefined){
        color="default"
    }

    return (
        <>
        <div className='body-about-info-two'>
            <div className='container-titles-info-two'>
                <p className= {`extrabold title-info-two ${color+"-two"}`}>{title}</p>
            </div>
            
            <div>
                <p className='medium information-info-two space-bottom body-info-two'>{text}</p>
            </div>
        </div>
        </>
    )
  }
  
  export default InfoBig