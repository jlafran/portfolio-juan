import styles from './herramientas.css'
import Client1 from '../../assets/img/1.png'
import Client2 from '../../assets/img/2.png'
import Client3 from '../../assets/img/3.png'
import Client4 from '../../assets/img/4.png'
import Client5 from '../../assets/img/4.ico'
import Client6 from '../../assets/img/6.png'
const Herramientas = () => {
    return (
      <div class="our-tools">
      <div>
        <br/>
        <br/>
        <p className='title-tools extrabold'>WORKS WITH 30+ FRAMEWORKS </p>
        <br></br>
        <br/>
        </div>
        <ul>
          <li> <img src={Client1} alt=""/> </li>
            <li> <img src={Client2  } className="hola" alt=""/> </li>
            <li> <img src={Client3} alt=""/> </li>
            <li> <img src={Client4} alt=""/> </li>
            <li> <img src={Client5} alt=""/> </li>
            <li> <img src={Client6} alt=""/> </li>
          </ul>
        </div>
    )
  }
  
  export default Herramientas

