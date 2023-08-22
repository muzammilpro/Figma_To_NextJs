
import Navbar from './(Components)/Navbar/Navbar'
import Cards from './(Components)/Cards/Cards'
import Button from './(Components)/Button/Button'
import VirtualImages from './(Components)/VitualImages/VirtualImages'
import img from '../public/img/Campus1.png'
import img1 from '../public/img/Campus2.png'
import img2 from '../public/img/Campus3.png'
import OurFacilitiesCard from './(Components)/OurFacilitiesCard/OurFacilitiesCard'
import img3 from '../public/img/libary.png'
import img4 from '../public/img/playground.png'
import img5 from '../public/img/food.png'
import UserImg from '../public/img/user.png'
import StudentCard from './(Components)/StudentCard/StudentCard'



export default function Home() {
  return (

    <>
      <section className="header">
        <Navbar />
        <div className="text_box">
          <h2>GET READY</h2>
          <p id="headtext">TO DISCOVER CAMPUS</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit consequuntur corrupti sapiente aut porro
            <br /> esse blanditiis in quae perspiciatis quo.
          </p>
          <Button text="Visit us to know more" />
        </div>
      </section>

      <section className="course">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>EXPLORE OUR 60+ <br /> MAJOR PROGRAMS</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <Cards tittle="Undergraduate Programs" />
          <Cards tittle="Graduate Programs" />
          <Cards tittle="Adult Learning & Degree Completion" />
        </div>
      </section>

      <section className="campus">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>TAKE OUR VIRTUAL TOUR</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <VirtualImages heading="DELHI" scr={img} />
          <VirtualImages heading="HYDERABAD" scr={img1} />
          <VirtualImages heading="MUMBAI" scr={img2} />

        </div>
      </section>

      <section className="facilities">
        <div className="PageBlock">
          <div className="verticalLine"></div>
          <div className="Clear"></div>
        </div>
        <h1>Our Facilities</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <OurFacilitiesCard scr={img3} tittle="Best Libary" />
          <OurFacilitiesCard scr={img4} tittle="Athletics" />
          <OurFacilitiesCard scr={img5} tittle="Tasty and Healthy Food" />
        </div>
      </section>

      <section class="testimonials">
        <div class="PageBlock">
          <div class="verticalLine"></div>
          <div class="Clear"></div>
        </div>
        <h1>What Our Student Says</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
          <StudentCard scr={UserImg} classTitle="fa fa-star" />
          <StudentCard scr={UserImg} classTitle="fa fa-star-half-alt" />
        </div>
      </section>

    </>
  )
}
