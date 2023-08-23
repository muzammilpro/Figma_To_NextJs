import React from 'react'
import Navbar from '../(Components)/Navbar/Navbar'
import InputButton from '../(Components)/InputButton/InputButton'
import Footer from '../(Components)/Footer/Footer'

export default function () {
  return (
   <>
   <section class="Sub-header">
      <Navbar/>
        <h1>About Us</h1>
    </section>
    
    <section class="about-us">
        <div class="row">
            <div class="about-col">
                <h1>We are the world's largest University</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque in accusantium molestias maiores fuga vitae eos, ducimus officiis repudiandae voluptatem error. Laboriosam, numquam blanditiis aspernatur, nobis tempora consequatur id aliquam asperiores voluptatum iste animi voluptatem fugiat totam excepturi dolor.</p>
                <InputButton text="EXPLORE NOW"/>
            </div>
            <div class="about-col">
                <img src="img/about.png" alt="" />
            </div>
        </div>
    </section>


    <Footer/>



   </>
  )
}
