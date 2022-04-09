import styles from './InfoBigText.css'
import { css } from '@emotion/css'
import { Icon } from '@iconify/react';


const Frameworks = (props) => {

    const {title,color,bodytitle,json}=props;
    const height= "6.5vmax"
    const width= "4.5vmax"
    const renderCard=(card,index)=>{
        return(
            <div className='border-icon-framework'>
                <Icon 
                    icon={card.icon} 
                    style={{width:width, height:height}} 
                />
                <p>React</p>
                <p>biblioteca Javascript de código abierto diseñada para crear .</p>
            </div>
                
        )
    }
    
    return (
        <>
        <div className= "body-about-info-text-big">
            <p className= 'medium title-info-text-big-inicio'>{title} <span className='title-info-orange'>{color}</span></p>
            
            <div className='container-body-info-text-big-inicio'>
                <p className='medium body-info-text-big-inicio'>{bodytitle}</p>
            </div>
        </div>
        <div className="container-frameworks-inicio">
            <div className='wrapper-framework-text'>
                <p>Backend</p>
            </div>

            <div className='wrapper-framework-card'>
                {json.map(renderCard)}
            </div>
        </div>
        </>
    )
  }
  
  export default Frameworks