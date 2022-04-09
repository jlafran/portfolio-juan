import styles from './info.css'
import { css } from '@emotion/css'


const Info = (props) => {
    const {JSONDATA}=props;
    const renderInfo=(info,index)=>{
        return(
        <div className='body-about-info'>
            <div className='container-titles-info'>
                <p className='bold title-info' >{info.title}</p>
                <p className='bold title-white'>{info.subtitle}</p>
            </div>
            <div className=''>
                <ul className='ul-info'>
                    <li>
                        <p className='bold information-info space-bottom'>{info.bodytitle}
                        </p>
                        <p className='medium information-info space-bottom'>{info.bodysubtitle}
                        </p>
                        <p className='medium information-info space-bottom'>{info.bodytext}
                        </p>
                    </li>

                    <li>
                        <img className='image-info' src={info.img} />
                    </li>
                </ul>
                
            </div>
        </div>
        )
    }
    
    return (
        <>
        <div className='index'>
            {JSONDATA.map(renderInfo)}
        </div>
        </>
    )
  }
  
  export default Info
