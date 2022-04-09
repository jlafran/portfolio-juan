import styles from './timeline.css'
import { css } from '@emotion/css'
import JSONDATA from '../../assets/ProductsPage/timeline.json'

const Timeline = (props) => {
    const {JSONDATA}=props;
    let {color}=props;
    console.log(color);
    if (color==undefined){
        color="default"
    }
    const renderCard=(card,index)=>{
          return(
            <div class="container-each-square-timeline">
                <div class="inside-square-timeline">
                    <div class="bold circle-timeline">{card.num}
                    </div>
                    <div >
                        <h4 class="medium title-card-timeline">{card.title}</h4>
                        <p class="regular text-card-timeline">{card.text}</p>
                    </div>
                </div>
            </div>
          )
    }
    
    return (
        <>
            <div class="wrapper-timeline">
                <section id="">
                    <div class="wrapper-text-timeline ">
                        <h2 class="bold title-timeline">{props.title}<span className={`bold title-timeline-blue ${color+"-timeline"}`}>{props.titleColor}</span></h2>
                        <p class="regular subtitle-timeline">{props.text}</p>
                    </div>
                    <hr className='line-timeline' ></hr>
                    <div class="container-timeline">
                        {JSONDATA.map(renderCard)}
                    </div>

                </section>
            </div>
        </>
    )
  }
  
  export default Timeline