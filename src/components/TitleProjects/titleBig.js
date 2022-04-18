import styles from './titleBig.css'
import { css } from '@emotion/css'


const TitleProjects = (props) => {

    let {color}= props;
    const {title,titlecolor}= props;

    if (color==undefined){
        color="default"
    }
    
    return (
        <>
            <div className='wrapper-title-big-projects'>
            <div className='body-about-info-title-big-projects'>
                <p className='semibold subtitle-info-title-big-projects'>INTRODUCTION</p>
                <p className="semibold title-info-title-big-projects">
                    <span className={`title-color-title-big-projects ${color+"-title"}`}>{titlecolor}</span>
                {title}</p>
            </div>
            </div>
        </>
    )
  }

  export default TitleProjects;