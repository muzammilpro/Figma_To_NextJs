import Navbar from '../(Components)/Navbar/Navbar'
import Footer from '../(Components)/Footer/Footer'
import Cards from '../(Components)/Cards/Cards'
import OurFacilitiesCard from '../(Components)/OurFacilitiesCard/OurFacilitiesCard'
import img from '../../public/img/course1.png'
import img1 from '../../public/img/course2.png'
import img2 from '../../public/img/course3.png'


export default function page() {
  return (
    <>
      <section class="Sub-header">
        <Navbar />
        <h1>Our Courses</h1>
      </section>

      <section class="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="row">
          <Cards tittle="Undergraduate Programs" />
          <Cards tittle="Graduate Programs" />
          <Cards tittle="Adult Learning & Degree Completion" />
        </div>
      </section>

      <section class="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <OurFacilitiesCard scr={img} tittle="Best Libary" />
          <OurFacilitiesCard scr={img1} tittle="Athletics" />
          <OurFacilitiesCard scr={img2} tittle="Tasty and Healthy Food" />
        </div>
      </section>

      <Footer />
    </>
  )
}
