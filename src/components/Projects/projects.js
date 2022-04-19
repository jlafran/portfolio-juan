import styles from './projects.css'
import { Icon } from '@iconify/react';

const Projects = (props) => {
  const {title1,text1,img1,link1,title2,text2,img2,link2,title3,text3,img3,link3}=props
    return (
      <>
    <div className="wrapper hasCursor">
          <p className="extrabold tittle">Projects</p>
          <hr className='line' ></hr>
              <a href={link1} style={{cursor:"unset"}}>
                <div className="text-tag center line hasCursorORANGE">

                    <div className="img-container" >
                      <img src={img1} alt="GoodGame" placeholder="GoodGame"></img>
                    </div>

                    <div className="title-text-big">
                      <p className="bold  hasCursorORANGE">{title1}</p>
                    </div>

                    <div className="text-small">
                      <p className="middle  hasCursorORANGE">{text1}</p>
                    </div>

                    <div className='wrapper-icon'>
                      <Icon className="play-icon" icon="ant-design:play-circle-filled" color="white" />
                      <Icon className="play-icon-off" icon="ant-design:play-circle-outlined" color="#5d5f61" />
                    </div>

                  </div>
                </a>

                <a href={link2} style={{cursor:"unset"}}>
                  <div className="text-tag center line hasCursorORANGE">
                    <div className="img-container" >
                    <img src={img2} alt="Crecer" placeholder="Crecer"></img>
                    </div>

                    <div className="title-text-big">
                      <p className="bold  hasCursorORANGE">{title2}</p>
                    </div>

                    <div className="text-small">
                      <p className="middle  hasCursorORANGE">{text2}</p>
                    </div>

                    <div className='wrapper-icon'>
                      <Icon className="play-icon" icon="ant-design:play-circle-filled" color="white" />
                      <Icon className="play-icon-off" icon="ant-design:play-circle-outlined" color="#5d5f61" />
                    </div>
                </div>
               </a>

                <a href={link3} style={{cursor:"unset"}}>
                  <div className="text-tag center line hasCursorORANGE">
                    <div className="img-container" >
                    <img src={img3} alt="SGR" placeholder="SGR"></img>
                    </div>

                    <div className="title-text-big">
                      <p className="bold  hasCursorORANGE">{title3}</p>
                    </div>

                    <div className="text-small">
                      <p className="middle  hasCursorORANGE">{text3}</p>
                    </div>

                    <div className='wrapper-icon'>
                      <Icon className="play-icon" icon="ant-design:play-circle-filled" color="white" />
                      <Icon className="play-icon-off" icon="ant-design:play-circle-outlined" color="#5d5f61" />
                    </div>
                </div>
              </a>

          </div>
          </>
    )
  }
  
  export default Projects
