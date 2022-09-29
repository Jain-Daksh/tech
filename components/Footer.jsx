import React from 'react'
import Image from 'next/future/image'
import Image1 from '../images/arrow-down.png'
import Image2 from '../images/spiral.png'
import Image3 from '../images/plus.png'
import Image4 from '../images/alvrio_logo-removebg-preview.png'
import { Facebook, Whatsapp, Twitter, Linkedin, Google } from 'react-bootstrap-icons'
function Footer() {
  return (
    <>
      <section className="footer mb-2">
        <div className="container mx-auto">
          <div className="row ">
            <h2 className="heading text-center mt-5">
              Let's Create Something
            </h2>
            <h2 className="heading text-center">Great Together</h2>
          </div>
          <Image src={Image1} className="svg arrow-up" />
          <div className="d-flex justify-content-center">
            <div className="mt-2">
              <button className="btn btn-outline-success mx-3 button d-flex justify-content-start" type="submit">Schedule A
                Call</button>
            </div>
            <div className="mt-2">
              <button className="btn btn-outline-success mx-3 button d-flex justify-content-start" type="submit">Stay
                Connected</button>
            </div>
          </div>
        </div>
        <Image src={Image2} className="mt-3 mb-3 spiral-footer svg" />
        <Image src={Image3} className="plus-footer svg" />
        <div className="container mt-5">
          <div className='row'>
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12  me-auto">
              <Image src={Image4} className="company-logo-footer mb-3" />
              <p className="paragraph">
                Aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.
              </p>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 ms-auto">
              <div className="row">
                <div className="col">
                  <h5 className="sub-heading text-start mb-4 me-3">Company</h5>
                  <p className="paragraph mb-2">About us</p>
                  <p className="paragraph mb-2">News</p>
                  <p className="paragraph mb-2">Blog</p>
                  <p className="paragraph mb-2">Career</p>
                </div>
                <div className="col">
                  <h5 className="sub-heading text-start mb-4">Community</h5>
                  <p className="paragraph mb-2"> Documentation </p>
                  <p className="paragraph mb-2">Faq</p>
                  <p className="paragraph mb-2">Forum</p>
                  <p className="paragraph mb-2">Sitemap</p>

                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 d-inline-block">
              <h5 className="sub-heading text-start mb-4">Stay Up to date</h5>
              <p className="paragraph">stay in touch and get all the updates</p>
              <input className="form-control" type="email" placeholder="email" aria-label="email">
              </input>
              <button type="submit" className="btn submit-button mt-1">Submit</button>
            </div>



          </div>

        </div>
        <hr />
        <div className="container">
      <div className="row  mt-3">
        <div className="col-xl-7 col-lg-6 col-md-6">
          <p className='paragraph'> © Alvrio Labs - All Rights Reserved</p>
        </div>
        <div className="col-xl-5  col-lg-6 col-md-6 d-flex justify-content-end mb-3">
          <a href="#" className="fa fa-facebook mx-1"><Facebook /></a>
          <a href="#" className="fa fa-twitter mx-1"><Twitter /></a>
          <a href="#" className="fa fa-google mx-1"><Google /></a>
          <a href="#" className="fa fa-linkedin mx-1"><Linkedin /></a>
        </div>
      </div>
    </div>
      </section>


    </>
  )
}

export default Footer


/*
   

        
        




    <hr>

    <div className="container">
      <div className="row  mt-3">
        <div className="col-xl-7 col-lg-6 col-md-6">
          <p> © Alvrio Labs - All Rights Reserved</p>
        </div>
        <div className="col-xl-5  col-lg-6 col-md-6 d-flex justify-content-end mb-3">
          <a href="#" className="fa fa-facebook mx-1"></a>
          <a href="#" className="fa fa-twitter mx-1"></a>
          <a href="#" className="fa fa-google mx-1"></a>
          <a href="#" className="fa fa-linkedin mx-1"></a>
        </div>
      </div>
    </div>
  </section>
  */