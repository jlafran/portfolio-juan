
import styles from './testimonials.css'
import p1 from "../../assets/img/p1.png"
import p2 from "../../assets/img/p2.png"
import p3 from "../../assets/img/p3.png"

const Testimonials = () => {
    return (
        <>
<section>
<div class="testimonialsTS">
      <div class="innerTS">
        <h1>Testimonials</h1>
        <div class="borderTS"></div>

        <div class="rowTS">
          <div class="colTS">
            <div class="testimonialTS">
              <img src={p1} alt=""/>
              <div class="nameTS">Full name</div>
              <div class="starsTS">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
            </div>
          </div>

          <div class="colTS">
            <div class="testimonialTS">
              <img src={p2} alt=""/>
              <div class="nameTS">Full name</div>
              <div class="starsTS">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
            </div>
          </div>

          <div class="colTS">
            <div class="testimonialTS">
              <img src={p3} alt=""/>
              <div class="nameTS">Full name</div>
              <div class="starsTS">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</section></>
    )
}

export default Testimonials
