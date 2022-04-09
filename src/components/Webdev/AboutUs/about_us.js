import styles from './about_us.css'
import { mq } from '../../css/HelloWorld/tokens/helper'
import { css } from '@emotion/css'


const AboutUs = (props) => {

    const {title,subtitle,p1,p2,p3}=props;

    return (
        <>
            <div className='index'>
                <div className='body-about'>
                    <div className='container-titles'>
                        <p className='bold title-blue' >{title}</p>
                        <p className='bold title-white'>{subtitle}</p>
                    </div>
                    <div className='font-size-about'>
                        <table className='padding-left-info' >
                            <tr className="padding-left-info">
                              <td className="line-down">
                                <div className="icono">
                                      <i class="fas fa-times"></i>
                                  </div>
                                  <p className="medium info">{p1}
                                    </p>
                              </td>
                              </tr>
        
                              <tr >
                              <td className="line-down padding-left-info">
                                <div className="icono">
                                    <i class="fas fa-times"></i>
                                </div>
                                <p className="medium info">{p2}
                                    </p>
                                </td>
                            </tr>
        
                            <tr className="">
                              <td className="">
                                <div className="icono">
                                    <i class="fas fa-times"></i>
                                </div>
                                <p className="medium info">{p3}
                                    </p>
                              </td>
                              
                              <td className="">
                              
                                  </td>
                            </tr>
        
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
  }

  export default AboutUs
