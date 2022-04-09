import styles from './infoBigRight.css'
import { css } from '@emotion/css'
import { height, width } from 'tailwindcss/defaultTheme';


const InfoBigRight = (props) => {

    const {title,text}=props;
    const {img,height,width}=props
    
    let {color}=props;
    console.log(color);
    if (color==undefined){
        color="default"
    }

    return (
        <>
            <div className=''>
                <div className=''>
                    <div className='sectionoverflow3b-big'>

                        <div className='textc-big'>
                            <div className=''>
                                <p className={`extrabold title-info-big-right ${color+"-right"}`} >{title}</p>
                                <p className='medium information-info-big space-bottom body-info-big-right'>{text}
                                </p>
                            </div>
                        </div>

                        <div className='imagec-right-big'>
                            <img className='image-info-big' src={img} height={height} width={width}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
  }
  
  export default InfoBigRight