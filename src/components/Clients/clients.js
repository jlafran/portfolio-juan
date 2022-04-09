import styles from './clients.css'
import Client1 from '../../assets/img/img1.png'
import Client2 from '../../assets/img/img2.png'
import Client3 from '../../assets/img/img3.png'
import Client4 from '../../assets/img/img4.png'
import Client5 from '../../assets/img/img5.png'

const Clients = () => {
    return (
        <div class="our-clients">
          <p className='title-clients extrabold'>Trusted by world’s leading companies </p>
        <ul>
          <li> <img src={Client1} alt=""/> </li>
            <li> <img src={Client2} className="hola" alt=""/> </li>
            <li> <img src={Client3} alt=""/> </li>
            <li> <img src={Client4} alt=""/> </li>
            <li> <img src={Client5} alt=""/> </li>
          </ul>
        </div>
    )
  }
  
  export default Clients

