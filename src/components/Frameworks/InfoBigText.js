import styles from './InfoBigText.css'
import { css } from '@emotion/css'
import { Icon } from '@iconify/react';


const Frameworks = (props) => {

    const {title,color,bodytitle,front,back,db}=props;
    const height= "5vmax"
    const width= "4.8vmax"
    const renderCard=(card,index)=>{
        return(
            <div className='border-icon-framework'>
                <Icon 
                    icon={card.icon} 
                    style={{width:width, height:height}} 
                />
                <p className='medium logo-text-framework' >{card.title}</p>
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
                <p className='bold category-text-framework first-text'>Backend</p>
                <p className='bold category-text-framework'>Frontend</p>
            </div>

            <div className='wrapper-framework-card'>
                {back.map(renderCard)}
            </div>
        </div>

        <div className="container-frameworks-inicio">
            <div className='wrapper-framework-text'>
                <p className='bold category-text-framework'>Languages</p>
            </div>

            <div className='wrapper-framework-card'>
                {front.map(renderCard)}
            </div>
        </div>

        <div className="container-frameworks-inicio">
            <div className='wrapper-framework-text'>
                <p className='bold category-text-framework'>Data Base</p>
            </div>

            <div className='wrapper-framework-card'>
                {db.map(renderCard)}
            </div>
        </div>
        </>
    )
  }
  
  export default Frameworks