import styles from './aboutMe.css'
import { css } from '@emotion/css'
import { Icon } from '@iconify/react';


const AboutMe = (props) => {

    const {title,text,link,text2,footer,img,icon}=props;
    const height= "6.5vmax"
    const width= "4.5vmax"
    
    return (
        <article className='hero'>
        <div className="container">
          <div className="flex-content">
              <div>
                <h1 className='semibold'>
                  <span className='emoji-hand'>👋</span>
                  {title} 
                  </h1>
                <p className="subtitle small-width">{text} 
                    <a to="/projects">{link}</a>
                    {text2}
                </p>
              </div>
              <img src={img} alt="Me" className="main-image" />
            </div>
            <p className="hero-buttons">
              <a to="/aboutme" className="hero-button">
                {footer}
              </a>
            </p>
        </div>
        </article>
    )
  }
  
  export default AboutMe