import styles from './infoBig.css'
import { css } from '@emotion/css'

const InfoBig = (props) => {

    const {title,text,img,height,width }=props;
    
    let {color}=props;
    console.log(color);
    if (color==undefined){
        color="default"
    }
    
    return (
        <>
            <div className=''>
                <div className=''>
                    <div className='sectionoverflow3b'>

                        <div className='imagec'>
                            <img className='image-info-big' src={img} height={height} width={width}/>
                        </div>

                        <div className='textc'>
                            <div className=''>
                                <p className={`extrabold title-info-big ${color+"-info"}`} >{title}</p>
                                <p className='medium information-info-big space-bottom body-info-big'>{text}
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
  }
  
  export default InfoBig