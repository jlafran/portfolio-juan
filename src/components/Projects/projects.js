import styles from './projects.css'
import img from "../../assets/img/projects/img_1.png"
import img2 from "../../assets/img/projects/img_2.png"
import img3 from "../../assets/img/projects/img_3.png"
const Projects = () => {
    return (
      <>
    <div className="wrapper hasCursor">
          <p className="extrabold tittle">Proyectos</p>
          <hr className='line' ></hr>
                <table className="project-table">
                <tr className="text-tag center line">
                  <td className="picture-column"><a><div className="img-container" >
                    <img src={img} alt="Ceramic Vase"></img></div>
                  </a></td>
                  <td className="large-column"><p className="extrabold hasCursorORANGE">Ceramics Vase Simple</p></td>
                  <td className="empty-column"></td>
                    <td className="small-column"><p className="middle text-small hasCursorORANGE">
                      Sed ut perspiciatis unde omnis iste natus error 
                      sit voluptatem accusantium doloremque laudantium, 
                      totam rem aperiam, eaque ipsa quae ab illo inventore 
                      veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p></td>
                </tr>

                <tr class="text-tag center line">
                  <td class="picture-column"><a><div class="img-container" >
                    <img src={img2} alt="Classic Painting"></img></div>
                  </a></td>
                  <td class="large-column"><p class="extrabold hasCursorORANGE" >Oil Painting</p></td>
                  <td class="empty-column"></td>
                    <td class="small-column"><p className="middle text-small hasCursorORANGE">
                      Sed ut perspiciatis unde omnis iste natus error 
                      sit voluptatem accusantium doloremque laudantium, 
                      totam rem aperiam, eaque ipsa quae ab illo inventore 
                      veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p></td>
                </tr>
              
                <tr class="text-tag center line">
                  <td class="picture-column"><a><div class="img-container" >
                    <img src={img3} alt="Classic Painting"></img></div>
                  </a></td>
                  <td class="large-column"><p class="extrabold hasCursorORANGE" >Sculpture</p></td>
                  <td class="empty-column"></td>
                    <td class="small-column"><p className="middle text-small hasCursorORANGE">
                      Sed ut perspiciatis unde omnis iste natus error 
                      sit voluptatem accusantium doloremque laudantium, 
                      totam rem aperiam, eaque ipsa quae ab illo inventore 
                      veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p></td>
                </tr>
                </table>
          </div>
          </>
    )
  }
  
  export default Projects
