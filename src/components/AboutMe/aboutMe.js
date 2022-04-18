import styles from './aboutMe.css'
import { css } from '@emotion/css'
import { HashLink } from "react-router-hash-link";
import LazyLoad from 'react-lazyload';


const AboutMe = (props) => {

    const {title,text,link,text2,footer,img}=props;
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
                <p className="subtitle small-width">{text} </p>
                <p className="subtitle small-width">{text2} </p>
              </div>
              <LazyLoad>
                <img src={img} alt="Me" className="main-image" placeholder="Me"/>
              </LazyLoad>
            </div>
            <p className="hero-buttons">
              <a href="/me" className="hero-button">
                {footer}
              </a>
            </p>
        </div>
        </article>
    )
  }
  
  export default AboutMe