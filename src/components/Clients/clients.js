import styles from './clients.css'
import Client1 from '../../assets/img/pwc.png'
import Client2 from '../../assets/img/trabajo.jpg'
import Client3 from '../../assets/img/legislatura.png'
import Client4 from '../../assets/img/img4.png'
import Client5 from '../../assets/img/img5.png'

const Clients = () => {
    return (
        <div class="our-clients">
          <p className='title-clients extrabold'>Organizations i'm proud of working with </p>
        <ul className="wrapper-clients-logos">
          <li> <img className="image-logo-clients-1" src={Client1} alt=""/> </li>
            <li> <img className="image-logo-clients-2" src={Client2} alt=""/> </li>
            <li> <img className="image-logo-clients-3" src={Client3} alt=""/> </li>
          </ul>
        </div>
    )
  }
  
  export default Clients

